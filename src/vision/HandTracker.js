/**
 * HandTracker.js - Real-Time MediaPipe Hand Landmarker Vision Pipeline
 * 
 * Strict Hand Separation Architecture:
 * - TWO HANDS IN FRAME (2 Hands) => STEERING CONTROL ONLY!
 *     - Gearing system is strictly LOCKED.
 *     - Zero chance of accidental gear shifts while turning or tilting hands!
 *     - Pure Ackermann steering via middle MCP angle (theta = atan2(Ry - Ly, Rx - Lx)).
 * - ONE HAND IN FRAME (1 Hand) => GEAR SHIFTING CONTROL!
 *     - Steering is locked straight so the vehicle remains stable.
 *     - Gearing system is UNLOCKED for effortless single-hand shifts:
 *         1. Quick Paddle Pinch-Tap: Touch thumb & index to toggle D <-> R / P
 *         2. Gentle Flick: Flick UP (Shift Up) or DOWN (Shift Down)
 *         3. Instant Virtual Gear Gate: Move hand into right gate for instant 60ms select
 * - Raise 2nd hand to immediately return to Steering Control!
 */

import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';

const HAND_CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4],       // Thumb
  [0, 5], [5, 6], [6, 7], [7, 8],       // Index
  [5, 9], [9, 10], [10, 11], [11, 12],  // Middle
  [9, 13], [13, 14], [14, 15], [15, 16],// Ring
  [13, 17], [17, 18], [18, 19], [19, 20],// Pinky
  [0, 17]                               // Palm base
];

export class HandTracker {
  constructor(videoElement, canvasElement) {
    this.video = videoElement;
    this.canvas = canvasElement;
    this.ctx = canvasElement ? canvasElement.getContext('2d') : null;

    this.landmarker = null;
    this.isRunning = false;
    this.stream = null;
    this.isProcessingFrame = false;
    this.lastProcessedTimestamp = 0;

    // Decoupled targets read by 60 FPS Three.js loop
    this.targetSteer = 0.0; // -1.0 to 1.0
    this.targetThrottle = 0.0; // 0.0 to 1.0
    this.targetBrake = false;
    this.targetEBrake = false;
    this.detectedHandsCount = 0;
    this.handsVisible = false;

    // Rigid Calibration Constants
    this.DEADZONE = 0.08; // radians (~4.5°)
    this.MAX_TILT = 0.85; // radians (~48°)

    // Strict Mode Separation (2 Hands = Steer Only | 1 Hand = Shift Only)
    this.isGearLocked = true;
    this.oneHandFrameCount = 0;

    // UI display metrics
    this.rawAngle = 0;
    this.steeringDegrees = 0;

    // Hand Movements for Gear Shifting (Active only in 1-Hand Mode)
    this.rightHandHistory = [];
    this.lastSwipeTime = 0;
    this.onGearSwipe = null;
    this.onGearSelect = null;
    this.activeGear = 'P'; // synced from game engine
    this.hoveredGearSlot = null;
    this.hoverStartTime = 0;
    this.lastShiftNotification = null;
    this.shiftNotificationTime = 0;

    // Quick Paddle Pinch gesture state
    this.wasPinched = false;

    this.leftHandData = null;
    this.rightHandData = null;

    this.onStatusChange = null;
    this.status = 'uninitialized';
  }

