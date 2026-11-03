/**
 * TrafficAI.js - Autonomous AI Traffic System for Dr. Driving
 * Features:
 * - Multi-lane traffic flow with diverse vehicle types (sedans, taxis, SUVs, vans, sports coupes, police cruisers)
 * - Proximity detection: Raycasts ahead to brake before hitting other cars or player
 * - Smooth lane following and speed regulation (~35 - 55 km/h)
 * - Real-time 2D OBB updates for collision checking against the player car
 */

import * as THREE from 'three';

export class TrafficAI {
  constructor(scene) {
    this.scene = scene;
    this.vehicles = [];

    // Diverse vehicle types & color presets
    this.carColors = [
      { name: 'Taxi', color: 0xffd600, roofColor: 0x212121, isTaxi: true },
      { name: 'Sedan Blue', color: 0x1976d2, roofColor: 0x0d47a1 },
      { name: 'Sedan Silver', color: 0xb0bec5, roofColor: 0x37474f },
      { name: 'SUV Black', color: 0x212121, roofColor: 0x111111 },
      { name: 'Delivery Van', color: 0xff6f00, roofColor: 0xffffff, isVan: true },
      { name: 'Sports Coupe Red', color: 0xd32f2f, roofColor: 0x1e1e1e },
      { name: 'Police Cruiser', color: 0xf8fafc, roofColor: 0x0f172a, isPolice: true },
      { name: 'City Compact Green', color: 0x10b981, roofColor: 0x064e3b },
      { name: 'White SUV', color: 0xf1f5f9, roofColor: 0x334155 },
      { name: 'Orange Hatchback', color: 0xf97316, roofColor: 0x1e293b }
    ];

    this.spawnTrafficFleet();
  }

  spawnTrafficFleet() {
    // Lane definitions on Main Avenue:
    // Southbound lanes (heading towards -Z, player's direction):
    // Lane 1: x = -2.5, Lane 2: x = -7.5
    // Northbound oncoming lanes (heading towards +Z, speed ~45 km/h):
    // Lane 3: x = 2.5, Lane 4: x = 7.5

    const configs = [
      // ─── SOUTHBOUND (Player's direction) ─────────────────────────
      { laneX: -7.5, z: -35, speed: 10.8, dir: -1 },
      { laneX: -2.5, z: -75, speed: 11.5, dir: -1 },
      { laneX: -7.5, z: -115, speed: 12.2, dir: -1 },
      { laneX: -2.5, z: -155, speed: 11.0, dir: -1 },
      { laneX: -7.5, z: -195, speed: 12.8, dir: -1 },
      { laneX: -2.5, z: -240, speed: 10.5, dir: -1 },
      { laneX: -7.5, z: -285, speed: 13.0, dir: -1 },
      { laneX: -2.5, z: -330, speed: 11.2, dir: -1 },
      { laneX: -7.5, z: -375, speed: 12.5, dir: -1 },
      { laneX: -2.5, z: -420, speed: 10.8, dir: -1 },
      { laneX: -7.5, z: -465, speed: 13.2, dir: -1 },
      { laneX: -2.5, z: -510, speed: 11.6, dir: -1 },
      { laneX: -7.5, z: -555, speed: 12.4, dir: -1 },
      { laneX: -2.5, z: -600, speed: 11.0, dir: -1 },
      { laneX: -7.5, z: -645, speed: 13.5, dir: -1 },
      { laneX: -2.5, z: -690, speed: 11.8, dir: -1 },
      { laneX: -7.5, z: -735, speed: 12.6, dir: -1 },
      { laneX: -2.5, z: -780, speed: 11.4, dir: -1 },

      // ─── NORTHBOUND (Oncoming traffic) ───────────────────────────
      { laneX: 2.5, z: -20, speed: 12.0, dir: 1 },
      { laneX: 7.5, z: -60, speed: 13.2, dir: 1 },
      { laneX: 2.5, z: -100, speed: 11.4, dir: 1 },
      { laneX: 7.5, z: -140, speed: 13.8, dir: 1 },
      { laneX: 2.5, z: -180, speed: 12.2, dir: 1 },
      { laneX: 7.5, z: -225, speed: 14.0, dir: 1 },
      { laneX: 2.5, z: -270, speed: 11.8, dir: 1 },
      { laneX: 7.5, z: -315, speed: 13.5, dir: 1 },
      { laneX: 2.5, z: -360, speed: 12.4, dir: 1 },
      { laneX: 7.5, z: -405, speed: 14.2, dir: 1 },
      { laneX: 2.5, z: -450, speed: 11.6, dir: 1 },
      { laneX: 7.5, z: -495, speed: 13.6, dir: 1 },
      { laneX: 2.5, z: -540, speed: 12.0, dir: 1 },
      { laneX: 7.5, z: -585, speed: 14.5, dir: 1 },
      { laneX: 2.5, z: -630, speed: 12.2, dir: 1 },
      { laneX: 7.5, z: -675, speed: 13.8, dir: 1 },
      { laneX: 2.5, z: -720, speed: 11.5, dir: 1 },
      { laneX: 7.5, z: -765, speed: 13.4, dir: 1 }
    ];

    configs.forEach((cfg, idx) => {
      const type = this.carColors[idx % this.carColors.length];
      const vehicle = this.createVehicleMesh(type);
      vehicle.position.set(cfg.laneX, 0, cfg.z);
      vehicle.rotation.y = cfg.dir === -1 ? 0 : Math.PI;

      this.scene.add(vehicle);

      this.vehicles.push({
        mesh: vehicle,
        x: cfg.laneX,
        z: cfg.z,
        dir: cfg.dir, // -1 (southbound) or +1 (northbound)
        laneX: cfg.laneX,
        baseSpeed: cfg.speed,
        targetSpeed: cfg.speed,
        currentSpeed: cfg.speed,
        width: 1.85,
        length: 4.2,
        obbCorners: [],
        isActive: true
      });
    });

    this.setLevelDifficulty(1);
  }

