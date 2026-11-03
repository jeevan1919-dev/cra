/**
 * VehiclePhysics.js - Pure Ackermann Kinematics for Dr. Driving
 * 
 * Strict Kinematic Bicycle Model:
 * - Zero sideways slip / NO floaty ice drifting
 * - Translation strictly along forward vector: carMesh.quaternion.forward * speed * dt
 * - Dynamic Lock Angle:
 *     effectiveWheelAngle = currentSteer * 0.52 * lerp(1.0, 0.35, |speed| / maxSpeed)
 * - Turn Rate:
 *     angularVelocity = (speed / wheelbase) * tan(effectiveWheelAngle)  (wheelbase = 2.6m)
 * - 4-speed automatic transmission (P, R, N, D) with torque curves & RPM dynamics
 * - Chassis inertial pitch & roll for Dr. Driving cockpit weight transfer
 * - 2D OBB (Oriented Bounding Box) for rigid SAT collision detection
 */

import * as THREE from 'three';

export class VehiclePhysics {
  constructor() {
    // Spatial state
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.heading = 0; // radians (0 = facing -Z forward in Three.js)
    this.speed = 0; // m/s (positive = forward, negative = reverse)
    this.speedKmh = 0; // km/h
    this.steerAngle = 0; // current wheel angle

    // Vehicle dimensions
    this.wheelbase = 2.6; // 2.6m as specified
    this.width = 1.85;
    this.length = 4.2;
    this.maxSpeed = 23.61; // 85.0 km/h (governed strictly in range 80 - 90 km/h)
    this.maxSpeedKmh = 85.0;

    // Transmission & Engine
    this.gear = 'P'; // 'P', 'R', 'N', 'D'
    this.autoGear = 1; // 1 to 4
    this.rpm = 800;
    this.idleRpm = 800;
    this.maxRpm = 7000;

    // Gear ratios
    this.gearRatios = [3.6, 2.1, 1.35, 0.95];
    this.reverseRatio = -3.2;

    // Kinematic & Acceleration Tuning (City cruising calibrated for 80-90 km/h)
    this.engineAccel = 11.8; // m/s^2 smooth responsive acceleration
    this.footBrakeDecel = 18.5; // m/s^2 reliable braking
    this.handBrakeDecel = 28.0; // m/s^2 handbrake hold
    this.rollingResistance = 1.4; // m/s^2 natural coasting drag
    this.isEBrakeActive = false;

    // Inertial Chassis Pitch & Roll (Cockpit animation)
    this.pitch = 0; // forward/backward tilt
    this.roll = 0; // lateral centrifugal body roll
    this.pitchVel = 0;
    this.rollVel = 0;
    this.vibrationOffset = 0;

    // Lateral slip metric for screech audio trigger
    this.screechIntensity = 0;

    // Fuel system (Level 4)
    this.fuel = 100.0;
    this.isOutOfFuel = false;

    // Turn indicators
    this.turnSignal = 'none'; // 'none', 'left', 'right', 'hazard'

    // 2D OBB corners for SAT collision detection
    this.obbCorners = [];
    this.updateOBB();
  }

  setGear(newGear) {
    if (['P', 'R', 'N', 'D'].includes(newGear)) {
      this.gear = newGear;
    }
  }

  cycleGear(delta) {
    const gears = ['P', 'R', 'N', 'D'];
    const curIdx = gears.indexOf(this.gear);
    let nextIdx = curIdx + delta;
    if (nextIdx < 0) nextIdx = 0;
    if (nextIdx >= gears.length) nextIdx = gears.length - 1;
    this.setGear(gears[nextIdx]);
    return this.gear;
  }

  reset(x = 0, z = 0, heading = 0) {
    this.x = x;
    this.y = 0;
    this.z = z;
    this.heading = heading;
    this.speed = 0;
    this.speedKmh = 0;
    this.steerAngle = 0;
    this.gear = 'P';
    this.autoGear = 1;
    this.rpm = 800;
    this.pitch = 0;
    this.roll = 0;
    this.pitchVel = 0;
    this.rollVel = 0;
    this.screechIntensity = 0;
    this.fuel = 100.0;
    this.isOutOfFuel = false;
    this.turnSignal = 'none';
    this.updateOBB();
  }