  async init() {
    this.setStatus('loading', 'Loading MediaPipe Hand Vision Engine...');

    try {
      let vision;
      try {
        vision = await FilesetResolver.forVisionTasks('/mediapipe/wasm');
      } catch (localErr) {
        console.warn('Local wasm fallback to CDN:', localErr);
        vision = await FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm');
      }

      let modelAssetPath = '/mediapipe/hand_landmarker.task';
      try {
        this.landmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath,
            delegate: 'GPU'
          },
          runningMode: 'VIDEO',
          numHands: 2,
          minHandDetectionConfidence: 0.45,
          minHandPresenceConfidence: 0.45,
          minTrackingConfidence: 0.45
        });
      } catch (modelErr) {
        console.warn('Local model fallback to CDN storage:', modelErr);
        modelAssetPath = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';
        this.landmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath,
            delegate: 'GPU'
          },
          runningMode: 'VIDEO',
          numHands: 2,
          minHandDetectionConfidence: 0.45,
          minHandPresenceConfidence: 0.45,
          minTrackingConfidence: 0.45
        });
      }

      this.setStatus('ready', 'Vision engine initialized. Requesting webcam...');
      await this.startCamera();
    } catch (err) {
      console.error('HandLandmarker initialization failed:', err);
      this.setStatus('error', 'Camera unavailable. Using Keyboard mode.');
      throw err;
    }
  }

  async startCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.setStatus('denied', 'Camera API unavailable. Use Keyboard (WASD).');
      return;
    }

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          frameRate: { ideal: 30, max: 30 },
          facingMode: 'user'
        },
        audio: false
      });

      this.video.srcObject = this.stream;
      await new Promise((resolve) => {
        this.video.onloadedmetadata = () => {
          this.video.play().then(resolve);
        };
      });

      if (this.canvas) {
        this.canvas.width = this.video.videoWidth || 640;
        this.canvas.height = this.video.videoHeight || 480;
      }

      this.isRunning = true;
      this.setStatus('active', 'Tracking active. Hold up 2 hands to steer, 1 hand to shift!');
      this.scheduleVisionTick();
    } catch (err) {
      console.warn('Webcam permission denied:', err);
      this.setStatus('denied', 'Webcam access denied. Using Keyboard (WASD).');
    }
  }

  stopCamera() {
    this.isRunning = false;
    if (this.stream) {
      this.stream.getTracks().forEach((t) => t.stop());
      this.stream = null;
    }
  }

  setStatus(status, message) {
    this.status = status;
    if (this.onStatusChange) {
      this.onStatusChange(status, message);
    }
  }

  notifyGearShift(text) {
    this.lastShiftNotification = text;
    this.shiftNotificationTime = performance.now();
  }

  /**
   * Decoupled Vision Loop (~30 Hz camera sync)
   */
  scheduleVisionTick() {
    if (!this.isRunning) return;

    if ('requestVideoFrameCallback' in this.video) {
      this.video.requestVideoFrameCallback(() => {
        this.processVisionTick();
        this.scheduleVisionTick();
      });
    } else {
      setTimeout(() => {
        this.processVisionTick();
        this.scheduleVisionTick();
      }, 33);
    }
  }

  processVisionTick() {
    if (!this.isRunning || !this.video || !this.landmarker || this.isProcessingFrame) return;
    if (this.video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;

    const now = performance.now();
    if (now - this.lastProcessedTimestamp < 22) return;
    this.lastProcessedTimestamp = now;

    this.isProcessingFrame = true;

    try {
      const results = this.landmarker.detectForVideo(this.video, now);
      this.solveGestures(results);
      this.renderHUD(results);
    } catch (e) {
      console.warn('Vision detection tick notice:', e);
    } finally {
      this.isProcessingFrame = false;
    }
  }

  /**
   * Core Gesture Solver with Strict Hand Mode Separation:
   * - TWO HANDS = STEERING CONTROL ONLY (Gear System strictly LOCKED)
   * - ONE HAND  = GEAR SHIFTING CONTROL (Steering locked straight)
   */
  solveGestures(results) {
    const landmarksList = results ? results.landmarks : null;

    if (!landmarksList || landmarksList.length === 0) {
      this.detectedHandsCount = 0;
      this.handsVisible = false;
      this.targetSteer = 0.0;
      this.targetThrottle = 0.0;
      this.targetBrake = false;
      this.targetEBrake = false;
      this.leftHandData = null;
      this.rightHandData = null;
      this.hoveredGearSlot = null;
      this.isGearLocked = true;
      this.oneHandFrameCount = 0;
      return;
    }

    this.detectedHandsCount = landmarksList.length;
    this.handsVisible = true;
    const now = performance.now();

    // ─────────────────────────────────────────────────────────────
    // MODE A: TWO HANDS DETECTED => STRICT STEERING CONTROL ONLY!
    // Gearing system is 100% LOCKED to prevent accidental gear shifts!
    // ─────────────────────────────────────────────────────────────
    if (landmarksList.length >= 2) {
      this.isGearLocked = true;
      this.oneHandFrameCount = 0;
      this.hoveredGearSlot = null;
      this.rightHandHistory = [];
      this.wasPinched = false;

      // Classify Left vs Right hand
      const handA = landmarksList[0];
      const handB = landmarksList[1];
      const userXA = 1.0 - handA[9].x;
      const userXB = 1.0 - handB[9].x;

      let leftHand, rightHand;
      if (userXA < userXB) {
        leftHand = handA;
        rightHand = handB;
      } else {
        leftHand = handB;
        rightHand = handA;
      }

      this.leftHandData = leftHand;
      this.rightHandData = rightHand;

      // 1. Pure Two-Hand Steering via Landmark 9 (MCP)
      const xL = 1.0 - leftHand[9].x;
      const yL = leftHand[9].y;
      const xR = 1.0 - rightHand[9].x;
      const yR = rightHand[9].y;

      const dx = xR - xL;
      const dy = yR - yL; // positive => right hand lower => clockwise right turn
      const rawTheta = Math.atan2(dy, Math.max(0.12, Math.abs(dx)));
      this.rawAngle = rawTheta;

      // Mechanical deadzone & linear normalization
      const absAngle = Math.abs(rawTheta);
      if (absAngle < this.DEADZONE) {
        this.targetSteer = 0.0;
      } else {
        const normalized = Math.min(1.0, (absAngle - this.DEADZONE) / (this.MAX_TILT - this.DEADZONE));
        this.targetSteer = Math.sign(rawTheta) * normalized;
      }

      this.steeringDegrees = this.targetSteer * 450;

      // 2. Fist Braking in Two-Hand Driving
      const isLeftFist = this.isClenchedFist(leftHand);
      const isRightFist = this.isClenchedFist(rightHand);

      if (isLeftFist && isRightFist) {
        // Double fist => Emergency Handbrake!
        this.targetEBrake = true;
        this.targetBrake = true;
        this.targetThrottle = 0.0;
      } else if (isLeftFist || isRightFist) {
        // Single fist => Firm Foot Brake
        this.targetBrake = true;
        this.targetEBrake = false;
        this.targetThrottle = 0.0;
      } else {
        this.targetBrake = false;
        this.targetEBrake = false;

        // 3. Throttle by lowering hand (Elevation)
        const wristY = rightHand[0].y;
        this.targetThrottle = Math.max(0, Math.min(1.0, (wristY - 0.35) / 0.35));
      }

      return; // GEAR SHIFTING IS STRICTLY LOCKED WHILE 2 HANDS ARE STEERING!
    }

    // ─────────────────────────────────────────────────────────────
    // MODE B: ONE HAND DETECTED => GEAR SHIFTING CONTROL MODE!
    // Steering is locked straight while user shifts gears
    // ─────────────────────────────────────────────────────────────
    this.oneHandFrameCount++;
    this.targetSteer = 0.0; // Steering locked straight while shifting
    this.steeringDegrees = 0;

    const singleHand = landmarksList[0];
    const userX = 1.0 - singleHand[9].x;
    const userY = singleHand[9].y;

    if (userX < 0.5) {
      this.leftHandData = singleHand;
      this.rightHandData = null;
    } else {
      this.rightHandData = singleHand;
      this.leftHandData = null;
    }

    // Single hand fist brake
    const isFist = this.isClenchedFist(singleHand);
    if (isFist) {
      this.targetBrake = true;
      this.targetEBrake = false;
      this.targetThrottle = 0.0;
    } else {
      this.targetBrake = false;
      this.targetEBrake = false;
      this.targetThrottle = 0.0; // Coast while shifting
    }

    // Unlock gear system only after 2 stable frames of 1-hand mode
    if (this.oneHandFrameCount >= 2) {
      this.isGearLocked = false;

      // METHOD 1: QUICK PADDLE PINCH-TAP (Touch thumb & index)
      const dThumbIndex = this.calcDistance(singleHand[4], singleHand[8]);
      const palmRef = Math.max(0.01, this.calcDistance(singleHand[0], singleHand[9]));
      const isPinched = (dThumbIndex / palmRef < 0.28);

      if (isPinched && !this.wasPinched && (now - this.lastSwipeTime > 320)) {
        let nextGear = 'D';
        if (this.activeGear === 'P') nextGear = 'D';
        else if (this.activeGear === 'D') nextGear = 'R';
        else if (this.activeGear === 'R') nextGear = 'D';
        else nextGear = 'D';

        if (this.onGearSelect) this.onGearSelect(nextGear);
        this.lastSwipeTime = now;
        this.notifyGearShift(`⚡ PINCH: [ ${nextGear} ]`);
      }
      this.wasPinched = isPinched;

      // Trajectory buffer for gentle flick detection
      this.rightHandHistory.push({ x: userX, y: userY, time: now });
      while (this.rightHandHistory.length > 0 && now - this.rightHandHistory[0].time > 300) {
        this.rightHandHistory.shift();
      }

      // METHOD 2: GENTLE FLICK UP / DOWN
      if (this.rightHandHistory.length >= 2 && (now - this.lastSwipeTime > 320)) {
        const oldest = this.rightHandHistory[0];
        const dtSample = now - oldest.time;
        if (dtSample >= 70 && dtSample <= 300) {
          const dy = userY - oldest.y;
          const dx = userX - oldest.x;
          const absDy = Math.abs(dy);
          const absDx = Math.abs(dx);
          const speedY = absDy / (dtSample / 1000);

          if (absDy >= 0.045 && speedY >= 0.14 && absDy > 0.60 * absDx) {
            // dy < 0: Flick UP => Shift UP towards P (-1)
            // dy > 0: Flick DOWN => Shift DOWN towards D (+1)
            const shiftDir = dy < 0 ? -1 : 1;
            if (this.onGearSwipe) this.onGearSwipe(shiftDir);
            this.lastSwipeTime = now;
            this.rightHandHistory = [];
            this.notifyGearShift(shiftDir < 0 ? '▲ SHIFT UP' : '▼ SHIFT DOWN');
          }
        }
      }

      // METHOD 3: VIRTUAL GEAR SHIFTER GATE (Right half of frame: X > 0.45)
      if (userX > 0.45) {
        let slot = null;
        if (userY < 0.28) slot = 'P';
        else if (userY < 0.48) slot = 'R';
        else if (userY < 0.68) slot = 'N';
        else slot = 'D';

        if (this.hoveredGearSlot === slot) {
          const dwell = now - this.hoverStartTime;
          if (dwell >= 60 && (now - this.lastSwipeTime > 320) && this.activeGear !== slot) {
            if (this.onGearSelect) this.onGearSelect(slot);
            this.lastSwipeTime = now;
            this.notifyGearShift(`⚡ ENGAGED: [ ${slot} ]`);
          }
        } else {
          this.hoveredGearSlot = slot;
          this.hoverStartTime = now;
        }
      } else {
        this.hoveredGearSlot = null;
      }
    }
  }

  isClenchedFist(landmarks) {
    const wrist = landmarks[0];
    const palmBaseRef = this.calcDistance(wrist, landmarks[9]);
    if (palmBaseRef < 0.02) return false;

    const tipIndices = [4, 8, 12, 16, 20];
    let curledCount = 0;

    for (const idx of tipIndices) {
      const dist = this.calcDistance(wrist, landmarks[idx]);
      if (dist < palmBaseRef * 1.25) {
        curledCount++;
      }
    }

    return curledCount >= 4;
  }

  calcDistance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dz = (p1.z || 0) - (p2.z || 0);
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  renderHUD(results) {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const now = performance.now();

    ctx.clearRect(0, 0, w, h);

    if (!results || !results.landmarks || results.landmarks.length === 0) {
      ctx.fillStyle = 'rgba(10, 20, 30, 0.45)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#00e5ff';
      ctx.font = 'bold 13px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('RAISE 2 HANDS TO STEER | 1 HAND TO SHIFT', w / 2, h / 2);
      return;
    }

    // Mirrored camera feed skeleton layer
    ctx.save();
    ctx.translate(w, 0);
    ctx.scale(-1, 1);

    const landmarksList = results.landmarks;
    landmarksList.forEach((landmarks) => {
      const isLeft = (landmarks === this.leftHandData);
      const mainColor = this.isGearLocked
        ? (isLeft ? '#00e5ff' : '#ff9100') // Vibrant Steering Mode
        : '#00ff88';                       // Emerald Gear Shifting Mode
      const jointColor = isLeft ? '#ffffff' : '#ffe082';

      ctx.lineWidth = 3;
      ctx.strokeStyle = mainColor;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (const [start, end] of HAND_CONNECTIONS) {
        const p1 = landmarks[start];
        const p2 = landmarks[end];
        ctx.beginPath();
        ctx.moveTo(p1.x * w, p1.y * h);
        ctx.lineTo(p2.x * w, p2.y * h);
        ctx.stroke();
      }

      landmarks.forEach((p, pIdx) => {
        const radius = (pIdx === 9 || pIdx === 4 || pIdx === 8) ? 5.5 : 3.0;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, radius, 0, 2 * Math.PI);
        ctx.fillStyle = (pIdx === 9) ? '#ff1744' : jointColor;
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      const mcp9 = landmarks[9];
      ctx.beginPath();
      ctx.arc(mcp9.x * w, mcp9.y * h, 9, 0, 2 * Math.PI);
      ctx.strokeStyle = mainColor;
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    if (this.leftHandData && this.rightHandData && this.detectedHandsCount >= 2) {
      const pL = this.leftHandData[9];
      const pR = this.rightHandData[9];

      ctx.beginPath();
      ctx.moveTo(pL.x * w, pL.y * h);
      ctx.lineTo(pR.x * w, pR.y * h);
      ctx.strokeStyle = 'rgba(255, 235, 59, 0.85)';
      ctx.lineWidth = 4;
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    ctx.restore();

    // 1. TOP METRICS & ACTIVE MODE BAR
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.80)';
    ctx.fillRect(8, 8, w - 16, 26);

    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'left';

    if (this.detectedHandsCount >= 2) {
      // 2 Hands Steering Mode
      ctx.fillStyle = '#00e5ff';
      ctx.fillText('2 HANDS: STEERING ACTIVE', 14, 25);

      ctx.fillStyle = '#ffeb3b';
      const deg = Math.round(this.steeringDegrees);
      ctx.fillText(`STEER: ${deg > 0 ? '+' : ''}${deg}°`, 180, 25);

      ctx.fillStyle = this.targetEBrake ? '#ff1744' : (this.targetBrake ? '#ff9100' : '#76ff03');
      const brakeText = this.targetEBrake ? 'E-BRAKE' : (this.targetBrake ? 'BRAKE' : `GAS: ${Math.round(this.targetThrottle * 100)}%`);
      ctx.fillText(brakeText, 275, 25);

      ctx.fillStyle = '#94a3b8';
      ctx.fillText('🔒 GEARS LOCKED', w - 120, 25);
    } else {
      // 1 Hand Gear Shifting Mode
      ctx.fillStyle = '#00ff88';
      ctx.fillText('1 HAND: GEAR SHIFT MODE', 14, 25);

      ctx.fillStyle = '#94a3b8';
      ctx.fillText('STEER: LOCKED', 180, 25);

      ctx.fillStyle = '#00e5ff';
      ctx.fillText('🔓 GEARS UNLOCKED', w - 130, 25);
    }
    ctx.restore();

    // 2. VIRTUAL GEAR SHIFTER GATE (Right side overlay)
    ctx.save();
    const gateW = 72;
    const gateX = w - gateW - 10;
    const gateY = 40;
    const gateH = h - 68;

    // Semi-transparent Glass Gate Panel
    ctx.fillStyle = 'rgba(10, 16, 26, 0.85)';
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(gateX, gateY, gateW, gateH, 8);
    } else {
      ctx.rect(gateX, gateY, gateW, gateH);
    }
    ctx.fill();

    // Border highlights whether locked or unlocked
    ctx.strokeStyle = this.isGearLocked ? 'rgba(148, 163, 184, 0.35)' : 'rgba(0, 255, 136, 0.85)';
    ctx.lineWidth = this.isGearLocked ? 1.5 : 2.5;
    ctx.stroke();

    // Gate Header
    ctx.fillStyle = this.isGearLocked ? '#94a3b8' : '#00ff88';
    ctx.font = 'bold 9px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(this.isGearLocked ? '🔒 LOCKED' : '⚡ UNLOCKED', gateX + gateW / 2, gateY + 13);

    // 4 Interactive Gear Slots: P, R, N, D
    const gearSlots = [
      { id: 'P', label: 'P', name: 'PARK', color: '#00e5ff' },
      { id: 'R', label: 'R', name: 'REV',  color: '#ff9100' },
      { id: 'N', label: 'N', name: 'NEUT', color: '#94a3b8' },
      { id: 'D', label: 'D', name: 'DRIVE', color: '#00ff88' }
    ];

    const slotSpacing = (gateH - 22) / 4;
    const slotH = Math.min(32, slotSpacing - 6);

    gearSlots.forEach((slot, idx) => {
      const slotY = gateY + 18 + idx * slotSpacing;
      const isActive = (slot.id === this.activeGear);
      const isHovered = (!this.isGearLocked && slot.id === this.hoveredGearSlot);

      ctx.beginPath();
      const sBoxX = gateX + 6;
      const sBoxW = gateW - 12;
      if (ctx.roundRect) {
        ctx.roundRect(sBoxX, slotY, sBoxW, slotH, 6);
      } else {
        ctx.rect(sBoxX, slotY, sBoxW, slotH);
      }

      if (isActive) {
        // Active Gear
        ctx.fillStyle = slot.color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.5;
        ctx.stroke();
      } else if (isHovered) {
        // Hovered Gear (only active in 1-hand mode)
        ctx.fillStyle = 'rgba(255, 235, 59, 0.35)';
        ctx.fill();
        ctx.strokeStyle = '#ffeb3b';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        // Idle Gear
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Slot Letters & Labels
      ctx.font = '900 13px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = isActive ? '#000000' : (isHovered ? '#ffeb3b' : '#e2e8f0');
      ctx.fillText(slot.label, sBoxX + 16, slotY + slotH / 2);

      ctx.font = 'bold 8px "Segoe UI", sans-serif';
      ctx.fillText(slot.name, sBoxX + sBoxW - 18, slotY + slotH / 2);
    });

    // 3. TARGETING RETICLE (in 1-Hand Gear Shifting Mode)
    if (!this.isGearLocked && this.detectedHandsCount === 1) {
      const hand = this.rightHandData || this.leftHandData;
      if (hand) {
        const userX = 1.0 - hand[9].x;
        const userY = hand[9].y;

        const reticleX = userX * w;
        const reticleY = userY * h;

        ctx.beginPath();
        ctx.arc(reticleX, reticleY, 13, 0, Math.PI * 2);
        ctx.strokeStyle = (userX > 0.45) ? '#00ff88' : 'rgba(0, 229, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(reticleX, reticleY, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        if (userX > 0.40) {
          ctx.beginPath();
          ctx.moveTo(reticleX, reticleY);
          ctx.lineTo(gateX, reticleY);
          ctx.strokeStyle = 'rgba(0, 255, 136, 0.4)';
          ctx.setLineDash([3, 3]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }
    }

    // 4. FLOATING GEAR SHIFT NOTIFICATION BANNER
    if (this.lastShiftNotification && (now - this.shiftNotificationTime < 950)) {
      const fadeProgress = (now - this.shiftNotificationTime) / 950;
      const alpha = Math.max(0, 1.0 - fadeProgress);

      ctx.save();
      ctx.fillStyle = `rgba(0, 0, 0, ${alpha * 0.88})`;
      const toastW = 190;
      const toastH = 30;
      const toastX = (w - toastW) / 2;
      const toastY = 44;

      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(toastX, toastY, toastW, toastH, 6);
      } else {
        ctx.rect(toastX, toastY, toastW, toastH);
      }
      ctx.fill();

      ctx.strokeStyle = `rgba(0, 255, 136, ${alpha})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.font = 'bold 12px "Segoe UI", sans-serif';
      ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.lastShiftNotification, w / 2, toastY + toastH / 2);
      ctx.restore();
    }

    // 5. BOTTOM INSTRUCTIONAL FOOTER
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.fillRect(8, h - 22, w - 16, 18);
    ctx.font = 'bold 10px "Segoe UI", monospace';
    ctx.textAlign = 'center';

    if (this.detectedHandsCount >= 2) {
      ctx.fillStyle = '#00e5ff';
      ctx.fillText('🏎️ 2 HANDS = STEERING CONTROL (GEARS LOCKED) | DROP 1 HAND TO SHIFT', w / 2, h - 9);
    } else {
      ctx.fillStyle = '#00ff88';
      ctx.fillText('⚡ 1 HAND = SHIFT GEARS (PINCH, FLICK ▲▼, TAP GATE) | RAISE 2 HANDS TO STEER', w / 2, h - 9);
    }

    ctx.restore();
  }

  setKeyboardInputs(steerVal, throttleVal, isBraking, isEBrake) {
    this.targetSteer = steerVal;
    this.targetThrottle = throttleVal;
    this.targetBrake = isBraking;
    this.targetEBrake = isEBrake;
    this.handsVisible = true;
    this.steeringDegrees = steerVal * 450;
  }
}
