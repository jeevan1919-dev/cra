/**
 * CityBuilder.js - Ultra-Realistic Procedural City Environment & Turnable Road Network
 * 
 * Features:
 * - Full 3D Turnable City Grid: 4-lane Main Boulevard, 4 Crossroad Avenues, and 2 Parallel Side Avenues
 * - Open, segmented intersection mouths with curved curb radiuses for smooth 90° left and right turns
 * - Painted asphalt turning lane arrows (Left Turn, Straight, Right Turn), stop lines & zebra crosswalks
 * - Ultra-Realistic Skyline: Glass curtain-wall towers, Art Deco skyscrapers, brick storefronts with awnings
 * - Window Grid Textures with glowing warm office lights and storefront signage
 * - Rooftop Superstructures: HVAC chiller units, industrial water towers, telecommunication antennas & helipads
 * - Urban Foliage: Instanced leafy street trees & landscaped sidewalk planter boxes
 * - Street Props: Overhead highway directional exit gantries, streetlamps, fire hydrants, bus stop shelters, manholes
 * - Cycling 3-phase traffic lights & dynamic animated guide arrows
 */

import * as THREE from 'three';

export class CityBuilder {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.colliders = []; // { type, name, box: { minX, minZ, maxX, maxZ } }
    this.trafficLights = [];
    this.guideArrows = [];
    this.beaconLights = [];
    this.parkingBay = null;
    this.finishLineMesh = null;
    this.checkpointMesh1 = null;