  /**
   * Main Physics Integration Step
   * @param {number} dt Delta time in seconds
   * @param {number} currentSteer Normalized steering input [-1.0, 1.0]
   * @param {number} currentThrottle Normalized throttle [0.0, 1.0]
   * @param {boolean} isBraking Foot brake active
   * @param {boolean} isEBrake Handbrake active
   */
  update(dt, currentSteer, currentThrottle, isBraking, isEBrake) {
    const clampedDt = Math.min(0.05, Math.max(0.001, dt));

    if (this.fuel <= 0.05) {
      this.isOutOfFuel = true;
      this.fuel = 0;
      currentThrottle = 0;
    }

    this.isEBrakeActive = isEBrake;

    // 1. PURE ACKERMANN KINEMATICS (SPEED-DEPENDENT TURNING LOCK)
    // Dynamic turning lock: responsive for cornering 90-degree intersection turns and parking
    const speedRatio = Math.min(1.0, Math.abs(this.speed) / this.maxSpeed);
    const effectiveWheelAngle = -currentSteer * 0.60 * THREE.MathUtils.lerp(1.0, 0.55, speedRatio);
    this.steerAngle = effectiveWheelAngle;

    // 2. KINEMATIC TURN RATE (Wheelbase = 2.6m)
    let angularVelocity = 0;
    if (Math.abs(this.speed) > 0.05) {
      angularVelocity = (this.speed / this.wheelbase) * Math.tan(this.steerAngle);
      this.heading += angularVelocity * clampedDt;
    }

    // 3. POWERTRAIN & LONGITUDINAL FORCES
    let accel = 0;

    // Transmission automatic gear shift points in 'D'
    const absKmh = Math.abs(this.speed * 3.6);
    if (this.gear === 'D') {
      if (absKmh < 24) this.autoGear = 1;
      else if (absKmh < 46) this.autoGear = 2;
      else if (absKmh < 68) this.autoGear = 3;
      else this.autoGear = 4;
    }

    // Drive acceleration (Governs top speed smoothly into 80-90 km/h)
    if (this.gear === 'D') {
      const topSpeedRatio = Math.min(1.0, this.speed / this.maxSpeed);
      accel += this.engineAccel * currentThrottle * (1.0 - Math.pow(topSpeedRatio, 2.5));
    } else if (this.gear === 'R') {
      const reverseTopSpeed = -8.0; // ~28.8 km/h
      if (this.speed > reverseTopSpeed) {
        accel -= (this.engineAccel * 0.70) * currentThrottle;
      }
    }

    // Braking & Deceleration
    if (isEBrake) {
      const dir = Math.sign(this.speed);
      accel -= dir * this.handBrakeDecel;
    } else if (isBraking) {
      const dir = Math.sign(this.speed);
      accel -= dir * this.footBrakeDecel;
    } else if (this.gear === 'P') {
      const dir = Math.sign(this.speed);
      accel -= dir * this.handBrakeDecel;
    } else {
      // Natural rolling resistance and aerodynamic drag
      const dir = Math.sign(this.speed);
      accel -= dir * (this.rollingResistance + 0.012 * this.speed * this.speed);
    }

    // Integrate speed
    const prevSpeed = this.speed;
    this.speed += accel * clampedDt;

    // Dead stop threshold to prevent oscillating back and forth across 0
    if (Math.abs(prevSpeed) < 0.25 && currentThrottle < 0.05 && (isBraking || isEBrake || this.gear === 'P')) {
      this.speed = 0;
      accel = 0;
    }

    // Lock speed to 0 in Park
    if (this.gear === 'P') {
      this.speed = 0;
    }

    // Prevent reversing in D while braking, or moving forward in R while braking
    if (this.gear === 'D' && prevSpeed >= 0 && this.speed < 0) this.speed = 0;
    if (this.gear === 'R' && prevSpeed <= 0 && this.speed > 0) this.speed = 0;

    // Strict speed limits: 80 - 90 km/h ceiling (85 km/h maxSpeed = 23.61 m/s)
    this.speed = Math.max(-8.0, Math.min(this.maxSpeed, this.speed));
    this.speedKmh = this.speed * 3.6;

    // 4. TRANSLATION (STRICTLY FORWARD VECTOR - ZERO SIDEWAYS SLIP)
    // Forward direction in Three.js X-Z plane is (-sin(heading), -cos(heading))
    const forwardX = -Math.sin(this.heading);
    const forwardZ = -Math.cos(this.heading);

    this.x += forwardX * this.speed * clampedDt;
    this.z += forwardZ * this.speed * clampedDt;

    // 5. RPM DYNAMICS
    if (this.gear === 'P' || this.gear === 'N') {
      const targetRpm = this.idleRpm + currentThrottle * 4500;
      this.rpm += (targetRpm - this.rpm) * Math.min(1.0, clampedDt * 10.0);
    } else {
      const ratio = this.gear === 'R' ? Math.abs(this.reverseRatio) : this.gearRatios[this.autoGear - 1];
      const wheelAngularVel = Math.abs(this.speed) / 0.32;
      const baseRpm = (wheelAngularVel * ratio * 3.8 * 60) / (2 * Math.PI);
      const targetRpm = Math.max(this.idleRpm, baseRpm + currentThrottle * 1100);
      this.rpm += (targetRpm - this.rpm) * Math.min(1.0, clampedDt * 8.0);
    }
    this.rpm = Math.min(this.maxRpm, Math.max(this.idleRpm, this.rpm));

    // 6. DR. DRIVING CHASSIS INERTIAL PITCH & ROLL
    // Pitch: Dips forward under braking, tilts back under acceleration
    const targetPitch = Math.max(-0.16, Math.min(0.14, (accel / 9.81) * 0.16));

    // Roll: Leans away from turns proportional to angular velocity (centrifugal roll)
    const centAccel = this.speed * angularVelocity;
    const targetRoll = Math.max(-0.18, Math.min(0.18, (-centAccel / 9.81) * 0.20));

    // Damped spring-damper integration
    const springK = 24.0;
    const dampingK = 7.0;
    const accelPitch = (targetPitch - this.pitch) * springK - this.pitchVel * dampingK;
    this.pitchVel += accelPitch * clampedDt;
    this.pitch += this.pitchVel * clampedDt;

    const accelRoll = (targetRoll - this.roll) * springK - this.rollVel * dampingK;
    this.rollVel += accelRoll * clampedDt;
    this.roll += this.rollVel * clampedDt;

    // Micro vibration at speed
    if (Math.abs(this.speed) > 4.0) {
      this.vibrationOffset = Math.sin(performance.now() * 0.045) * (Math.abs(this.speed) / 35.0) * 0.0028;
    } else {
      this.vibrationOffset = 0;
    }

    // 7. TIRE SCREECH METRIC
    // Triggers on sharp cornering at high speed or handbrake slide
    const turnStress = Math.abs(centAccel) / 9.81;
    let screech = turnStress > 0.45 ? (turnStress - 0.45) * 1.5 : 0;
    if (isEBrake && Math.abs(this.speed) > 3.0) {
      screech = 0.95;
    }
    this.screechIntensity += (Math.min(1.0, screech) - this.screechIntensity) * Math.min(1.0, clampedDt * 10.0);

    // 8. FUEL CONSUMPTION (LEVEL 4)
    if (this.fuel > 0) {
      const baseDrain = 0.008;
      const aggressiveMultiplier = 1.0 + Math.pow(this.rpm / 4000, 2) * currentThrottle * 3.0;
      this.fuel = Math.max(0, this.fuel - (baseDrain * aggressiveMultiplier) * clampedDt);
    }

    // Update 2D OBB
    this.updateOBB();
  }

