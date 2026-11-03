/**
 * Cockpit.js - Dr. Driving Cabin View, Instruments, 3D Vehicle Visuals & Animated Hands
 * 
 * Features:
 * - First-Person Cockpit View at driver's head level with windshield & dash
 * - 3D Steering Wheel with 1.5-turn visual ratio (wheelMesh.rotation.z = -currentSteer * 7.85 rad)
 * - Ergonomic Center Console with illuminated P, R, N, D shifter gate
 * - 3D Driver Hands & Arms (racing gloves with carbon knuckle guards & red Dr. Driving accents):
 *     - Left hand firmly gripping the steering wheel at 9 o'clock, dynamically tracking steering
 *     - Right hand normally gripping at 3 o'clock, smoothly animating off the wheel to the shifter
 *       knob, physically throwing the lever into gear, and returning to the wheel
 * - Dynamic Working Rearview Mirror rendered via secondary backward-facing camera
 * - Speedometer & Tachometer analog needle rotation
 * - Third-Person Chase Camera toggle
 * - Functioning brake lights, reverse lights, and amber turn signals
 */

import * as THREE from 'three';

const GEAR_CONFIG = {
  P: { z: 0.05, tilt: -0.22 },
  R: { z: 0.11, tilt: -0.08 },
  N: { z: 0.17, tilt: 0.05 },
  D: { z: 0.23, tilt: 0.20 }
};

export class Cockpit {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;

    // Root car group
    this.group = new THREE.Group();
    this.scene.add(this.group);

    // Chassis group (applies inertial pitch & roll)
    this.chassisGroup = new THREE.Group();
    this.group.add(this.chassisGroup);

    // Wheels
    this.wheelFL = null;
    this.wheelFR = null;
    this.wheelRL = null;
    this.wheelRR = null;

    // Cockpit cabin group
    this.cabinGroup = new THREE.Group();
    this.chassisGroup.add(this.cabinGroup);

    this.steeringWheelMesh = null;
    this.speedNeedle = null;
    this.rpmNeedle = null;

    // Rearview Mirror System
    this.rearCamera = null;
    this.mirrorRenderTarget = null;
    this.mirrorMaterial = null;
    this.mirrorFrameCounter = 0;

    // Lights
    this.brakeLights = [];
    this.reverseLights = [];
    this.leftIndicators = [];
    this.rightIndicators = [];

    // Cameras
    this.cockpitCamera = null;
    this.thirdPersonCamera = null;
    this.activeCameraMode = 'cockpit'; // 'cockpit' or 'chase'

    // Center Console & Shifter
    this.shifterGroup = null;
    this.shifterKnobMesh = null;
    this.gearBadges = {};
    this.gearBadgeTextures = {};
    this.currentShifterZ = GEAR_CONFIG.P.z;
    this.currentShifterTilt = GEAR_CONFIG.P.tilt;

    // 3D Driver Hands & Arms
    this.leftHandMesh = null;
    this.leftForearm = null;
    this.rightHandGroup = null;
    this.rightForearm = null;

    // Shoulder anchor points in cabin space
    this.leftShoulderPos = new THREE.Vector3(-0.56, 0.98, 0.36);
    this.rightShoulderPos = new THREE.Vector3(-0.20, 0.98, 0.36);

    // Gear shift animation state machine
    this.isShifting = false;
    this.shiftProgress = 0.0;
    this.shiftDuration = 0.35; // brisk, snappy driver shift (seconds)
    this.shiftFromGear = 'P';
    this.shiftTargetGear = 'P';
    this.currentDisplayGear = 'P';
    this.shiftStartPos = new THREE.Vector3();
    this.shiftStartQuat = new THREE.Quaternion();