  setLevelDifficulty(level) {
    this.currentLevel = level;
    let activeLimit = 36;
    if (level === 1) activeLimit = 16;      // Level 1: Visible, comfortable traffic flow
    else if (level === 2) activeLimit = 24; // Level 2: Lively highway flow
    else if (level === 3) activeLimit = 28; // Level 3: City intersections
    else if (level === 4) activeLimit = 22; // Level 4: Parking district
    else activeLimit = 36;                  // Level 5: Rush hour highway

    this.vehicles.forEach((v, idx) => {
      const active = idx < activeLimit;
      v.isActive = active;
      v.mesh.visible = active;
      if (level === 1) {
        v.targetSpeed = Math.min(10.5, v.baseSpeed); // Gentle, beginner-friendly cruise (~38 km/h)
      } else {
        v.targetSpeed = v.baseSpeed || 12.5;
      }
    });
  }

  createVehicleMesh(type) {
    const group = new THREE.Group();

    // Body
    const bodyMat = new THREE.MeshStandardMaterial({
      color: type.color,
      roughness: 0.35,
      metalness: 0.5
    });

    const isVan = !!type.isVan;
    const bodyHeight = isVan ? 1.1 : 0.65;
    const bodyGeo = new THREE.BoxGeometry(1.85, bodyHeight, 4.2);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = bodyHeight * 0.5 + 0.25;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);