  /**
   * Calculate 4 corners of 2D Oriented Bounding Box
   */
  updateOBB() {
    const halfW = this.width * 0.5;
    const halfL = this.length * 0.5;
    const cosH = Math.cos(this.heading);
    const sinH = Math.sin(this.heading);

    const localCorners = [
      { x: -halfW, z: -halfL },
      { x: halfW, z: -halfL },
      { x: halfW, z: halfL },
      { x: -halfW, z: halfL }
    ];

    this.obbCorners = localCorners.map((pt) => ({
      x: this.x + (pt.x * cosH - pt.z * sinH),
      z: this.z + (pt.x * sinH + pt.z * cosH)
    }));
  }

  checkCollisionWithBox(boxCorners) {
    return VehiclePhysics.satCollision(this.obbCorners, boxCorners);
  }

  checkCollisionWithAABB(minX, minZ, maxX, maxZ) {
    const aabbCorners = [
      { x: minX, z: minZ },
      { x: maxX, z: minZ },
      { x: maxX, z: maxZ },
      { x: minX, z: maxZ }
    ];
    return VehiclePhysics.satCollision(this.obbCorners, aabbCorners);
  }

  static satCollision(polyA, polyB) {
    const polygons = [polyA, polyB];
    for (let i = 0; i < polygons.length; i++) {
      const polygon = polygons[i];
      for (let i1 = 0; i1 < polygon.length; i1++) {
        const i2 = (i1 + 1) % polygon.length;
        const p1 = polygon[i1];
        const p2 = polygon[i2];

        const normal = { x: -(p2.z - p1.z), z: p2.x - p1.x };
        const len = Math.hypot(normal.x, normal.z);
        if (len < 0.0001) continue;
        normal.x /= len;
        normal.z /= len;

        let minA = Infinity, maxA = -Infinity;
        for (const p of polyA) {
          const proj = p.x * normal.x + p.z * normal.z;
          if (proj < minA) minA = proj;
          if (proj > maxA) maxA = proj;
        }

        let minB = Infinity, maxB = -Infinity;
        for (const p of polyB) {
          const proj = p.x * normal.x + p.z * normal.z;
          if (proj < minB) minB = proj;
          if (proj > maxB) maxB = proj;
        }

        if (maxA < minB || maxB < minA) {
          return false;
        }
      }
    }
    return true;
  }
}