    this.setupRearviewMirror();
    this.buildExterior();
    this.buildCockpit();
    this.buildCenterConsoleAndShifter();
    this.buildDriverHandsAndArms();
    this.setupCameras();
  }

  setupRearviewMirror() {
    this.mirrorRenderTarget = new THREE.WebGLRenderTarget(512, 128, {
      generateMipmaps: false,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter
    });

    this.rearCamera = new THREE.PerspectiveCamera(55, 512 / 128, 0.3, 180);
    this.rearCamera.rotation.y = Math.PI; // point backwards
    this.chassisGroup.add(this.rearCamera);
    this.rearCamera.position.set(0, 1.35, -0.2);

    this.mirrorMaterial = new THREE.MeshBasicMaterial({
      map: this.mirrorRenderTarget.texture
    });
  }

  buildExterior() {
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xe53935, // Dr. Driving vibrant red
      roughness: 0.25,
      metalness: 0.6
    });

    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x212121,
      roughness: 0.3,
      metalness: 0.5
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xa0c4ff,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85
    });

    // Lower chassis
    const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.6, 4.2), bodyMat);
    lowerBody.position.set(0, 0.55, 0);
    lowerBody.castShadow = true;
    lowerBody.receiveShadow = true;
    this.chassisGroup.add(lowerBody);

    // Front hood slope
    const hood = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.22, 1.3), bodyMat);
    hood.position.set(0, 0.72, -1.35);
    hood.rotation.x = 0.08;
    this.chassisGroup.add(hood);

    // Cabin roof (Thin top slab to prevent interior occlusion)
    const cabinRoof = new THREE.Mesh(new THREE.BoxGeometry(1.68, 0.06, 1.7), roofMat);
    cabinRoof.position.set(0, 1.48, 0.35);
    cabinRoof.castShadow = true;
    this.chassisGroup.add(cabinRoof);

    // Cabin rear panel
    const cabinBack = new THREE.Mesh(new THREE.BoxGeometry(1.68, 0.6, 0.08), bodyMat);
    cabinBack.position.set(0, 1.15, 1.2);
    cabinBack.castShadow = true;
    this.chassisGroup.add(cabinBack);

    // Windshield
    const windshield = new THREE.Mesh(new THREE.PlaneGeometry(1.65, 0.85), glassMat);
    windshield.position.set(0, 1.15, -0.85);
    windshield.rotation.x = -0.58;
    this.chassisGroup.add(windshield);

    // Headlights
    const headlightMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffee,
      emissiveIntensity: 0.85
    });
    const hlL = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.18, 0.1), headlightMat);
    hlL.position.set(-0.7, 0.65, -2.12);
    this.chassisGroup.add(hlL);

    const hlR = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.18, 0.1), headlightMat);
    hlR.position.set(0.7, 0.65, -2.12);
    this.chassisGroup.add(hlR);

    // Grille
    const grille = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.22, 0.05), new THREE.MeshStandardMaterial({ color: 0x111111 }));
    grille.position.set(0, 0.55, -2.12);
    this.chassisGroup.add(grille);

    // Brake lights
    const brakeMat = new THREE.MeshStandardMaterial({ color: 0x880000, emissive: 0x440000, emissiveIntensity: 0.3 });
    const blL = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.16, 0.08), brakeMat);
    blL.position.set(-0.7, 0.68, 2.12);
    this.chassisGroup.add(blL);
    this.brakeLights.push(blL);

    const blR = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.16, 0.08), brakeMat.clone());
    blR.position.set(0.7, 0.68, 2.12);
    this.chassisGroup.add(blR);
    this.brakeLights.push(blR);

    // Reverse lights
    const revMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, emissive: 0x000000 });
    const rlL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.08), revMat);
    rlL.position.set(-0.35, 0.68, 2.12);
    this.chassisGroup.add(rlL);
    this.reverseLights.push(rlL);

    const rlR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.08), revMat.clone());
    rlR.position.set(0.35, 0.68, 2.12);
    this.chassisGroup.add(rlR);
    this.reverseLights.push(rlR);

    // Turn Indicators
    const indMat = new THREE.MeshStandardMaterial({ color: 0xff9900, emissive: 0x000000 });
    const indGeo = new THREE.BoxGeometry(0.12, 0.12, 0.06);

    const indFL = new THREE.Mesh(indGeo, indMat);
    indFL.position.set(-0.9, 0.65, -2.05);
    this.chassisGroup.add(indFL);
    this.leftIndicators.push(indFL);

    const indRL = new THREE.Mesh(indGeo, indMat.clone());
    indRL.position.set(-0.9, 0.68, 2.05);
    this.chassisGroup.add(indRL);
    this.leftIndicators.push(indRL);

    const indFR = new THREE.Mesh(indGeo, indMat.clone());
    indFR.position.set(0.9, 0.65, -2.05);
    this.chassisGroup.add(indFR);
    this.rightIndicators.push(indFR);

    const indRR = new THREE.Mesh(indGeo, indMat.clone());
    indRR.position.set(0.9, 0.68, 2.05);
    this.chassisGroup.add(indRR);
    this.rightIndicators.push(indRR);

    // Wheels
    this.wheelFL = this.createWheel();
    this.wheelFR = this.createWheel();
    this.wheelRL = this.createWheel();
    this.wheelRR = this.createWheel();

    this.wheelFL.position.set(-0.85, 0.32, -1.3);
    this.wheelFR.position.set(0.85, 0.32, -1.3);
    this.wheelRL.position.set(-0.85, 0.32, 1.3);
    this.wheelRR.position.set(0.85, 0.32, 1.3);

    this.group.add(this.wheelFL);
    this.group.add(this.wheelFR);
    this.group.add(this.wheelRL);
    this.group.add(this.wheelRR);
  }

  createWheel() {
    const wheelGroup = new THREE.Group();

    const tireMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 });
    const tireGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.22, 16);
    tireGeo.rotateZ(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeo, tireMat);
    tire.castShadow = true;
    wheelGroup.add(tire);

    const rimMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.85, roughness: 0.2 });
    const rimGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.23, 12);
    rimGeo.rotateZ(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    wheelGroup.add(rim);

    const capGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.24, 8);
    capGeo.rotateZ(Math.PI / 2);
    const cap = new THREE.Mesh(capGeo, new THREE.MeshBasicMaterial({ color: 0xe53935 }));
    wheelGroup.add(cap);

    return wheelGroup;
  }

  buildCockpit() {
    const dashMat = new THREE.MeshStandardMaterial({ color: 0x212121, roughness: 0.85 });
    const dash = new THREE.Mesh(new THREE.BoxGeometry(1.62, 0.42, 0.85), dashMat);
    dash.position.set(0, 0.86, -0.45);
    this.cabinGroup.add(dash);

    // AC Vents
    const ventMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.3 });
    const ventL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.02), ventMat);
    ventL.position.set(-0.35, 0.95, -0.02);
    this.cabinGroup.add(ventL);

    const ventR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.02), ventMat);
    ventR.position.set(0.35, 0.95, -0.02);
    this.cabinGroup.add(ventR);

    // Hazard Button
    const hazard = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.02), new THREE.MeshBasicMaterial({ color: 0xff1744 }));
    hazard.position.set(0, 0.95, -0.02);
    this.cabinGroup.add(hazard);

    // Instrument Cluster
    const cluster = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.22, 0.02), new THREE.MeshBasicMaterial({ color: 0x050505 }));
    cluster.position.set(-0.38, 0.98, -0.03);
    cluster.rotation.x = -0.22;
    this.cabinGroup.add(cluster);

    const dialMat = new THREE.MeshBasicMaterial({ color: 0x151b22 });
    const speedDial = new THREE.Mesh(new THREE.CircleGeometry(0.085, 24), dialMat);
    speedDial.position.set(-0.46, 0.98, -0.015);
    speedDial.rotation.x = -0.22;
    this.cabinGroup.add(speedDial);

    const rpmDial = new THREE.Mesh(new THREE.CircleGeometry(0.085, 24), dialMat);
    rpmDial.position.set(-0.3, 0.98, -0.015);
    rpmDial.rotation.x = -0.22;
    this.cabinGroup.add(rpmDial);

    // Gauges Needles
    const needleMat = new THREE.MeshBasicMaterial({ color: 0xff2a2a });
    const speedNeedleGeo = new THREE.BoxGeometry(0.008, 0.07, 0.005);
    speedNeedleGeo.translate(0, 0.035, 0);
    this.speedNeedle = new THREE.Mesh(speedNeedleGeo, needleMat);
    this.speedNeedle.position.set(-0.46, 0.98, -0.01);
    this.speedNeedle.rotation.x = -0.22;
    this.cabinGroup.add(this.speedNeedle);

    const rpmNeedleGeo = new THREE.BoxGeometry(0.008, 0.07, 0.005);
    rpmNeedleGeo.translate(0, 0.035, 0);
    this.rpmNeedle = new THREE.Mesh(rpmNeedleGeo, needleMat);
    this.rpmNeedle.position.set(-0.3, 0.98, -0.01);
    this.rpmNeedle.rotation.x = -0.22;
    this.cabinGroup.add(this.rpmNeedle);

    // 3D Animated Steering Wheel
    const wheelGroup = new THREE.Group();
    wheelGroup.position.set(-0.38, 0.92, 0.12);
    wheelGroup.rotation.x = -0.38;

    const rimMat = new THREE.MeshStandardMaterial({ color: 0x1f1f1f, roughness: 0.65, metalness: 0.2 });
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.024, 14, 32), rimMat);
    wheelGroup.add(rim);

    const hubGeo = new THREE.CylinderGeometry(0.065, 0.065, 0.035, 20);
    hubGeo.rotateX(Math.PI / 2);
    const hub = new THREE.Mesh(hubGeo, new THREE.MeshStandardMaterial({ color: 0x111111 }));
    wheelGroup.add(hub);

    const emblem = new THREE.Mesh(new THREE.CircleGeometry(0.045, 16), new THREE.MeshBasicMaterial({ color: 0xffd700 }));
    emblem.position.z = 0.02;
    wheelGroup.add(emblem);

    const spokeMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.6 });
    const spokeHoriz = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.035, 0.018), spokeMat);
    wheelGroup.add(spokeHoriz);

    const spokeBottom = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.2, 0.018), spokeMat);
    spokeBottom.position.y = -0.1;
    wheelGroup.add(spokeBottom);

    this.steeringWheelMesh = wheelGroup;
    this.cabinGroup.add(wheelGroup);

    // Rearview Mirror
    const mirrorHousing = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.11, 0.04), new THREE.MeshStandardMaterial({ color: 0x1a1a1a }));
    mirrorHousing.position.set(0, 1.34, -0.18);
    mirrorHousing.rotation.x = 0.08;
    this.cabinGroup.add(mirrorHousing);

    const mirrorSurface = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.095), this.mirrorMaterial);
    mirrorSurface.position.set(0, 1.34, -0.158);
    mirrorSurface.rotation.x = 0.08;
    this.cabinGroup.add(mirrorSurface);

    // Side Mirrors
    const sideMirrorL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.1, 0.08), dashMat);
    sideMirrorL.position.set(-1.02, 0.95, -0.6);
    this.chassisGroup.add(sideMirrorL);

    const sideMirrorR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.1, 0.08), dashMat);
    sideMirrorR.position.set(1.02, 0.95, -0.6);
    this.chassisGroup.add(sideMirrorR);

    // Windshield A-Pillars
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x1e1e1e });
    const pillarL = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.9, 0.08), pillarMat);
    pillarL.position.set(-0.84, 1.18, -0.42);
    pillarL.rotation.x = -0.58;
    pillarL.rotation.z = -0.22;
    this.cabinGroup.add(pillarL);

    const pillarR = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.9, 0.08), pillarMat);
    pillarR.position.set(0.84, 1.18, -0.42);
    pillarR.rotation.x = -0.58;
    pillarR.rotation.z = 0.22;
    this.cabinGroup.add(pillarR);
  }

  /**
   * Builds the realistic Center Console & Shifter Gate with P, R, N, D indicators
   */
  buildCenterConsoleAndShifter() {
    const consoleGroup = new THREE.Group();

    // 1. Console Tunnel Base (Between Driver and Passenger)
    const consoleMat = new THREE.MeshStandardMaterial({
      color: 0x1c1e22,
      roughness: 0.75,
      metalness: 0.15
    });
    const baseTunnel = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.32, 0.82), consoleMat);
    baseTunnel.position.set(-0.05, 0.54, 0.16);
    consoleGroup.add(baseTunnel);

    // Aluminum trim accents
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0xd0d5dd,
      metalness: 0.85,
      roughness: 0.2
    });
    const trimL = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.02, 0.80), trimMat);
    trimL.position.set(-0.175, 0.70, 0.16);
    consoleGroup.add(trimL);

    const trimR = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.02, 0.80), trimMat);
    trimR.position.set(0.075, 0.70, 0.16);
    consoleGroup.add(trimR);

    // 2. Shifter Bezel & Gate Plate
    const gateBezelMat = new THREE.MeshStandardMaterial({
      color: 0x0f1115,
      metalness: 0.5,
      roughness: 0.4
    });
    const gateBezel = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.02, 0.28), gateBezelMat);
    gateBezel.position.set(-0.05, 0.71, 0.14);
    consoleGroup.add(gateBezel);

    // Chrome Gate Trim Ring
    const gateChrome = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.008, 0.29), trimMat);
    gateChrome.position.set(-0.05, 0.718, 0.14);
    consoleGroup.add(gateChrome);

    // Shifter Slot Recess (dark track where lever slides)
    const slotRecess = new THREE.Mesh(
      new THREE.BoxGeometry(0.026, 0.015, 0.22),
      new THREE.MeshBasicMaterial({ color: 0x05070a })
    );
    slotRecess.position.set(-0.05, 0.722, 0.14);
    consoleGroup.add(slotRecess);

    // 3. Illuminated P, R, N, D Gate Badges
    const gears = ['P', 'R', 'N', 'D'];
    gears.forEach((gear) => {
      const activeTex = this.createGearBadgeTexture(gear, true);
      const inactiveTex = this.createGearBadgeTexture(gear, false);
      this.gearBadgeTextures[gear] = { active: activeTex, inactive: inactiveTex };

      const badgeMat = new THREE.MeshStandardMaterial({
        map: gear === 'P' ? activeTex : inactiveTex,
        roughness: 0.3,
        emissive: gear === 'P' ? new THREE.Color(0x00f3ff) : new THREE.Color(0x111111),
        emissiveIntensity: gear === 'P' ? 0.9 : 0.15
      });

      const badgeMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.034, 0.034), badgeMat);
      badgeMesh.position.set(-0.095, 0.725, GEAR_CONFIG[gear].z);
      badgeMesh.rotation.x = -Math.PI / 2;
      consoleGroup.add(badgeMesh);

      this.gearBadges[gear] = badgeMesh;
    });

    // 4. Mechanical Shifter Lever & Ergonomic Grip Knob
    this.shifterGroup = new THREE.Group();
    this.shifterGroup.position.set(-0.05, 0.71, GEAR_CONFIG.P.z);
    this.shifterGroup.rotation.x = GEAR_CONFIG.P.tilt;

    // Leather Shifter Boot (Pleated cone base)
    const bootGeo = new THREE.ConeGeometry(0.036, 0.035, 8);
    const bootMat = new THREE.MeshStandardMaterial({
      color: 0x15171a,
      roughness: 0.9
    });
    const boot = new THREE.Mesh(bootGeo, bootMat);
    boot.position.y = 0.018;
    this.shifterGroup.add(boot);

    // Chrome Lever Shaft
    const shaftGeo = new THREE.CylinderGeometry(0.009, 0.009, 0.11, 12);
    const shaftMat = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      metalness: 0.95,
      roughness: 0.1
    });
    const shaft = new THREE.Mesh(shaftGeo, shaftMat);
    shaft.position.y = 0.065;
    this.shifterGroup.add(shaft);

    // Ergonomic Automatic Shifter Knob
    const knobGroup = new THREE.Group();
    knobGroup.position.set(0, 0.115, 0);

    const knobBodyGeo = new THREE.BoxGeometry(0.036, 0.052, 0.046);
    const knobMat = new THREE.MeshStandardMaterial({
      color: 0x181a1d,
      roughness: 0.55,
      metalness: 0.2
    });
    const knobBody = new THREE.Mesh(knobBodyGeo, knobMat);
    knobGroup.add(knobBody);

    // Metallic release button on side/front
    const btnGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.008, 12);
    btnGeo.rotateZ(Math.PI / 2);
    const btn = new THREE.Mesh(btnGeo, trimMat);
    btn.position.set(-0.02, 0.005, 0);
    knobGroup.add(btn);

    // Red racing stripe on knob top
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(0.038, 0.006, 0.016),
      new THREE.MeshBasicMaterial({ color: 0xe53935 })
    );
    stripe.position.set(0, 0.027, 0);
    knobGroup.add(stripe);

    this.shifterKnobMesh = knobGroup;
    this.shifterGroup.add(knobGroup);
    consoleGroup.add(this.shifterGroup);

    this.cabinGroup.add(consoleGroup);
  }

  /**
   * Generates crisp 2D canvas textures for 3D shifter gear letters
   */
  createGearBadgeTexture(letter, isActive) {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Rounded badge background
    ctx.fillStyle = isActive ? '#00e5ff' : '#141820';
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(4, 4, 56, 56, 12);
    } else {
      ctx.rect(4, 4, 56, 56);
    }
    ctx.fill();

    // Border
    ctx.strokeStyle = isActive ? '#ffffff' : '#2a3342';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Letter
    ctx.fillStyle = isActive ? '#000000' : '#cbd5e1';
    ctx.font = 'bold 36px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letter, 32, 34);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  /**
   * Builds 3D Driver Hands & Arms (Racing gloves with carbon knuckle guards & red accents)
   */
  buildDriverHandsAndArms() {
    // 1. Left Hand - Firmly attached to the steering wheel at 9 o'clock
    const leftHand = this.createHandMesh(false);
    leftHand.position.set(-0.22, 0.0, 0.0);
    leftHand.rotation.set(0.15, -0.25, 0.45);
    this.steeringWheelMesh.add(leftHand);
    this.leftHandMesh = leftHand;

    // Left Forearm connecting driver shoulder to left hand
    this.leftForearm = this.createForearmMesh(false);
    this.cabinGroup.add(this.leftForearm);

    // 2. Right Hand - Parented to cabinGroup for fluid transitions between Wheel & Shifter
    this.rightHandGroup = new THREE.Group();
    const rightGlove = this.createHandMesh(true);
    this.rightHandGroup.add(rightGlove);
    this.cabinGroup.add(this.rightHandGroup);

    // Right Forearm connecting driver shoulder to right hand
    this.rightForearm = this.createForearmMesh(true);
    this.cabinGroup.add(this.rightForearm);

    // Set initial resting position on steering wheel (3 o'clock)
    this.updateRightHandOnWheel(0);
  }

  /**
   * Creates a stylized, ergonomic driver racing glove mesh
   */
  createHandMesh(isRightHand) {
    const handGroup = new THREE.Group();

    const gloveMat = new THREE.MeshStandardMaterial({
      color: 0x1f2228,
      roughness: 0.65,
      metalness: 0.15
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: 0xe53935, // Dr. Driving red
      roughness: 0.45,
      metalness: 0.2
    });
    const knuckleMat = new THREE.MeshStandardMaterial({
      color: 0x111317,
      roughness: 0.35,
      metalness: 0.4
    });
    const padMat = new THREE.MeshStandardMaterial({
      color: 0x323742,
      roughness: 0.8
    });

    // Palm / Hand Base
    const palmGeo = new THREE.BoxGeometry(0.062, 0.034, 0.072);
    const palm = new THREE.Mesh(palmGeo, gloveMat);
    palm.castShadow = true;
    handGroup.add(palm);

    // Carbon Knuckle Protector (Upper side)
    const knuckleGeo = new THREE.BoxGeometry(0.058, 0.012, 0.034);
    const knuckle = new THREE.Mesh(knuckleGeo, knuckleMat);
    knuckle.position.set(0, 0.018, 0.005);
    handGroup.add(knuckle);

    // Dr. Driving Red Accent Stripe
    const redStripe = new THREE.Mesh(new THREE.BoxGeometry(0.064, 0.006, 0.012), accentMat);
    redStripe.position.set(0, 0.019, -0.018);
    handGroup.add(redStripe);

    // 4 Curled Fingers wrapping around rim or knob
    const fingerOffsets = [-0.022, -0.007, 0.007, 0.022];
    fingerOffsets.forEach((xOff, idx) => {
      const fingerGroup = new THREE.Group();
      fingerGroup.position.set(xOff, 0.004, -0.036);

      // Proximal phalanx
      const proxGeo = new THREE.CylinderGeometry(0.0065, 0.0065, 0.026, 8);
      proxGeo.rotateX(Math.PI / 4);
      const prox = new THREE.Mesh(proxGeo, gloveMat);
      prox.position.set(0, -0.008, -0.010);
      fingerGroup.add(prox);

      // Distal phalanx (curling inwards around grip)
      const distGeo = new THREE.CylinderGeometry(0.0055, 0.0055, 0.022, 8);
      distGeo.rotateX(Math.PI / 1.8);
      const dist = new THREE.Mesh(distGeo, padMat);
      dist.position.set(0, -0.022, -0.016);
      fingerGroup.add(dist);

      handGroup.add(fingerGroup);
    });

    // Thumb gripping inside
    const thumbGroup = new THREE.Group();
    const thumbX = isRightHand ? -0.034 : 0.034;
    thumbGroup.position.set(thumbX, -0.004, -0.008);
    thumbGroup.rotation.set(0.3, isRightHand ? 0.6 : -0.6, isRightHand ? -0.5 : 0.5);

    const thumbGeo = new THREE.CylinderGeometry(0.007, 0.007, 0.032, 8);
    thumbGeo.rotateX(Math.PI / 3);
    const thumb = new THREE.Mesh(thumbGeo, gloveMat);
    thumbGroup.add(thumb);
    handGroup.add(thumbGroup);

    // Glove Wrist Cuff Ring
    const cuffGeo = new THREE.CylinderGeometry(0.034, 0.036, 0.022, 12);
    cuffGeo.rotateX(Math.PI / 2);
    const cuffMat = new THREE.MeshStandardMaterial({
      color: 0x16181c,
      roughness: 0.7
    });
    const cuff = new THREE.Mesh(cuffGeo, cuffMat);
    cuff.position.set(0, 0, 0.042);
    handGroup.add(cuff);

    // Red piping ring on wrist cuff
    const cuffPiping = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.003, 8, 16), accentMat);
    cuffPiping.position.set(0, 0, 0.052);
    handGroup.add(cuffPiping);

    return handGroup;
  }

  /**
   * Creates a driver forearm sleeve with racing suit styling
   */
  createForearmMesh(isRightHand) {
    const armGroup = new THREE.Group();

    const sleeveMat = new THREE.MeshStandardMaterial({
      color: 0x14161a,
      roughness: 0.85
    });
    const stripeMat = new THREE.MeshStandardMaterial({
      color: 0xe53935,
      roughness: 0.4
    });

    // Tapered Forearm Cylinder
    const sleeveGeo = new THREE.CylinderGeometry(0.031, 0.038, 0.24, 12);
    sleeveGeo.rotateX(Math.PI / 2);
    const sleeve = new THREE.Mesh(sleeveGeo, sleeveMat);
    armGroup.add(sleeve);

    // Racing Accent Stripe along outer forearm
    const stripeGeo = new THREE.BoxGeometry(0.008, 0.008, 0.23);
    const stripe = new THREE.Mesh(stripeGeo, stripeMat);
    stripe.position.set(isRightHand ? 0.034 : -0.034, 0.015, 0);
    armGroup.add(stripe);

    return armGroup;
  }

  /**
   * Triggers the organic 3D Hand Movement sequence to shift gears
   * @param {string} targetGear 'P', 'R', 'N', or 'D'
   */
  triggerHandShift(targetGear) {
    if (!['P', 'R', 'N', 'D'].includes(targetGear)) return;
    if (this.currentDisplayGear === targetGear && !this.isShifting) return;

    this.shiftTargetGear = targetGear;
    this.shiftFromGear = this.currentDisplayGear;
    this.isShifting = true;
    this.shiftProgress = 0.0;

    // Capture starting hand pose
    if (this.rightHandGroup) {
      this.shiftStartPos.copy(this.rightHandGroup.position);
      this.shiftStartQuat.copy(this.rightHandGroup.quaternion);
    }
  }

  /**
   * Computes the 3 o'clock grip position and rotation on the steering wheel in cabin space
   */
  getWheelGripPose() {
    const gripPos = new THREE.Vector3(0.22, 0.0, 0.0);
    gripPos.applyQuaternion(this.steeringWheelMesh.quaternion);
    gripPos.add(this.steeringWheelMesh.position);

    const gripQuat = new THREE.Quaternion().copy(this.steeringWheelMesh.quaternion);
    // Offset Euler to natural hand resting orientation at 3 o'clock
    const handOffset = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.15, 0.25, -0.45));
    gripQuat.multiply(handOffset);

    return { position: gripPos, quaternion: gripQuat };
  }

  /**
   * Computes the gear knob position and grip rotation in cabin space
   */
  getKnobGripPose(gear) {
    const gearZ = GEAR_CONFIG[gear] ? GEAR_CONFIG[gear].z : GEAR_CONFIG.P.z;
    const knobPos = new THREE.Vector3(-0.05, 0.825, gearZ);

    // Palm rests on top-back of knob, tilted forward
    const knobQuat = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(0.42, -0.22, -0.25, 'YXZ')
    );

    return { position: knobPos, quaternion: knobQuat };
  }

  /**
   * Smoothstep easing for human-like acceleration and deceleration
   */
  smoothstep(t) {
    const c = Math.max(0, Math.min(1, t));
    return c * c * (3 - 2 * c);
  }

  /**
   * Update Right Hand positions during shifting or normal driving
   */
  updateRightHand(dt) {
    if (!this.rightHandGroup || !this.steeringWheelMesh) return;

    const wheelGrip = this.getWheelGripPose();

    if (!this.isShifting) {
      // Normal Driving: Grips steering wheel at 3 o'clock, turning with wheel
      this.rightHandGroup.position.copy(wheelGrip.position);
      this.rightHandGroup.quaternion.copy(wheelGrip.quaternion);

      // Shifter lever rests in current gear position
      const targetZ = GEAR_CONFIG[this.currentDisplayGear].z;
      const targetTilt = GEAR_CONFIG[this.currentDisplayGear].tilt;
      this.currentShifterZ = THREE.MathUtils.damp(this.currentShifterZ, targetZ, 16.0, dt);
      this.currentShifterTilt = THREE.MathUtils.damp(this.currentShifterTilt, targetTilt, 16.0, dt);
      if (this.shifterGroup) {
        this.shifterGroup.position.z = this.currentShifterZ;
        this.shifterGroup.rotation.x = this.currentShifterTilt;
      }
      return;
    }

    // SHIFTING ANIMATION SEQUENCE (Total ~0.52 seconds)
    this.shiftProgress += dt / this.shiftDuration;
    const u = Math.min(1.0, this.shiftProgress);

    const fromKnob = this.getKnobGripPose(this.shiftFromGear);
    const toKnob = this.getKnobGripPose(this.shiftTargetGear);

    if (u < 0.32) {
      // Phase 1: REACH (Hand lifts off wheel, arches gracefully toward shifter knob)
      const p = this.smoothstep(u / 0.32);
      this.rightHandGroup.position.lerpVectors(this.shiftStartPos, fromKnob.position, p);
      // Natural parabolic arc height loft
      this.rightHandGroup.position.y += Math.sin(p * Math.PI) * 0.085;
      this.rightHandGroup.quaternion.slerpQuaternions(this.shiftStartQuat, fromKnob.quaternion, p);
    } else if (u < 0.68) {
      // Phase 2: THROW (Hand firmly grips knob and throws lever along gate to target slot)
      const p = this.smoothstep((u - 0.32) / 0.36);
      this.rightHandGroup.position.lerpVectors(fromKnob.position, toKnob.position, p);
      this.rightHandGroup.quaternion.slerpQuaternions(fromKnob.quaternion, toKnob.quaternion, p);

      // Lever follows hand in sync
      this.currentShifterZ = THREE.MathUtils.lerp(
        GEAR_CONFIG[this.shiftFromGear].z,
        GEAR_CONFIG[this.shiftTargetGear].z,
        p
      );
      this.currentShifterTilt = THREE.MathUtils.lerp(
        GEAR_CONFIG[this.shiftFromGear].tilt,
        GEAR_CONFIG[this.shiftTargetGear].tilt,
        p
      );

      if (this.shifterGroup) {
        this.shifterGroup.position.z = this.currentShifterZ;
        this.shifterGroup.rotation.x = this.currentShifterTilt;
      }

      // Switch active gear badge illumination when lever crosses midpoint
      if (p >= 0.5 && this.currentDisplayGear !== this.shiftTargetGear) {
        this.currentDisplayGear = this.shiftTargetGear;
        this.updateGearBadges(this.shiftTargetGear);
      }
    } else if (u < 0.78) {
      // Phase 3: PAUSE (Tactile confirmation, hand briefly settles on engaged gear)
      this.rightHandGroup.position.copy(toKnob.position);
      this.rightHandGroup.quaternion.copy(toKnob.quaternion);

      this.currentShifterZ = GEAR_CONFIG[this.shiftTargetGear].z;
      this.currentShifterTilt = GEAR_CONFIG[this.shiftTargetGear].tilt;
      if (this.shifterGroup) {
        this.shifterGroup.position.z = this.currentShifterZ;
        this.shifterGroup.rotation.x = this.currentShifterTilt;
      }
    } else {
      // Phase 4: RETURN (Hand releases knob, arches up, and returns smoothly to steering wheel)
      const p = this.smoothstep((u - 0.78) / 0.22);
      this.rightHandGroup.position.lerpVectors(toKnob.position, wheelGrip.position, p);
      // Return arc height loft
      this.rightHandGroup.position.y += Math.sin(p * Math.PI) * 0.075;
      this.rightHandGroup.quaternion.slerpQuaternions(toKnob.quaternion, wheelGrip.quaternion, p);

      if (u >= 1.0) {
        this.isShifting = false;
        this.currentDisplayGear = this.shiftTargetGear;
        this.updateGearBadges(this.shiftTargetGear);
      }
    }
  }

  /**
   * Sets initial resting position on wheel
   */
  updateRightHandOnWheel(steerAngle) {
    if (!this.rightHandGroup || !this.steeringWheelMesh) return;
    const wheelGrip = this.getWheelGripPose();
    this.rightHandGroup.position.copy(wheelGrip.position);
    this.rightHandGroup.quaternion.copy(wheelGrip.quaternion);
  }

  /**
   * Dynamically aligns a forearm mesh between shoulder and wrist
   */
  updateForearm(forearmMesh, shoulderPos, wristPos, isRight) {
    if (!forearmMesh) return;

    const dir = new THREE.Vector3().subVectors(wristPos, shoulderPos);
    const dist = dir.length();
    const mid = new THREE.Vector3().addVectors(shoulderPos, wristPos).multiplyScalar(0.5);

    // Natural slight outward elbow bend
    mid.x += isRight ? 0.038 : -0.038;
    mid.y -= 0.028;

    forearmMesh.position.copy(mid);
    forearmMesh.lookAt(wristPos);

    // Scale length along Z to bridge the dynamic distance
    const baseLength = 0.24;
    forearmMesh.scale.set(1.0, 1.0, Math.max(0.65, dist / baseLength));
  }

  /**
   * Updates illuminated badges on center console gate
   */
  updateGearBadges(activeGear) {
    const gears = ['P', 'R', 'N', 'D'];
    gears.forEach((gear) => {
      const badge = this.gearBadges[gear];
      const textures = this.gearBadgeTextures[gear];
      if (badge && textures) {
        const isActive = (gear === activeGear);
        badge.material.map = isActive ? textures.active : textures.inactive;
        badge.material.emissive.setHex(isActive ? 0x00f3ff : 0x111111);
        badge.material.emissiveIntensity = isActive ? 0.95 : 0.15;
        badge.material.needsUpdate = true;
      }
    });
  }

  setupCameras() {
    // 1. Cockpit Camera: Driver's head viewpoint
    this.cockpitCamera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 300);
    this.cockpitCamera.position.set(-0.38, 1.25, 0.32);
    this.chassisGroup.add(this.cockpitCamera);

    // 2. Third-person Chase Camera
    this.thirdPersonCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.2, 500);
    this.thirdPersonCamera.position.set(0, 2.8, 6.8);
    this.scene.add(this.thirdPersonCamera);
  }

  toggleCameraMode() {
    this.activeCameraMode = (this.activeCameraMode === 'cockpit') ? 'chase' : 'cockpit';
    return this.activeCameraMode;
  }

  getActiveCamera() {
    return this.activeCameraMode === 'cockpit' ? this.cockpitCamera : this.thirdPersonCamera;
  }

  /**
   * Update Car Model transforms and animations every frame
   * @param {VehiclePhysics} physics
   * @param {number} currentSteer Normalized steering input [-1.0, 1.0]
   * @param {number} dt Delta time in seconds
   */
  update(physics, currentSteer, dt) {
    this.group.position.set(physics.x, physics.y, physics.z);
    this.group.rotation.y = physics.heading;

    // Auto-sync shifting if physics gear changed externally (e.g. keyboard or mission reset)
    if (physics.gear && physics.gear !== this.currentDisplayGear && !this.isShifting) {
      this.triggerHandShift(physics.gear);
    }

    // Apply Chassis Pitch & Roll (Inertial dynamics)
    this.chassisGroup.rotation.x = physics.pitch;
    this.chassisGroup.rotation.z = physics.roll;
    this.chassisGroup.position.y = physics.vibrationOffset;

    // Wheel Roll & Steer
    const wheelCircumference = 2 * Math.PI * 0.32;
    const rollAngle = (physics.speed * dt) / wheelCircumference * 2 * Math.PI;

    this.wheelFL.rotation.y = physics.steerAngle;
    this.wheelFR.rotation.y = physics.steerAngle;

    this.wheelFL.children[0].rotation.x += rollAngle;
    this.wheelFR.children[0].rotation.x += rollAngle;
    this.wheelRL.children[0].rotation.x += rollAngle;
    this.wheelRR.children[0].rotation.x += rollAngle;

    // 3D STEERING WHEEL MESH ANIMATION:
    // Linked directly to currentSteer with a 1.5-turn visual ratio
    if (this.steeringWheelMesh) {
      this.steeringWheelMesh.rotation.z = -currentSteer * 7.85;
    }

    // Left Wrist tracking in cabin space & Left Forearm orientation
    if (this.steeringWheelMesh && this.leftForearm) {
      const leftWristPos = new THREE.Vector3(-0.22, 0.0, 0.0);
      leftWristPos.applyQuaternion(this.steeringWheelMesh.quaternion);
      leftWristPos.add(this.steeringWheelMesh.position);

      this.updateForearm(this.leftForearm, this.leftShoulderPos, leftWristPos, false);
    }

    // Right Hand and Forearm dynamic shifting or steering
    this.updateRightHand(dt);
    if (this.rightHandGroup && this.rightForearm) {
      this.updateForearm(this.rightForearm, this.rightShoulderPos, this.rightHandGroup.position, true);
    }

    // Speedometer Needle (calibrated for 0 to 100 km/h)
    if (this.speedNeedle) {
      const speedNorm = Math.min(1.0, Math.max(0, Math.abs(physics.speedKmh) / 100));
      this.speedNeedle.rotation.z = 2.0 - speedNorm * 4.0;
    }

    // Dynamic Speed FOV (Calibrated for 80-90 km/h cruising)
    if (this.activeCameraMode === 'cockpit' && this.cockpitCamera) {
      const speedRatio = Math.min(1.0, Math.abs(physics.speedKmh) / 85);
      const targetFov = 65 + speedRatio * 8;
      this.cockpitCamera.fov = THREE.MathUtils.lerp(this.cockpitCamera.fov, targetFov, Math.min(1.0, dt * 5.0));
      this.cockpitCamera.updateProjectionMatrix();
    }

    // Tachometer Needle
    if (this.rpmNeedle) {
      const rpmNorm = Math.min(1.0, Math.max(0, physics.rpm / 8000));
      this.rpmNeedle.rotation.z = 2.0 - rpmNorm * 4.0;
    }

    // Brake lights
    this.brakeLights.forEach((light) => {
      light.material.emissiveIntensity = (Math.abs(physics.speedKmh) > 0.1 && physics.speed < 0) || physics.gear === 'P' ? 1.0 : 0.25;
      light.material.emissive.setHex(0xff0000);
    });

    // Reverse lights
    const isReverse = physics.gear === 'R';
    this.reverseLights.forEach((light) => {
      light.material.emissive.setHex(isReverse ? 0xffffff : 0x000000);
    });

    // Blinking turn signals
    const blinkPhase = Math.floor(performance.now() / 360) % 2 === 0;
    const isLeftSig = physics.turnSignal === 'left' || physics.turnSignal === 'hazard';
    const isRightSig = physics.turnSignal === 'right' || physics.turnSignal === 'hazard';

    this.leftIndicators.forEach((light) => {
      light.material.emissive.setHex(isLeftSig && blinkPhase ? 0xff9900 : 0x000000);
    });
    this.rightIndicators.forEach((light) => {
      light.material.emissive.setHex(isRightSig && blinkPhase ? 0xff9900 : 0x000000);
    });

    // Chase Camera Follow
    if (this.activeCameraMode === 'chase' && this.thirdPersonCamera) {
      const followDist = 6.8;
      const followHeight = 2.8;

      const behindX = physics.x + Math.sin(physics.heading) * followDist;
      const behindZ = physics.z + Math.cos(physics.heading) * followDist;
      const targetPos = new THREE.Vector3(behindX, physics.y + followHeight, behindZ);

      this.thirdPersonCamera.position.lerp(targetPos, Math.min(1.0, dt * 8.0));
      this.thirdPersonCamera.lookAt(physics.x, physics.y + 1.2, physics.z);
    }
  }

  /**
   * Render Rearview Mirror Pass (Throttled & only in cockpit view)
   */
  renderMirror(scene) {
    if (this.activeCameraMode !== 'cockpit') return;
    if (!this.rearCamera || !this.mirrorRenderTarget || !this.renderer) return;

    this.mirrorFrameCounter = (this.mirrorFrameCounter || 0) + 1;
    if (this.mirrorFrameCounter % 2 !== 0) return;

    const prevRenderTarget = this.renderer.getRenderTarget();
    this.chassisGroup.visible = false;
    this.renderer.setRenderTarget(this.mirrorRenderTarget);
    this.renderer.render(scene, this.rearCamera);
    this.renderer.setRenderTarget(prevRenderTarget);
    this.chassisGroup.visible = true;
  }
}