    // Roof / Cabin
    if (!isVan) {
      const roofMat = new THREE.MeshStandardMaterial({
        color: type.roofColor,
        roughness: 0.3
      });
      const roof = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.62, 2.2), roofMat);
      roof.position.set(0, 1.18, 0.1);
      group.add(roof);

      // Windows
      const winMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
      const winF = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.45), winMat);
      winF.position.set(0, 1.15, -1.02);
      group.add(winF);
    }

    // Taxi Sign if taxi
    if (type.isTaxi) {
      const signMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const sign = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.15, 0.2), signMat);
      sign.position.set(0, 1.58, 0.1);
      group.add(sign);
    }

    // Police Lightbar if police
    if (type.isPolice) {
      const barGroup = new THREE.Group();
      const barBase = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.08, 0.15),
        new THREE.MeshStandardMaterial({ color: 0x111111 })
      );
      barGroup.add(barBase);

      const redLight = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.08, 0.14),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
      );
      redLight.position.x = -0.12;
      barGroup.add(redLight);

      const blueLight = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.08, 0.14),
        new THREE.MeshBasicMaterial({ color: 0x0066ff })
      );
      blueLight.position.x = 0.12;
      barGroup.add(blueLight);

      barGroup.position.set(0, 1.54, 0.1);
      group.add(barGroup);
    }

    // Wheels
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 });
    const wheelGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.22, 12);
    wheelGeo.rotateZ(Math.PI / 2);

    const wFL = new THREE.Mesh(wheelGeo, wheelMat);
    wFL.position.set(-0.85, 0.32, -1.3);
    group.add(wFL);

    const wFR = new THREE.Mesh(wheelGeo, wheelMat);
    wFR.position.set(0.85, 0.32, -1.3);
    group.add(wFR);

    const wRL = new THREE.Mesh(wheelGeo, wheelMat);
    wRL.position.set(-0.85, 0.32, 1.3);
    group.add(wRL);

    const wRR = new THREE.Mesh(wheelGeo, wheelMat);
    wRR.position.set(0.85, 0.32, 1.3);
    group.add(wRR);

    // Headlights & Tail Lights
    const headMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const hl1 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.05), headMat);
    hl1.position.set(-0.65, 0.6, -2.12);
    group.add(hl1);

    const hl2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.05), headMat);
    hl2.position.set(0.65, 0.6, -2.12);
    group.add(hl2);

    const tailMat = new THREE.MeshBasicMaterial({ color: 0xcc0000 });
    const tl1 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.05), tailMat);
    tl1.position.set(-0.65, 0.6, 2.12);
    group.add(tl1);

    const tl2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.05), tailMat);
    tl2.position.set(0.65, 0.6, 2.12);
    group.add(tl2);

    return group;
  }

  /**
   * Set active traffic density based on mission requirements
   * @param {number} level Mission Level 1 to 5
   */
  setLevelDifficulty(level) {
    this.currentLevel = level;
    let activeSouth = 0;
    let activeNorth = 0;

    if (level === 1) {
      // Mission 1: The Basics (Straight Sprint) - Minimal to none
      activeSouth = 0;
      activeNorth = 0;
    } else if (level === 2) {
      // Mission 2: City Navigation - Low density stationary / ambient
      activeSouth = 4;
      activeNorth = 4;
    } else if (level === 3) {
      // Mission 3: Precision Arrival - Light ambient cross-traffic
      activeSouth = 7;
      activeNorth = 7;
    } else if (level === 4) {
      // Mission 4: Rush Hour - High-density dynamic traffic with variable speeds
      activeSouth = 16;
      activeNorth = 16;
    } else {
      // Mission 5: The Ultimate Test - Maximum rush-hour density
      activeSouth = 18;
      activeNorth = 18;
    }

    let southCount = 0;
    let northCount = 0;

    this.vehicles.forEach((v) => {
      if (v.dir === -1) {
        v.isActive = southCount < activeSouth;
        southCount++;
      } else {
        v.isActive = northCount < activeNorth;
        northCount++;
      }
      v.mesh.visible = v.isActive;
    });
  }

  /**
   * Update AI vehicles movement, raycast proximity braking, and loop recycling
   * @param {number} dt
   * @param {VehicleDynamics} playerDynamics
   */
  update(dt, playerDynamics) {
    const minZ = -1050;
    const maxZ = 60;

    for (let i = 0; i < this.vehicles.length; i++) {
      const v = this.vehicles[i];
      if (v.isActive === false) continue;

      // 1. Proximity Braking: Check distance to vehicle/player directly ahead
      let obstacleAhead = false;

      // Check distance to player car
      const dxToPlayer = playerDynamics.x - v.x;
      const dzToPlayer = playerDynamics.z - v.z;

      // If player is in same lane column
      if (Math.abs(dxToPlayer) < 2.2) {
        // If moving southbound (-Z), player is ahead if dzToPlayer < 0
        if (v.dir === -1 && dzToPlayer < 0 && dzToPlayer > -18.0) {
          obstacleAhead = true;
        }
        // If moving northbound (+Z), player is ahead if dzToPlayer > 0
        if (v.dir === 1 && dzToPlayer > 0 && dzToPlayer < 18.0) {
          obstacleAhead = true;
        }
      }

      // Check other AI cars ahead in same lane
      for (let j = 0; j < this.vehicles.length; j++) {
        if (i === j) continue;
        const other = this.vehicles[j];
        if (other.isActive && other.dir === v.dir && Math.abs(other.x - v.x) < 1.8) {
          const dz = other.z - v.z;
          if (v.dir === -1 && dz < 0 && dz > -14.0) {
            obstacleAhead = true;
            break;
          }
          if (v.dir === 1 && dz > 0 && dz < 14.0) {
            obstacleAhead = true;
            break;
          }
        }
      }

      // Adjust speed smoothly
      if (obstacleAhead) {
        v.currentSpeed += (0 - v.currentSpeed) * Math.min(1.0, dt * 5.0);
      } else {
        v.currentSpeed += (v.targetSpeed - v.currentSpeed) * Math.min(1.0, dt * 2.0);
      }

      // Move vehicle
      v.z += v.dir * v.currentSpeed * dt;

      // Wrap around road boundaries
      if (v.dir === -1 && v.z < minZ) {
        v.z = maxZ + Math.random() * 20;
      } else if (v.dir === 1 && v.z > maxZ) {
        v.z = minZ - Math.random() * 20;
      }

      v.mesh.position.set(v.x, 0, v.z);

      // Update OBB corners for collision detection
      const halfW = v.width * 0.5;
      const halfL = v.length * 0.5;
      v.obbCorners = [
        { x: v.x - halfW, z: v.z - halfL },
        { x: v.x + halfW, z: v.z - halfL },
        { x: v.x + halfW, z: v.z + halfL },
        { x: v.x - halfW, z: v.z + halfL }
      ];
    }
  }

  /**
   * Check collision between player and any AI vehicle
   * @param {VehicleDynamics} playerDynamics
   * @returns {Object|null} vehicle if collided, or null
   */
  checkCollisionWithPlayer(playerDynamics) {
    for (const v of this.vehicles) {
      if (v.isActive === false) continue;
      if (playerDynamics.checkCollisionWithBox(v.obbCorners)) {
        return v;
      }
    }
    return null;
  }
}
