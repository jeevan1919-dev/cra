/**
 * main.js - Master Engine Lifecycle & Decoupled 60 FPS Render Loop
 * 
 * Production Architecture:
 * - Decoupled Three.js graphics loop (60+ FPS) powered by THREE.Clock dt
 * - Asynchronous MediaPipe Vision pipeline (~30 Hz) writing raw target values
 * - Mechanical Damping: RESPONSIVENESS = 24.0 * dt (active), CENTER_SPRING = 16.0 * dt (centering)
 * - Pure Ackermann kinematics (Zero sideways slip)
 * - Dr. Driving cockpit inertia & camera dynamics
 * - Procedural SoundSynth Web Audio engine
 * - Stats.js real-time profiling
 */

import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { HandTracker } from './vision/HandTracker.js';
import { VehiclePhysics } from './physics/VehiclePhysics.js';
import { CityBuilder } from './world/CityBuilder.js';
import { TrafficAI } from './world/TrafficAI.js';
import { Cockpit } from './graphics/Cockpit.js';
import { SoundSynth } from './audio/SoundSynth.js';
import { MissionManager } from './game/MissionManager.js';
import { UIManager } from './ui/UIManager.js';

class DrDrivingGame {
  constructor() {
    this.container = document.getElementById('game-container');
    this.videoEl = document.getElementById('webcam-video');
    this.handCanvas = document.getElementById('hand-skeleton-canvas');

    // Engine subsystems
    this.soundSynth = new SoundSynth();
    this.physics = new VehiclePhysics();
    this.missions = new MissionManager();
    this.ui = new UIManager();
    this.handTracker = null;

    // Three.js Core
    this.scene = null;
    this.renderer = null;
    this.cityBuilder = null;
    this.trafficAI = null;
    this.cockpit = null;
    this.clock = new THREE.Clock();
    this.stats = null;

    // Real-Time Damped Input State (Integrated at 60 FPS)
    this.currentSteer = 0.0;
    this.currentThrottle = 0.0;
    this.currentBrake = false;
    this.currentEBrake = false;

    // Control Mode: 'hands' or 'keyboard'
    this.controlMode = 'hands';
    this.keyboardState = {
      up: false,
      down: false,
      left: false,
      right: false,
      space: false
    };

    this.running = false;

    this.init();
  }

  async init() {
    // 1. Initialize Profiling & UI
    this.setupStats();
    this.ui.init();
    this.bindUIEvents();

    // 2. Initialize Three.js 3D Engine
    this.setupThreeScene();

    // 3. Initialize Batched World, Traffic, and Cockpit
    this.cityBuilder = new CityBuilder(this.scene);
    this.trafficAI = new TrafficAI(this.scene);
    this.cockpit = new Cockpit(this.scene, this.renderer);

    // 4. Setup Input Listeners
    this.setupKeyboardListeners();

    // 5. Initialize Decoupled Vision Pipeline
    await this.setupVisionTracker();

    // 6. Handle Resizing
    window.addEventListener('resize', () => this.onWindowResize());

    // 7. On every browser refresh, always start directly from the first level (Level 1)
    this.missions.resetToFirstLevel();
    this.ui.hideModals();
    this.trafficAI.setLevelDifficulty(1);
    this.missions.startMission(1, this.physics);
    this.ui.showBriefing(this.missions.getCurrentMission());

    // 8. Start Independent 60 FPS Three.js Game Loop
    this.running = true;
    this.clock.start();
    requestAnimationFrame((t) => this.gameLoop(t));
  }

  setupStats() {
    this.stats = new Stats();
    this.stats.showPanel(0); // 0: fps, 1: ms
    this.stats.dom.style.position = 'absolute';
    this.stats.dom.style.top = '10px';
    this.stats.dom.style.left = '10px';
    this.stats.dom.style.zIndex = '150';
    document.body.appendChild(this.stats.dom);
  }

  setupThreeScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87ceeb);
    this.scene.fog = new THREE.FogExp2(0xb0c4de, 0.0035);

    // WebGL Renderer with capped pixel ratio (max 2) for locked 60 FPS
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // Balanced Skylight
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444455, 0.85);
    hemiLight.position.set(0, 50, 0);
    this.scene.add(hemiLight);

    // Directional Sun Light
    const sunLight = new THREE.DirectionalLight(0xfff5e6, 1.4);
    sunLight.position.set(35, 60, -25);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 1.0;
    sunLight.shadow.camera.far = 160;
    sunLight.shadow.camera.left = -30;
    sunLight.shadow.camera.right = 30;
    sunLight.shadow.camera.top = 30;
    sunLight.shadow.camera.bottom = -30;
    sunLight.shadow.bias = -0.0005;
    this.scene.add(sunLight);
  }

  async setupVisionTracker() {
    this.handTracker = new HandTracker(this.videoEl, this.handCanvas);

    this.handTracker.onStatusChange = (status, msg) => {
      if (this.ui.elements.handStatusTag) {
        this.ui.elements.handStatusTag.textContent = msg;
        if (status === 'active') {
          this.ui.elements.handStatusTag.style.color = '#00ff88';
        } else if (status === 'denied' || status === 'error') {
          this.ui.elements.handStatusTag.style.color = '#ff9900';
          this.controlMode = 'keyboard';
          if (this.ui.elements.controlModeBtn) {
            this.ui.elements.controlModeBtn.textContent = 'KEYBOARD MODE';
          }
        }
      }
    };

    this.handTracker.onGearSwipe = (dir) => {
      this.shiftGear(this.physics.cycleGear(dir));
    };

    this.handTracker.onGearSelect = (gear) => {
      this.shiftGear(gear);
    };

    try {
      await this.handTracker.init();
    } catch (e) {
      console.warn('Vision tracker initial setup notice:', e);
      this.controlMode = 'keyboard';
    }
  }

  setupKeyboardListeners() {
    window.addEventListener('keydown', (e) => {
      this.soundSynth.resume();

      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keyboardState.up = true;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.keyboardState.down = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keyboardState.left = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.keyboardState.right = true;
          break;
        case 'Space':
          this.keyboardState.space = true;
          e.preventDefault();
          break;
        case 'Digit1':
          this.shiftGear('P');
          break;
        case 'Digit2':
          this.shiftGear('R');
          break;
        case 'Digit3':
          this.shiftGear('N');
          break;
        case 'Digit4':
          this.shiftGear('D');
          break;
        case 'KeyQ':
          this.physics.turnSignal = (this.physics.turnSignal === 'left') ? 'none' : 'left';
          this.soundSynth.playTurnSignal(true);
          break;
        case 'KeyE':
          this.physics.turnSignal = (this.physics.turnSignal === 'right') ? 'none' : 'right';
          this.soundSynth.playTurnSignal(true);
          break;
        case 'KeyC':
          this.toggleCamera();
          break;
        case 'KeyH':
          this.soundSynth.playHorn(true);
          break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keyboardState.up = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.keyboardState.down = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keyboardState.left = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.keyboardState.right = false;
          break;
        case 'Space':
          this.keyboardState.space = false;
          break;
        case 'KeyH':
          this.soundSynth.playHorn(false);
          break;
      }
    });
  }

  bindUIEvents() {
    this.ui.onSelectLevel = (levelId) => {
      this.soundSynth.resume();
      this.trafficAI.setLevelDifficulty(levelId);
      this.missions.startMission(levelId, this.physics);
      this.ui.showBriefing(this.missions.getCurrentMission());
    };

    this.ui.onRetryLevel = () => {
      this.soundSynth.resume();
      this.trafficAI.setLevelDifficulty(this.missions.currentLevel);
      this.missions.startMission(this.missions.currentLevel, this.physics);
      this.ui.showBriefing(this.missions.getCurrentMission());
    };

    this.ui.onNextLevel = () => {
      this.soundSynth.resume();
      const nextLvl = Math.min(this.missions.missions.length, this.missions.currentLevel + 1);
      this.trafficAI.setLevelDifficulty(nextLvl);
      this.missions.startMission(nextLvl, this.physics);
      this.ui.showBriefing(this.missions.getCurrentMission());
    };

    this.ui.onOpenMissions = () => {
      this.ui.showLevelSelect(this.missions.missions, this.missions.unlockedLevels, this.missions.coins, this.missions.levelStats);
    };

    this.ui.onToggleCamera = () => this.toggleCamera();

    this.ui.onToggleMute = () => {
      const isMuted = this.soundSynth.toggleMute();
      if (this.ui.elements.muteToggleBtn) {
        this.ui.elements.muteToggleBtn.textContent = isMuted ? '🔇 MUTED' : '🔊 SOUND ON';
      }
    };

    this.ui.onToggleHandTracking = () => {
      this.controlMode = (this.controlMode === 'hands') ? 'keyboard' : 'hands';
      if (this.ui.elements.controlModeBtn) {
        this.ui.elements.controlModeBtn.textContent = (this.controlMode === 'hands') ? 'GESTURE MODE' : 'KEYBOARD MODE';
      }
    };

    this.ui.onShiftGear = (gear) => this.shiftGear(gear);
  }

  shiftGear(gear) {
    if (this.physics.gear !== gear) {
      this.physics.setGear(gear);
      this.soundSynth.playGearShift();
      if (this.cockpit) {
        this.cockpit.triggerHandShift(gear);
      }
      if (this.handTracker) {
        this.handTracker.activeGear = gear;
      }
    }
  }

  toggleCamera() {
    const mode = this.cockpit.toggleCameraMode();
    if (this.ui.elements.camToggleBtn) {
      this.ui.elements.camToggleBtn.textContent = (mode === 'cockpit') ? '🎥 COCKPIT' : '🚗 CHASE CAM';
    }
  }

  onWindowResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h);

    if (this.cockpit.cockpitCamera) {
      this.cockpit.cockpitCamera.aspect = w / h;
      this.cockpit.cockpitCamera.updateProjectionMatrix();
    }
    if (this.cockpit.thirdPersonCamera) {
      this.cockpit.thirdPersonCamera.aspect = w / h;
      this.cockpit.thirdPersonCamera.updateProjectionMatrix();
    }
  }

  /**
   * Main 60 FPS Three.js Game Loop
   */
  gameLoop() {
    if (!this.running) return;
    requestAnimationFrame(() => this.gameLoop());

    this.stats.begin();

    // Precise delta time from THREE.Clock with safety clamp to prevent spiral-of-death jumps
    const dt = Math.min(this.clock.getDelta(), 0.0333);

    // 1. DAMPING & MECHANICAL SNAP (ACTIVE TRACKING vs CENTERING SPRING)
    const hasKeyboardInput = this.keyboardState.up || this.keyboardState.down ||
                             this.keyboardState.left || this.keyboardState.right ||
                             this.keyboardState.space;

    if (hasKeyboardInput) {
      let targetSteer = 0.0;
      if (this.keyboardState.left) targetSteer = -0.85;
      if (this.keyboardState.right) targetSteer = 0.85;

      this.currentSteer = THREE.MathUtils.damp(this.currentSteer, targetSteer, 24.0, dt);
      this.currentThrottle = THREE.MathUtils.damp(this.currentThrottle, this.keyboardState.up ? 1.0 : 0.0, 20.0, dt);
      this.currentBrake = this.keyboardState.down;
      this.currentEBrake = this.keyboardState.space;
    } else if (this.controlMode === 'hands' && this.handTracker && this.handTracker.handsVisible) {
      // ACTIVE TRACKING: Snappy direct response using THREE.MathUtils.damp (24.0 * dt)
      this.currentSteer = THREE.MathUtils.damp(this.currentSteer, this.handTracker.targetSteer, 24.0, dt);
      this.currentThrottle = THREE.MathUtils.damp(this.currentThrottle, this.handTracker.targetThrottle, 20.0, dt);
      this.currentBrake = this.handTracker.targetBrake;
      this.currentEBrake = this.handTracker.targetEBrake;
    } else {
      // CENTERING SPRING: Snap back immediately using THREE.MathUtils.damp (16.0 * dt)
      this.currentSteer = THREE.MathUtils.damp(this.currentSteer, 0.0, 16.0, dt);
      this.currentThrottle = THREE.MathUtils.damp(this.currentThrottle, 0.0, 16.0, dt);
      this.currentBrake = false;
      this.currentEBrake = false;
    }

    // 2. Pure Ackermann Physics Integration
    const isDrivingActive = this.missions.levelState === 'playing' || this.missions.levelState === 'briefing';
    if (isDrivingActive) {
      this.physics.update(dt, this.currentSteer, this.currentThrottle, this.currentBrake, this.currentEBrake);
    } else {
      this.physics.update(dt, 0, 0, true, false);
    }

    // 3. Procedural Audio Update
    this.soundSynth.updateEngine(this.physics.rpm, this.currentThrottle, this.physics.gear);
    this.soundSynth.updateTireScreech(this.physics.screechIntensity);

    // 4. City World & Traffic AI
    this.cityBuilder.update(dt);
    this.trafficAI.update(dt, this.physics);

    // 5. Collision Checks
    if (isDrivingActive) {
      this.checkCollisions();
    }

    // 6. Mission Rules Update
    if (isDrivingActive) {
      this.missions.update(dt, this.physics, this.cityBuilder);

      if (this.missions.levelState === 'passed') {
        this.soundSynth.playVictory();
        this.ui.cachedUnlockedCount = this.missions.unlockedLevels;
        this.ui.cachedCoins = this.missions.coins;
        this.ui.cachedLevelStats = this.missions.levelStats;
        const nextAvailable = this.missions.currentLevel < this.missions.missions.length;
        this.ui.showSuccess(this.missions.lastResult, this.missions.getCurrentMission(), nextAvailable, this.soundSynth);
      } else if (this.missions.levelState === 'failed') {
        this.soundSynth.playFail();
        this.ui.showFail(this.missions.failReason, this.missions.failTip);
      }
    }

    // 7. Update Cockpit & 3D Car Model
    if (this.handTracker) {
      this.handTracker.activeGear = this.physics.gear;
    }
    this.cockpit.update(this.physics, this.currentSteer, dt);

    // 8. Apply Camera Shake to Active Camera
    const activeCamera = this.cockpit.getActiveCamera();
    const shake = this.ui.getShakeOffset(dt);
    activeCamera.position.x += shake.x;
    activeCamera.position.y += shake.y;

    // 9. Render Rearview Mirror Pass (Throttled & only in cockpit view)
    this.cockpit.renderMirror(this.scene);

    // 10. Render Main Viewport Pass
    this.renderer.render(this.scene, activeCamera);

    // 11. Update HUD & Radar Minimap
    this.ui.updateHUD(this.physics, this.missions, dt);
    this.ui.renderRadar(this.physics, this.trafficAI, this.cityBuilder);

    this.stats.end();
  }

  checkCollisions() {
    for (const obs of this.cityBuilder.colliders) {
      if (this.physics.checkCollisionWithAABB(obs.box.minX, obs.box.minZ, obs.box.maxX, obs.box.maxZ)) {
        this.handleCrash(
          `COLLISION with ${obs.name || 'Obstacle'}!`,
          'Coach Tip: Keep your vehicle centered in the marked lane and avoid sharp turning near the sidewalks.'
        );
        return;
      }
    }

    const collidedVehicle = this.trafficAI.checkCollisionWithPlayer(this.physics);
    if (collidedVehicle) {
      this.handleCrash(
        'TRAFFIC CRASH! Collided with moving vehicle.',
        'Coach Tip: Watch for brake lights ahead, maintain safe following distance, and pass on open lanes.'
      );
      return;
    }
  }

  handleCrash(reason, tip) {
    this.soundSynth.playCrash();
    this.ui.triggerDamageFlash();
    this.missions.failMission(reason, tip);
    this.ui.showFail(reason, tip);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new DrDrivingGame();
});