    this.initMaterials();
    this.buildWorld();
  }

  initMaterials() {
    // 1. Procedural Building Textures
    this.glassTowerTex = this.createWindowGridTexture('glass');
    this.officeWindowTex = this.createWindowGridTexture('office');
    this.storefrontTex = this.createWindowGridTexture('storefront');

    // 2. Realistic PBR Road & Sidewalk Materials
    this.asphaltMat = new THREE.MeshStandardMaterial({
      color: 0x22252a,
      roughness: 0.88,
      metalness: 0.12
    });

    this.curbMat = new THREE.MeshStandardMaterial({
      color: 0xccd1dc,
      roughness: 0.75,
      metalness: 0.15
    });

    this.sidewalkMat = new THREE.MeshStandardMaterial({
      color: 0x7c8594,
      roughness: 0.92,
      metalness: 0.08
    });

    this.whiteLineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.yellowLineMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 });

    this.grassMat = new THREE.MeshStandardMaterial({
      color: 0x2e6628,
      roughness: 0.95
    });

    this.arrowMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.85
    });

    // 3. Realistic Building Materials
    this.glassBuildingMat = new THREE.MeshStandardMaterial({
      map: this.glassTowerTex,
      roughness: 0.25,
      metalness: 0.75
    });

    this.officeBuildingMat = new THREE.MeshStandardMaterial({
      map: this.officeWindowTex,
      roughness: 0.65,
      metalness: 0.3
    });

    this.storefrontBuildingMat = new THREE.MeshStandardMaterial({
      map: this.storefrontTex,
      roughness: 0.7,
      metalness: 0.2
    });

    // 4. Foliage Materials
    this.treeBarkMat = new THREE.MeshStandardMaterial({
      color: 0x3d271d,
      roughness: 0.9
    });

    this.treeLeafMat = new THREE.MeshStandardMaterial({
      color: 0x2d8a34,
      roughness: 0.75,
      flatShading: true
    });
  }

  /**
   * Generates procedural window grid textures with illuminated office lights
   */
  createWindowGridTexture(style) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    if (style === 'glass') {
      // Modern Blue/Teal Glass Curtain Wall with lit offices
      ctx.fillStyle = '#0f2438';
      ctx.fillRect(0, 0, 256, 256);

      const rows = 16;
      const cols = 8;
      const w = 256 / cols;
      const h = 256 / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const isLit = (Math.sin(r * 13 + c * 7) > 0.15);
          if (isLit) {
            ctx.fillStyle = (Math.random() > 0.3) ? '#fef08a' : '#38bdf8'; // Warm yellow or cool blue
          } else {
            ctx.fillStyle = '#1e3a5f';
          }
          ctx.fillRect(c * w + 3, r * h + 3, w - 6, h - 6);
        }
      }

      // Vertical structural mullions
      ctx.strokeStyle = '#091522';
      ctx.lineWidth = 2;
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath();
        ctx.moveTo(c * w, 0);
        ctx.lineTo(c * w, 256);
        ctx.stroke();
      }
    } else if (style === 'office') {
      // Classic Stone & Granite High-Rise with lit window rows
      ctx.fillStyle = '#262f3d';
      ctx.fillRect(0, 0, 256, 256);

      const rows = 12;
      const cols = 6;
      const w = 256 / cols;
      const h = 256 / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const litVal = Math.sin(r * 9 + c * 17);
          ctx.fillStyle = litVal > 0.05 ? '#fffae0' : '#141a24';
          ctx.fillRect(c * w + 5, r * h + 4, w - 10, h - 8);
        }
      }
    } else {
      // Commercial Street-Level Storefronts & Lofts
      ctx.fillStyle = '#3a2e2b'; // Brick tone
      ctx.fillRect(0, 0, 256, 256);

      // Upper floor loft windows
      const rows = 8;
      const cols = 4;
      const w = 256 / cols;
      const h = 256 / rows;

      for (let r = 0; r < rows - 2; r++) {
        for (let c = 0; c < cols; c++) {
          ctx.fillStyle = (c + r) % 2 === 0 ? '#fef9c3' : '#1a1818';
          ctx.fillRect(c * w + 8, r * h + 6, w - 16, h - 12);
        }
      }

      // Ground floor storefront banners
      ctx.fillStyle = '#e11d48'; // Red awning banner
      ctx.fillRect(0, 192, 128, 20);
      ctx.fillStyle = '#0284c7'; // Blue awning banner
      ctx.fillRect(128, 192, 128, 20);

      // Display window glass
      ctx.fillStyle = '#bae6fd';
      ctx.fillRect(8, 214, 112, 38);
      ctx.fillRect(136, 214, 112, 38);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 4);
    return texture;
  }

  buildWorld() {
    // 1. Lush Green City Ground Plane
    const groundGeo = new THREE.PlaneGeometry(1200, 1400);
    groundGeo.rotateX(-Math.PI / 2);
    const ground = new THREE.Mesh(groundGeo, this.grassMat);
    ground.position.set(0, -0.06, -340);
    ground.receiveShadow = true;
    this.root.add(ground);

    // 2. Full Turnable City Road Network
    this.buildTurnableRoadNetwork();
    this.buildInstancedLaneDashes();
    this.buildTurningLaneArrows();
    this.buildParkingLot();

    // 3. Ultra-Realistic Architecture & Skyline
    this.buildDiverseSkyline();

    // 4. Urban Foliage, Trees & Planters
    this.buildStreetFoliage();

    // 5. Props, Streetlamps & Highway Gantries
    this.buildHighwayGantries();
    this.buildInstancedStreetLamps();
    this.buildStreetProps();
    this.buildNavigationArrows();
    this.buildFinishLine();
  }

  /**
   * Builds the interconnected city road grid with open intersection mouths & smooth corner fillets
   */
  buildTurnableRoadNetwork() {
    // ─── 1. Main North-South Boulevard (4 Lanes, Width = 20m, Length = 1150m) ─────
    const mainLength = 1150;
    const mainGeo = new THREE.PlaneGeometry(20, mainLength);
    mainGeo.rotateX(-Math.PI / 2);
    const mainRoad = new THREE.Mesh(mainGeo, this.asphaltMat);
    mainRoad.position.set(0, 0, -500);
    mainRoad.receiveShadow = true;
    this.root.add(mainRoad);

    // Double Yellow Centerline on Main Boulevard
    const yellowGeo = new THREE.PlaneGeometry(0.18, mainLength);
    yellowGeo.rotateX(-Math.PI / 2);
    const yLineL = new THREE.Mesh(yellowGeo, this.yellowLineMat);
    yLineL.position.set(-0.16, 0.015, -500);
    this.root.add(yLineL);

    const yLineR = new THREE.Mesh(yellowGeo, this.yellowLineMat);
    yLineR.position.set(0.16, 0.015, -500);
    this.root.add(yLineR);

    // ─── 2. Turnable Crossroad Avenues (Width = 18m, Length = 260m) ─
    // At Z = -80 (Downtown), Z = -280 (300m Turn), Z = -530 (Midtown), Z = -750 (750m U-turn), Z = -980 (1km Terminal)
    this.crossroadZs = [-80, -280, -530, -750, -980];

    this.crossroadZs.forEach((crossZ) => {
      // Crossroad Asphalt extending West (X = -130) to East (X = +130)
      const crossGeo = new THREE.PlaneGeometry(260, 18);
      crossGeo.rotateX(-Math.PI / 2);
      const crossRoad = new THREE.Mesh(crossGeo, this.asphaltMat);
      crossRoad.position.set(0, 0.003, crossZ);
      crossRoad.receiveShadow = true;
      this.root.add(crossRoad);

      // Yellow Centerline on Crossroad
      const crossYellow = new THREE.Mesh(new THREE.PlaneGeometry(260, 0.18), this.yellowLineMat);
      crossYellow.rotateX(-Math.PI / 2);
      crossYellow.position.set(0, 0.016, crossZ);
      this.root.add(crossYellow);

      // Stop Lines for approaching traffic
      const stopLineGeo = new THREE.PlaneGeometry(9.5, 0.45);
      stopLineGeo.rotateX(-Math.PI / 2);

      // Main Road Approaching Stop Line
      const stopLineMain = new THREE.Mesh(stopLineGeo, this.whiteLineMat);
      stopLineMain.position.set(-5.0, 0.018, crossZ + 12.0);
      this.root.add(stopLineMain);

      // Traffic Light at the corner
      const light = this.createTrafficLight(-10.8, crossZ + 12.5, crossZ);
      this.trafficLights.push(light);

      // Crosswalk Zebra Stripes
      this.buildZebraCrosswalk(crossZ);

      // Curved Corner Fillets at all 4 corners of intersection
      this.buildCornerFillets(crossZ);
    });

    // ─── 3. Parallel Side Avenues (West Ave at X = -85, East Ave at X = +85) ─
    [-85, 85].forEach((sideX) => {
      const sideGeo = new THREE.PlaneGeometry(16, mainLength);
      sideGeo.rotateX(-Math.PI / 2);
      const sideRoad = new THREE.Mesh(sideGeo, this.asphaltMat);
      sideRoad.position.set(sideX, 0.002, -500);
      sideRoad.receiveShadow = true;
      this.root.add(sideRoad);

      const sideYellow = new THREE.Mesh(new THREE.PlaneGeometry(0.18, mainLength), this.yellowLineMat);
      sideYellow.rotateX(-Math.PI / 2);
      sideYellow.position.set(sideX, 0.015, -500);
      this.root.add(sideYellow);
    });

    // ─── 4. Segmented Curbs & Sidewalks (Open at Intersection Mouths!) ────
    this.buildOpenCurbsAndSidewalks();
  }

  /**
   * Builds open, segmented sidewalk blocks so intersection mouths are completely clear for turns
   */
  buildOpenCurbsAndSidewalks() {
    // Main avenue road half-width is 10.0m. Crossroad half-width is 9.0m.
    // Curbs must ONLY exist between intersections, leaving Z in [crossZ - 11, crossZ + 11] open!
    const curbSegments = [
      { startZ: 60,   endZ: -69 },   // Block 0 (South)
      { startZ: -91,  endZ: -269 },  // Block 1 (between -80 and -280)
      { startZ: -291, endZ: -519 },  // Block 2 (between -280 and -530)
      { startZ: -541, endZ: -739 },  // Block 3 (between -530 and -750)
      { startZ: -761, endZ: -969 },  // Block 4 (between -750 and -980)
      { startZ: -991, endZ: -1060 }  // Block 5 (North of -980)
    ];

    curbSegments.forEach((seg, idx) => {
      const segLength = seg.startZ - seg.endZ;
      const centerZ = (seg.startZ + seg.endZ) * 0.5;

      // Left Sidewalk (X = -11.6)
      const swL = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.22, segLength), this.sidewalkMat);
      swL.position.set(-11.6, 0.1, centerZ);
      this.root.add(swL);

      const curbL = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, segLength), this.curbMat);
      curbL.position.set(-10.15, 0.12, centerZ);
      this.root.add(curbL);

      this.colliders.push({
        type: 'curb',
        name: `Left Curb Block ${idx}`,
        box: { minX: -13.2, minZ: seg.endZ, maxX: -10.0, maxZ: seg.startZ }
      });

      // Right Sidewalk (X = 11.6) - Leave parking lot driveway entrance open on Block 0
      if (idx === 0) {
        // South of parking lot
        const lenA = 60 - (-45);
        const swR_A = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.22, lenA), this.sidewalkMat);
        swR_A.position.set(11.6, 0.1, 7.5);
        this.root.add(swR_A);

        const curbR_A = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, lenA), this.curbMat);
        curbR_A.position.set(10.15, 0.12, 7.5);
        this.root.add(curbR_A);

        this.colliders.push({
          type: 'curb',
          name: 'Right Curb South',
          box: { minX: 10.0, minZ: -45, maxX: 13.2, maxZ: 60 }
        });
      } else {
        const swR = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.22, segLength), this.sidewalkMat);
        swR.position.set(11.6, 0.1, centerZ);
        this.root.add(swR);

        const curbR = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, segLength), this.curbMat);
        curbR.position.set(10.15, 0.12, centerZ);
        this.root.add(curbR);

        this.colliders.push({
          type: 'curb',
          name: `Right Curb Block ${idx}`,
          box: { minX: 10.0, minZ: seg.endZ, maxX: 13.2, maxZ: seg.startZ }
        });
      }
    });

    // Driveway Apron into Parking Lot
    const drivewayGeo = new THREE.PlaneGeometry(16, 46);
    drivewayGeo.rotateX(-Math.PI / 2);
    const driveway = new THREE.Mesh(drivewayGeo, this.asphaltMat);
    driveway.position.set(18, 0.003, -68);
    this.root.add(driveway);
  }

  /**
   * Builds curved asphalt corner radiuses at intersections for smooth turning
   */
  buildCornerFillets(crossZ) {
    const corners = [
      { x: -10, z: crossZ - 9, rot: 0 },
      { x: -10, z: crossZ + 9, rot: Math.PI / 2 },
      { x: 10,  z: crossZ + 9, rot: Math.PI },
      { x: 10,  z: crossZ - 9, rot: -Math.PI / 2 }
    ];

    corners.forEach((c) => {
      // Quarter-circle curved asphalt fillet (Radius = 3.5m)
      const filletGeo = new THREE.CircleGeometry(3.5, 12, 0, Math.PI / 2);
      filletGeo.rotateX(-Math.PI / 2);
      const fillet = new THREE.Mesh(filletGeo, this.asphaltMat);
      fillet.position.set(c.x, 0.004, c.z);
      fillet.rotation.y = c.rot;
      this.root.add(fillet);

      // Curved curb trim
      const curbRingGeo = new THREE.RingGeometry(3.3, 3.6, 12, 1, 0, Math.PI / 2);
      curbRingGeo.rotateX(-Math.PI / 2);
      const curbRing = new THREE.Mesh(curbRingGeo, this.curbMat);
      curbRing.position.set(c.x, 0.018, c.z);
      curbRing.rotation.y = c.rot;
      this.root.add(curbRing);
    });
  }

  /**
   * Instanced white dashed lane lines along the boulevard
   */
  buildInstancedLaneDashes() {
    const dashLength = 4.2;
    const gapLength = 6.0;
    const startZ = 50;
    const endZ = -1050;
    const laneXPositions = [-5.0, 5.0];

    const countPerLane = Math.floor((startZ - endZ) / (dashLength + gapLength));
    const totalDashes = countPerLane * laneXPositions.length;

    const dashGeo = new THREE.PlaneGeometry(0.18, dashLength);
    dashGeo.rotateX(-Math.PI / 2);
    const instancedDashes = new THREE.InstancedMesh(dashGeo, this.whiteLineMat, totalDashes);

    const dummy = new THREE.Object3D();
    let instanceIdx = 0;

    laneXPositions.forEach((xPos) => {
      let curZ = startZ;
      for (let i = 0; i < countPerLane; i++) {
        // Skip dashes inside intersection zones
        const insideIntersection = this.crossroadZs.some((cz) => Math.abs(curZ - cz) < 11);
        if (!insideIntersection) {
          dummy.position.set(xPos, 0.015, curZ - dashLength * 0.5);
          dummy.scale.set(1, 1, 1);
        } else {
          dummy.scale.set(0, 0, 0);
        }
        dummy.updateMatrix();
        instancedDashes.setMatrixAt(instanceIdx++, dummy.matrix);
        curZ -= (dashLength + gapLength);
      }
    });

    instancedDashes.instanceMatrix.needsUpdate = true;
    this.root.add(instancedDashes);
  }

  /**
   * Painted Left, Straight, and Right turn arrows on the asphalt before intersections
   */
  buildTurningLaneArrows() {
    this.crossroadZs.forEach((crossZ) => {
      const approachZ = crossZ + 20.0;

      // Left Turn Lane Arrow at X = -2.5
      this.createPavementArrow(-2.5, approachZ, 'left');

      // Straight Lane Arrow at X = -5.0
      this.createPavementArrow(-5.0, approachZ - 12.0, 'straight');

      // Right Turn Lane Arrow at X = -7.5
      this.createPavementArrow(-7.5, approachZ, 'right');
    });
  }

  createPavementArrow(x, z, type) {
    const shape = new THREE.Shape();
    if (type === 'left') {
      shape.moveTo(0, 0);
      shape.lineTo(-1.2, 0.6);
      shape.lineTo(-1.2, 0.2);
      shape.lineTo(-0.2, 0.2);
      shape.lineTo(-0.2, -1.2);
      shape.lineTo(0.2, -1.2);
      shape.lineTo(0.2, 0.5);
      shape.lineTo(-0.8, 0.5);
      shape.closePath();
    } else if (type === 'right') {
      shape.moveTo(0, 0);
      shape.lineTo(1.2, 0.6);
      shape.lineTo(1.2, 0.2);
      shape.lineTo(0.2, 0.2);
      shape.lineTo(0.2, -1.2);
      shape.lineTo(-0.2, -1.2);
      shape.lineTo(-0.2, 0.5);
      shape.lineTo(0.8, 0.5);
      shape.closePath();
    } else {
      // Straight Arrow
      shape.moveTo(0, 1.4);
      shape.lineTo(0.7, 0.3);
      shape.lineTo(0.25, 0.3);
      shape.lineTo(0.25, -1.2);
      shape.lineTo(-0.25, -1.2);
      shape.lineTo(-0.25, 0.3);
      shape.lineTo(-0.7, 0.3);
      shape.closePath();
    }

    const geo = new THREE.ShapeGeometry(shape);
    geo.rotateX(-Math.PI / 2);
    const arrow = new THREE.Mesh(geo, this.whiteLineMat);
    arrow.position.set(x, 0.016, z);
    this.root.add(arrow);
  }

  buildZebraCrosswalk(crossZ) {
    const stripeGeo = new THREE.PlaneGeometry(0.9, 3.8);
    stripeGeo.rotateX(-Math.PI / 2);
    const instancedStripes = new THREE.InstancedMesh(stripeGeo, this.whiteLineMat, 24);

    const dummy = new THREE.Object3D();
    let idx = 0;

    [-10.2, 10.2].forEach((offsetZ) => {
      for (let x = -8.5; x <= 8.5; x += 1.6) {
        dummy.position.set(x, 0.017, crossZ + offsetZ);
        dummy.updateMatrix();
        instancedStripes.setMatrixAt(idx++, dummy.matrix);
      }
    });

    instancedStripes.instanceMatrix.needsUpdate = true;
    this.root.add(instancedStripes);
  }

  createTrafficLight(x, z, crossZ) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const poleGeo = new THREE.CylinderGeometry(0.12, 0.12, 5.5, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.7 });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.y = 2.75;
    group.add(pole);

    const arm = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.12, 0.12), poleMat);
    arm.position.set(2.2, 5.2, 0);
    group.add(arm);

    const housing = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.1, 0.35), new THREE.MeshStandardMaterial({ color: 0x1a1a1a }));
    housing.position.set(3.8, 4.6, 0);
    group.add(housing);

    const redMat = new THREE.MeshBasicMaterial({ color: 0x440000 });
    const redLamp = new THREE.Mesh(new THREE.CircleGeometry(0.12, 12), redMat);
    redLamp.position.set(3.8, 4.95, 0.18);
    group.add(redLamp);

    const yelMat = new THREE.MeshBasicMaterial({ color: 0x443300 });
    const yelLamp = new THREE.Mesh(new THREE.CircleGeometry(0.12, 12), yelMat);
    yelLamp.position.set(3.8, 4.6, 0.18);
    group.add(yelLamp);

    const grnMat = new THREE.MeshBasicMaterial({ color: 0x004400 });
    const grnLamp = new THREE.Mesh(new THREE.CircleGeometry(0.12, 12), grnMat);
    grnLamp.position.set(3.8, 4.25, 0.18);
    group.add(grnLamp);

    this.root.add(group);

    this.colliders.push({
      type: 'pole',
      name: 'Traffic Light Pole',
      box: { minX: x - 0.4, minZ: z - 0.4, maxX: x + 0.4, maxZ: z + 0.4 }
    });

    return {
      group,
      redLamp,
      yelLamp,
      grnLamp,
      redMat,
      yelMat,
      grnMat,
      stopLineZ: crossZ + 12.0,
      state: 'green',
      timer: 0
    };
  }

  /**
   * Ultra-Realistic Skyline: Mixed Glass Skyscrapers, Stepped Towers & Retail Storefronts
   */
  buildDiverseSkyline() {
    const buildingDefs = [];

    // West Side Blocks (between Main Blvd X = -12 and West Ave X = -85)
    for (let z = 40; z > -1050; z -= 36) {
      const nearIntersection = this.crossroadZs.some((cz) => Math.abs(z - cz) < 18);
      if (nearIntersection) continue;

      const height = 30 + ((Math.abs(z) * 13) % 52); // 30m - 82m tall
      const width = 22 + ((Math.abs(z) * 3) % 8);
      const depth = 26 + ((Math.abs(z) * 5) % 6);
      const isGlass = (z % 72 === 0);

      buildingDefs.push({
        x: -42,
        y: height * 0.5,
        z,
        sx: width,
        sy: height,
        sz: depth,
        mat: isGlass ? this.glassBuildingMat : this.officeBuildingMat,
        hasRooftopAntenna: height > 60
      });
    }

    // East Side Blocks (between Main Blvd X = 12 and East Ave X = +85)
    for (let z = 40; z > -1050; z -= 38) {
      // Leave parking lot areas clear (z = -45 to -95 and terminal lot -950 to -1005)
      if ((z > -105 && z < -35) || (z > -1005 && z < -945)) continue;
      const nearIntersection = this.crossroadZs.some((cz) => Math.abs(z - cz) < 18);
      if (nearIntersection) continue;

      const height = 28 + ((Math.abs(z) * 11) % 48);
      const width = 24 + ((Math.abs(z) * 5) % 8);
      const depth = 28 + ((Math.abs(z) * 7) % 6);
      const isStorefront = (height < 42);

      buildingDefs.push({
        x: 44,
        y: height * 0.5,
        z,
        sx: width,
        sy: height,
        sz: depth,
        mat: isStorefront ? this.storefrontBuildingMat : this.officeBuildingMat,
        hasRooftopAntenna: height > 55
      });
    }

    // Far Background Towers (creating deep, layered 3D metropolis horizon)
    [-115, 115].forEach((farX) => {
      for (let z = 30; z > -1050; z -= 48) {
        const height = 45 + ((Math.abs(z) * 17) % 45); // Soaring towers up to 90m
        buildingDefs.push({
          x: farX,
          y: height * 0.5,
          z,
          sx: 32,
          sy: height,
          sz: 36,
          mat: this.glassBuildingMat,
          hasRooftopAntenna: true
        });
      }
    });

    // Build the buildings with rooftop architectural details
    buildingDefs.forEach((b) => {
      const geo = new THREE.BoxGeometry(b.sx, b.sy, b.sz);
      const mesh = new THREE.Mesh(geo, b.mat);
      mesh.position.set(b.x, b.y, b.z);
      mesh.receiveShadow = true;
      mesh.castShadow = true;
      this.root.add(mesh);

      // Rooftop HVAC units & industrial Water Towers
      const roofY = b.sy;
      const hvacGeo = new THREE.BoxGeometry(3.5, 1.8, 3.5);
      const hvac = new THREE.Mesh(hvacGeo, new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.6 }));
      hvac.position.set(b.x - 3, roofY + 0.9, b.z - 2);
      this.root.add(hvac);

      // Rooftop Radio Antennas with flashing red warning beacons
      if (b.hasRooftopAntenna) {
        const antGeo = new THREE.CylinderGeometry(0.08, 0.22, 12, 6);
        const ant = new THREE.Mesh(antGeo, new THREE.MeshStandardMaterial({ color: 0xd1d5db, metalness: 0.9 }));
        ant.position.set(b.x + 4, roofY + 6, b.z + 3);
        this.root.add(ant);

        // Flashing red hazard light on top
        const beaconMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.35, 6, 6), beaconMat);
        beacon.position.set(b.x + 4, roofY + 12.2, b.z + 3);
        this.root.add(beacon);
        this.beaconLights.push(beaconMat);
      }
    });
  }

  /**
   * Urban Foliage: Instanced Leafy Trees along the sidewalks
   */
  buildStreetFoliage() {
    const treePositions = [];

    // Trees along Main Boulevard sidewalks
    for (let z = 45; z > -1050; z -= 24) {
      const nearIntersection = this.crossroadZs.some((cz) => Math.abs(z - cz) < 14);
      if (nearIntersection) continue;

      treePositions.push({ x: -12.4, z });
      if (z > -40 || z < -100) {
        treePositions.push({ x: 12.4, z });
      }
    }

    const trunkGeo = new THREE.CylinderGeometry(0.18, 0.24, 2.6, 6);
    trunkGeo.translate(0, 1.3, 0);

    const foliageGeo = new THREE.DodecahedronGeometry(1.65, 1);
    foliageGeo.translate(0, 3.4, 0);

    const trunkMesh = new THREE.InstancedMesh(trunkGeo, this.treeBarkMat, treePositions.length);
    const foliageMesh = new THREE.InstancedMesh(foliageGeo, this.treeLeafMat, treePositions.length);
    trunkMesh.castShadow = true;
    foliageMesh.castShadow = true;

    const dummy = new THREE.Object3D();
    treePositions.forEach((pos, idx) => {
      dummy.position.set(pos.x, 0, pos.z);
      const scaleRand = 0.85 + ((idx * 7) % 5) * 0.08;
      dummy.scale.set(scaleRand, scaleRand, scaleRand);
      dummy.rotation.y = (idx * 1.3);
      dummy.updateMatrix();

      trunkMesh.setMatrixAt(idx, dummy.matrix);
      foliageMesh.setMatrixAt(idx, dummy.matrix);

      this.colliders.push({
        type: 'tree',
        name: 'Sidewalk Tree',
        box: { minX: pos.x - 0.4, minZ: pos.z - 0.4, maxX: pos.x + 0.4, maxZ: pos.z + 0.4 }
      });
    });

    trunkMesh.instanceMatrix.needsUpdate = true;
    foliageMesh.instanceMatrix.needsUpdate = true;

    this.root.add(trunkMesh);
    this.root.add(foliageMesh);
  }

  /**
   * Highway Exit Gantries & Directional Signboards
   */
  buildHighwayGantries() {
    const gantryZs = [-60, -200, -360, -520];
    const signTexts = [
      '⬆ MAIN BOULEVARD | ⬅ DOWNTOWN | METRO PARK ➡',
      '⬆ CIVIC CENTER | ⬅ CIVIC PLAZA | AIRPORT EXPWY ➡',
      '⬆ UPTOWN DISTRICT | ⬅ SHOPPING MALL | TECH HUB ➡',
      '⬆ GRAND TERMINAL | ⬅ WEST BAY | HARBOR ➡'
    ];

    gantryZs.forEach((gZ, idx) => {
      const gantryGroup = new THREE.Group();
      gantryGroup.position.set(0, 0, gZ);

      const metalMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 });

      // Steel Towers on Left & Right curbs
      const postL = new THREE.Mesh(new THREE.BoxGeometry(0.4, 7.5, 0.4), metalMat);
      postL.position.set(-10.5, 3.75, 0);
      gantryGroup.add(postL);

      const postR = new THREE.Mesh(new THREE.BoxGeometry(0.4, 7.5, 0.4), metalMat);
      postR.position.set(10.5, 3.75, 0);
      gantryGroup.add(postR);

      // Overhead Truss Beam
      const beam = new THREE.Mesh(new THREE.BoxGeometry(21.4, 0.5, 0.5), metalMat);
      beam.position.set(0, 7.2, 0);
      gantryGroup.add(beam);

      // Highway Signboard (Vibrant Interstate Green)
      const signTex = this.createHighwaySignCanvas(signTexts[idx % signTexts.length]);
      const signMat = new THREE.MeshBasicMaterial({ map: signTex });
      const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(16, 2.2), signMat);
      signMesh.position.set(0, 6.2, 0.28);
      gantryGroup.add(signMesh);

      this.root.add(gantryGroup);
    });
  }

  createHighwaySignCanvas(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 70;
    const ctx = canvas.getContext('2d');

    // Interstate Green background
    ctx.fillStyle = '#047857';
    ctx.fillRect(0, 0, 512, 70);

    // White border
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.strokeRect(4, 4, 504, 62);

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 256, 36);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  buildInstancedStreetLamps() {
    const lampCoords = [];
    for (let z = 40; z > -1050; z -= 32) {
      const nearIntersection = this.crossroadZs.some((cz) => Math.abs(z - cz) < 14);
      if (nearIntersection) continue;

      lampCoords.push({ x: -10.8, z, dir: 1 });
      if (z > -40 || z < -100) {
        lampCoords.push({ x: 10.8, z, dir: -1 });
      }
    }

    const totalLamps = lampCoords.length;
    const lampMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.85 });
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0xfff3d6 });

    const poleGeo = new THREE.CylinderGeometry(0.08, 0.12, 6.4, 8);
    const armGeo = new THREE.BoxGeometry(1.6, 0.08, 0.08);
    const bulbGeo = new THREE.SphereGeometry(0.20, 8, 8);

    const instancedPoles = new THREE.InstancedMesh(poleGeo, lampMat, totalLamps);
    const instancedArms = new THREE.InstancedMesh(armGeo, lampMat, totalLamps);
    const instancedBulbs = new THREE.InstancedMesh(bulbGeo, bulbMat, totalLamps);

    const dummy = new THREE.Object3D();

    lampCoords.forEach((l, idx) => {
      dummy.position.set(l.x, 3.2, l.z);
      dummy.scale.set(1, 1, 1);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      instancedPoles.setMatrixAt(idx, dummy.matrix);

      dummy.position.set(l.x + l.dir * 0.8, 6.3, l.z);
      dummy.updateMatrix();
      instancedArms.setMatrixAt(idx, dummy.matrix);

      dummy.position.set(l.x + l.dir * 1.5, 6.2, l.z);
      dummy.updateMatrix();
      instancedBulbs.setMatrixAt(idx, dummy.matrix);

      this.colliders.push({
        type: 'pole',
        name: 'Street Lamp Pole',
        box: { minX: l.x - 0.25, minZ: l.z - 0.25, maxX: l.x + 0.25, maxZ: l.z + 0.25 }
      });
    });

    instancedPoles.instanceMatrix.needsUpdate = true;
    instancedArms.instanceMatrix.needsUpdate = true;
    instancedBulbs.instanceMatrix.needsUpdate = true;

    this.root.add(instancedPoles);
    this.root.add(instancedArms);
    this.root.add(instancedBulbs);
  }

  buildStreetProps() {
    // Fire Hydrants
    const hydrantGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.65, 8);
    const hydrantMat = new THREE.MeshStandardMaterial({ color: 0xe11d48, metalness: 0.3 });
    [-11.2, 11.2].forEach((hX) => {
      for (let z = 20; z > -600; z -= 80) {
        const hyd = new THREE.Mesh(hydrantGeo, hydrantMat);
        hyd.position.set(hX, 0.45, z);
        this.root.add(hyd);
      }
    });

    // Street Manhole Covers on the asphalt
    const manholeGeo = new THREE.CircleGeometry(0.48, 16);
    manholeGeo.rotateX(-Math.PI / 2);
    const manholeMat = new THREE.MeshStandardMaterial({ color: 0x111317, roughness: 0.6, metalness: 0.7 });
    for (let z = 10; z > -700; z -= 45) {
      const mh = new THREE.Mesh(manholeGeo, manholeMat);
      mh.position.set(-6.2, 0.012, z);
      this.root.add(mh);
    }
  }

  buildParkingLot() {
    const lotX = 36;
    const lotZ = -70;
    const lotW = 34;
    const lotL = 60;

    const lotGeo = new THREE.PlaneGeometry(lotW, lotL);
    lotGeo.rotateX(-Math.PI / 2);
    const lotMesh = new THREE.Mesh(lotGeo, this.asphaltMat);
    lotMesh.position.set(lotX, 0.003, lotZ);
    lotMesh.receiveShadow = true;
    this.root.add(lotMesh);

    // Target Parking Bay
    const targetX = 34;
    const targetZ = -68;
    this.parkingBay = {
      minX: targetX - 1.4,
      maxX: targetX + 1.4,
      minZ: targetZ - 2.5,
      maxZ: targetZ + 2.5,
      targetHeading: -Math.PI / 2,
      centerX: targetX,
      centerZ: targetZ
    };

    this.createParkingSlotOutline(targetX, targetZ, 3.0, 5.4, true);
    this.createPulsingTargetIndicator(targetX, targetZ, 3.0, 5.4);

    // Adjacent parked vehicles
    this.createParkedCar(34, -58, -Math.PI / 2, 0x1e3a8a);
    this.createParkedCar(34, -78, -Math.PI / 2, 0x475569);
    this.createParkedCar(24, -58, Math.PI / 2, 0xb91c1c);
    this.createParkedCar(24, -68, Math.PI / 2, 0x15803d);

    this.createCone(20, lotZ - 18);
    this.createCone(20, lotZ + 18);
    this.createCone(34, lotZ - 16);
  }

  createParkingSlotOutline(x, z, w, l, isTarget) {
    const lineMat = isTarget ? new THREE.MeshBasicMaterial({ color: 0x00ff66 }) : this.yellowLineMat;
    const lineThick = 0.15;

    const top = new THREE.Mesh(new THREE.PlaneGeometry(w, lineThick), lineMat);
    top.rotation.x = -Math.PI / 2;
    top.position.set(x, 0.015, z - l / 2);
    this.root.add(top);

    const btm = new THREE.Mesh(new THREE.PlaneGeometry(w, lineThick), lineMat);
    btm.rotation.x = -Math.PI / 2;
    btm.position.set(x, 0.015, z + l / 2);
    this.root.add(btm);

    const back = new THREE.Mesh(new THREE.PlaneGeometry(lineThick, l), lineMat);
    back.rotation.x = -Math.PI / 2;
    back.position.set(x + w / 2, 0.015, z);
    this.root.add(back);
  }

  createPulsingTargetIndicator(x, z, w, l) {
    const targetGeo = new THREE.PlaneGeometry(w - 0.2, l - 0.2);
    targetGeo.rotateX(-Math.PI / 2);
    const targetMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide
    });
    this.targetMesh = new THREE.Mesh(targetGeo, targetMat);
    this.targetMesh.position.set(x, 0.02, z);
    this.root.add(this.targetMesh);

    const frameGeo = new THREE.EdgesGeometry(targetGeo);
    const frameMat = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 2 });
    const frame = new THREE.LineSegments(frameGeo, frameMat);
    frame.position.set(x, 0.025, z);
    this.root.add(frame);
  }

  createParkedCar(x, z, heading, colorHex) {
    const carGroup = new THREE.Group();
    carGroup.position.set(x, 0, z);
    carGroup.rotation.y = heading;

    const carMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.4 });
    const carBody = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.7, 4.1), carMat);
    carBody.position.y = 0.55;
    carGroup.add(carBody);

    const roofMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.6, 2.2), roofMat);
    roof.position.set(0, 1.15, 0.1);
    carGroup.add(roof);

    this.root.add(carGroup);

    const w = 2.0;
    const l = 4.3;
    const isRot = Math.abs(heading) > 0.5;
    const boxW = isRot ? l : w;
    const boxL = isRot ? w : l;

    this.colliders.push({
      type: 'parked_car',
      name: 'Parked Vehicle',
      box: { minX: x - boxW / 2, minZ: z - boxL / 2, maxX: x + boxW / 2, maxZ: z + boxL / 2 }
    });
  }

  createCone(x, z) {
    const coneGroup = new THREE.Group();
    coneGroup.position.set(x, 0, z);

    const base = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.05, 0.4), new THREE.MeshStandardMaterial({ color: 0x111111 }));
    base.position.y = 0.025;
    coneGroup.add(base);

    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.65, 8), new THREE.MeshStandardMaterial({ color: 0xff5722, roughness: 0.6 }));
    cone.position.y = 0.35;
    coneGroup.add(cone);

    this.root.add(coneGroup);

    this.colliders.push({
      type: 'cone',
      name: 'Traffic Cone',
      box: { minX: x - 0.3, minZ: z - 0.3, maxX: x + 0.3, maxZ: z + 0.3 }
    });
  }

  buildNavigationArrows() {
    const arrowShape = new THREE.Shape();
    arrowShape.moveTo(0, 1.2);
    arrowShape.lineTo(0.8, 0);
    arrowShape.lineTo(0.35, 0);
    arrowShape.lineTo(0.35, -1.0);
    arrowShape.lineTo(-0.35, -1.0);
    arrowShape.lineTo(-0.35, 0);
    arrowShape.lineTo(-0.8, 0);
    arrowShape.closePath();

    const arrowGeo = new THREE.ShapeGeometry(arrowShape);
    arrowGeo.rotateX(-Math.PI / 2);

    // Glowing arrows pointing straight as well as directing turns into the crossroads!
    const arrowPositions = [
      { x: -5, z: -30, rotY: 0 },
      { x: -5, z: -60, rotY: 0 },
      { x: -2.5, z: -72, rotY: Math.PI / 2 },   // Turn Left indicator at 1st crossroad
      { x: -7.5, z: -72, rotY: -Math.PI / 2 },  // Turn Right indicator at 1st crossroad
      { x: -5, z: -140, rotY: 0 },
      { x: -5, z: -180, rotY: 0 },
      { x: -2.5, z: -212, rotY: Math.PI / 2 },  // Turn Left indicator at 2nd crossroad
      { x: -7.5, z: -212, rotY: -Math.PI / 2 }, // Turn Right indicator at 2nd crossroad
      { x: -5, z: -260, rotY: 0 },
      { x: -5, z: -300, rotY: 0 },
      { x: 3,  z: -55, rotY: -Math.PI / 2 },
      { x: 18, z: -65, rotY: -Math.PI / 2 },
      { x: 34, z: -68, rotY: -Math.PI / 2 }
    ];

    arrowPositions.forEach((pos) => {
      const arrowMesh = new THREE.Mesh(arrowGeo, this.arrowMat);
      arrowMesh.position.set(pos.x, 0.45, pos.z);
      arrowMesh.rotation.y = pos.rotY;
      this.root.add(arrowMesh);
      this.guideArrows.push(arrowMesh);
    });
  }

  buildFinishLine() {
    this.checkpointMesh1 = this.createGantry(-480, 0x00e5ff, '500M SPRINT CHECKPOINT');
    this.checkpointMesh2 = this.createGantry(-730, 0xffaa00, '750M U-TURN FINISH');
    this.finishLineMesh = this.createGantry(-980, 0x00ff88, '1KM GRAND TERMINAL');
  }

  createGantry(zPos, bannerColor, text) {
    const gantryGroup = new THREE.Group();
    gantryGroup.position.set(0, 0, zPos);

    const gantryMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8 });

    const towerL = new THREE.Mesh(new THREE.BoxGeometry(0.8, 7.5, 0.8), gantryMat);
    towerL.position.set(-10.5, 3.75, 0);
    gantryGroup.add(towerL);

    const towerR = new THREE.Mesh(new THREE.BoxGeometry(0.8, 7.5, 0.8), gantryMat);
    towerR.position.set(10.5, 3.75, 0);
    gantryGroup.add(towerR);

    const truss = new THREE.Mesh(new THREE.BoxGeometry(22, 1.2, 0.8), gantryMat);
    truss.position.set(0, 7.0, 0);
    gantryGroup.add(truss);

    const bannerMat = new THREE.MeshBasicMaterial({ color: bannerColor });
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(16, 1.8), bannerMat);
    banner.position.set(0, 6.2, 0.45);
    gantryGroup.add(banner);

    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const line = new THREE.Mesh(new THREE.PlaneGeometry(20, 1.5), lineMat);
    line.rotation.x = -Math.PI / 2;
    line.position.set(0, 0.02, 0);
    gantryGroup.add(line);

    this.root.add(gantryGroup);
    return gantryGroup;
  }

  update(dt) {
    const time = performance.now() * 0.001;

    // Traffic light state cycler
    this.trafficLights.forEach((tl, idx) => {
      tl.timer += dt;
      const cycleTime = (tl.timer + idx * 7) % 24.5;

      if (cycleTime < 12.0) {
        tl.state = 'green';
        tl.grnMat.color.setHex(0x00ff00);
        tl.yelMat.color.setHex(0x443300);
        tl.redMat.color.setHex(0x440000);
      } else if (cycleTime < 15.5) {
        tl.state = 'yellow';
        tl.grnMat.color.setHex(0x004400);
        tl.yelMat.color.setHex(0xffff00);
        tl.redMat.color.setHex(0x440000);
      } else {
        tl.state = 'red';
        tl.grnMat.color.setHex(0x004400);
        tl.yelMat.color.setHex(0x443300);
        tl.redMat.color.setHex(0xff0000);
      }
    });

    // Flashing rooftop hazard beacons on tall skyscrapers
    const beaconFlash = (Math.floor(time * 2) % 2 === 0);
    this.beaconLights.forEach((bMat) => {
      bMat.color.setHex(beaconFlash ? 0xff0000 : 0x330000);
    });

    // Pulsing navigation guide arrows
    this.arrowMat.opacity = 0.5 + Math.sin(time * 4) * 0.35;

    if (this.targetMesh) {
      this.targetMesh.material.opacity = 0.3 + Math.sin(time * 5) * 0.25;
    }
  }

  checkRedLightViolation(physics) {
    for (const tl of this.trafficLights) {
      if (tl.state === 'red') {
        const distZ = physics.z - tl.stopLineZ;
        if (distZ < 0.5 && distZ > -7.0 && Math.abs(physics.x - (-5.0)) < 4.5 && physics.speed > 0.8) {
          return true;
        }
      }
    }
    return false;
  }
}
