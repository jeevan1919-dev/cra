/**
 * UIManager.js - Dr. Driving HUD, Radar Minimap, Gauges & Task Management Modals
 * 
 * Features:
 * - Real-time animated task progress bar and live score counter
 * - Floating warning banners with audible cues and driver assistance tips
 * - Slide-in mission briefing card on stage start
 * - Multi-star animated victory sequence with itemized score breakdown
 * - Driver coach failure explanations with actionable tips to pass
 * - Level selection grid with difficulty tags, star records, and personal best scores
 */

export class UIManager {
  constructor() {
    this.elements = {};
    this.radarCanvas = null;
    this.radarCtx = null;
    this.shakeIntensity = 0;
    this.shakeDecay = 4.5;

    // Callbacks to game engine
    this.onSelectLevel = null;
    this.onRetryLevel = null;
    this.onNextLevel = null;
    this.onToggleCamera = null;
    this.onToggleMute = null;
    this.onShiftGear = null;
    this.onToggleHandTracking = null;

    // Cached state
    this.cachedMissions = null;
    this.cachedUnlockedCount = 1;
    this.cachedCoins = 500;
    this.cachedLevelStats = {};

    this.starAnimationTimeouts = [];
  }

  init() {
    this.cacheDOMElements();
    this.setupEventListeners();
  }

  cacheDOMElements() {
    this.elements = {
      // Top HUD
      levelTitle: document.getElementById('hud-level-title'),
      levelDiffTag: document.getElementById('hud-level-diff'),
      progressBar: document.getElementById('hud-progress-bar'),
      levelMetric: document.getElementById('hud-level-metric'),
      liveScoreVal: document.getElementById('hud-live-score'),
      coinCounter: document.getElementById('hud-coin-count'),
      camToggleBtn: document.getElementById('btn-toggle-cam'),
      muteToggleBtn: document.getElementById('btn-toggle-mute'),
      controlModeBtn: document.getElementById('btn-toggle-controls'),

      // Floating Banners
      warningBanner: document.getElementById('hud-warning-banner'),
      briefingCard: document.getElementById('mission-briefing-card'),
      briefingBadge: document.getElementById('briefing-badge'),
      briefingTitle: document.getElementById('briefing-title'),
      briefingDesc: document.getElementById('briefing-desc'),
      briefingTip: document.getElementById('briefing-tip'),

      // Cockpit Dashboard
      speedValue: document.getElementById('gauge-speed-val'),
      speedNeedle: document.getElementById('gauge-speed-needle'),
      rpmValue: document.getElementById('gauge-rpm-val'),
      rpmNeedle: document.getElementById('gauge-rpm-needle'),
      gearIndicator: document.getElementById('gauge-gear-disp'),
      ecoIndicator: document.getElementById('gauge-eco-disp'),
      fuelBarFill: document.getElementById('gauge-fuel-fill'),
      signalLeft: document.getElementById('sig-left'),
      signalRight: document.getElementById('sig-right'),

      // Gear Gate
      gearP: document.getElementById('gear-btn-p'),
      gearR: document.getElementById('gear-btn-r'),
      gearN: document.getElementById('gear-btn-n'),
      gearD: document.getElementById('gear-btn-d'),

      // Radar
      radarCanvas: document.getElementById('radar-canvas'),

      // Alert & Flash
      damageFlash: document.getElementById('damage-flash-overlay'),

      // Modals
      levelSelectModal: document.getElementById('modal-level-select'),
      successModal: document.getElementById('modal-stage-clear'),
      failModal: document.getElementById('modal-stage-failed'),
      btnOpenMissions: document.getElementById('btn-open-missions'),
      btnCloseLevelSelect: document.getElementById('btn-close-level-select'),

      // Victory Modal Breakdown
      stars: [
        document.getElementById('star-1'),
        document.getElementById('star-2'),
        document.getElementById('star-3')
      ],
      scoreBase: document.getElementById('score-val-base'),
      scoreTime: document.getElementById('score-val-time'),
      scoreClean: document.getElementById('score-val-clean'),
      scoreTech: document.getElementById('score-val-tech'),
      scoreTotal: document.getElementById('score-val-total'),
      badgeRecord: document.getElementById('badge-new-record'),
      winRewardText: document.getElementById('win-reward-text'),
      btnNextLevel: document.getElementById('btn-next-level'),
      btnRetryWin: document.getElementById('btn-retry-win'),
      btnSelectFromWin: document.getElementById('btn-menu-from-win'),

      // Failure Modal
      failReasonText: document.getElementById('fail-reason-text'),
      failCoachTip: document.getElementById('fail-coach-tip'),
      btnRetryFail: document.getElementById('btn-retry-fail'),
      btnSelectFromFail: document.getElementById('btn-menu-from-fail'),

      // Level Grid
      levelGrid: document.getElementById('level-selection-grid'),

      // Hand tracker box
      handHudContainer: document.getElementById('webcam-hud-container'),
      handStatusTag: document.getElementById('hand-status-tag')
    };

    if (this.elements.radarCanvas) {
      this.radarCanvas = this.elements.radarCanvas;
      this.radarCtx = this.radarCanvas.getContext('2d');
    }
  }

  setupEventListeners() {
    // Top Controls
    if (this.elements.camToggleBtn) {
      this.elements.camToggleBtn.addEventListener('click', () => {
        if (this.onToggleCamera) this.onToggleCamera();
      });
    }

    if (this.elements.muteToggleBtn) {
      this.elements.muteToggleBtn.addEventListener('click', () => {
        if (this.onToggleMute) this.onToggleMute();
      });
    }

    if (this.elements.controlModeBtn) {
      this.elements.controlModeBtn.addEventListener('click', () => {
        if (this.onToggleHandTracking) this.onToggleHandTracking();
      });
    }

    // Gear Gate clicks
    const gearBtns = [
      { el: this.elements.gearP, gear: 'P' },
      { el: this.elements.gearR, gear: 'R' },
      { el: this.elements.gearN, gear: 'N' },
      { el: this.elements.gearD, gear: 'D' }
    ];

    gearBtns.forEach(({ el, gear }) => {
      if (el) {
        el.addEventListener('click', () => {
          if (this.onShiftGear) this.onShiftGear(gear);
        });
      }
    });

    // Modals
    if (this.elements.btnRetryFail) {
      this.elements.btnRetryFail.addEventListener('click', () => {
        this.hideModals();
        if (this.onRetryLevel) this.onRetryLevel();
      });
    }

    if (this.elements.btnRetryWin) {
      this.elements.btnRetryWin.addEventListener('click', () => {
        this.hideModals();
        if (this.onRetryLevel) this.onRetryLevel();
      });
    }

    if (this.elements.btnNextLevel) {
      this.elements.btnNextLevel.addEventListener('click', () => {
        this.hideModals();
        if (this.onNextLevel) this.onNextLevel();
      });
    }

    if (this.elements.btnSelectFromFail) {
      this.elements.btnSelectFromFail.addEventListener('click', () => {
        this.showLevelSelect();
      });
    }

    if (this.elements.btnSelectFromWin) {
      this.elements.btnSelectFromWin.addEventListener('click', () => {
        this.showLevelSelect();
      });
    }

    if (this.elements.btnOpenMissions) {
      this.elements.btnOpenMissions.addEventListener('click', () => {
        if (this.onOpenMissions) {
          this.onOpenMissions();
        } else {
          this.showLevelSelect();
        }
      });
    }

    if (this.elements.btnCloseLevelSelect) {
      this.elements.btnCloseLevelSelect.addEventListener('click', () => {
        this.hideModals();
      });
    }
  }

  showLevelSelect(missions, unlockedCount, coins, levelStats) {
    if (!this.elements.levelSelectModal) return;

    if (missions) this.cachedMissions = missions;
    if (unlockedCount !== undefined) this.cachedUnlockedCount = unlockedCount;
    if (coins !== undefined) this.cachedCoins = coins;
    if (levelStats) this.cachedLevelStats = levelStats;

    const useMissions = missions || this.cachedMissions;
    const useUnlocked = (unlockedCount !== undefined) ? unlockedCount : (this.cachedUnlockedCount || 1);
    const useStats = levelStats || this.cachedLevelStats || {};

    this.elements.levelSelectModal.classList.remove('hidden');
    if (this.elements.successModal) this.elements.successModal.classList.add('hidden');
    if (this.elements.failModal) this.elements.failModal.classList.add('hidden');
    if (this.elements.briefingCard) this.elements.briefingCard.classList.add('hidden');
    if (this.elements.warningBanner) this.elements.warningBanner.classList.add('hidden');

    const grid = this.elements.levelGrid;
    if (grid && useMissions) {
      grid.innerHTML = '';
      useMissions.forEach((m) => {
        const isUnlocked = m.id <= useUnlocked;
        const stats = useStats[m.id] || { stars: 0, highScore: 0 };
        const card = document.createElement('div');
        card.className = `level-card ${isUnlocked ? 'unlocked' : 'locked'}`;

        // Stars render (e.g. ⭐⭐⭐ or ⭐☆☆)
        let starStr = '☆☆☆';
        if (stats.stars === 3) starStr = '⭐⭐⭐';
        else if (stats.stars === 2) starStr = '⭐⭐☆';
        else if (stats.stars === 1) starStr = '⭐☆☆';

        const bestScoreStr = stats.highScore > 0 ? `🏆 Best: ${stats.highScore.toLocaleString()}` : 'Not completed';

        card.innerHTML = `
          <div class="level-header">
            <span class="level-badge" style="background: ${m.difficultyColor || '#38bdf8'}; color: #000;">LVL ${m.id} • ${m.difficulty}</span>
            <span class="reward-tag">+${m.reward} 🪙</span>
          </div>
          <h3 class="level-card-title">${m.title}</h3>
          <p class="level-card-sub">${m.subtitle}</p>
          <p class="level-card-desc">${m.description}</p>
          <div class="level-footer-row">
            <span class="level-stars-display">${starStr}</span>
            <span class="level-best-tag">${bestScoreStr}</span>
          </div>
          <button class="level-play-btn" ${!isUnlocked ? 'disabled' : ''}>
            ${isUnlocked ? 'START MISSION' : '🔒 LOCKED'}
          </button>
        `;

        if (isUnlocked) {
          card.addEventListener('click', () => {
            this.hideModals();
            if (this.onSelectLevel) this.onSelectLevel(m.id);
          });
        }

        grid.appendChild(card);
      });
    }
  }

  showBriefing(mission) {
    if (!this.elements.briefingCard) return;
    this.elements.briefingBadge.textContent = `LVL ${mission.id} • ${mission.difficulty}`;
    this.elements.briefingBadge.style.background = mission.difficultyColor || '#00e5ff';
    this.elements.briefingTitle.textContent = mission.title;
    this.elements.briefingDesc.textContent = mission.description;
    this.elements.briefingTip.textContent = `💡 ${mission.tip}`;
    this.elements.briefingCard.classList.remove('hidden');
    this.elements.briefingCard.style.opacity = '1';
  }

  hideBriefing() {
    if (!this.elements.briefingCard) return;
    this.elements.briefingCard.style.opacity = '0';
    setTimeout(() => {
      if (this.elements.briefingCard) this.elements.briefingCard.classList.add('hidden');
    }, 300);
  }

  showSuccess(result, mission, nextLevelAvailable, soundSynth) {
    this.hideModals();
    this.clearStarTimeouts();

    if (this.elements.successModal) {
      this.elements.successModal.classList.remove('hidden');

      // Populate score breakdown
      if (this.elements.scoreBase) this.elements.scoreBase.textContent = `+${result.baseScore.toLocaleString()}`;
      if (this.elements.scoreTime) this.elements.scoreTime.textContent = `+${result.timeBonus.toLocaleString()}`;
      if (this.elements.scoreClean) this.elements.scoreClean.textContent = `+${result.cleanBonus.toLocaleString()}`;
      if (this.elements.scoreTech) this.elements.scoreTech.textContent = `+${(result.smoothBonus + result.techBonus).toLocaleString()}`;
      if (this.elements.scoreTotal) this.elements.scoreTotal.textContent = `${result.totalScore.toLocaleString()} PTS`;

      // New Record badge
      if (this.elements.badgeRecord) {
        this.elements.badgeRecord.classList.toggle('hidden', !result.isNewHighScore);
      }

      // Coins reward
      if (this.elements.winRewardText) {
        this.elements.winRewardText.textContent = `+${result.coinsEarned} COINS EARNED!`;
      }

      if (this.elements.btnNextLevel) {
        this.elements.btnNextLevel.style.display = nextLevelAvailable ? 'inline-block' : 'none';
      }

      // Animated 3-Star Sequence
      const stars = this.elements.stars;
      stars.forEach((s) => {
        if (s) s.classList.remove('active');
      });

      for (let i = 0; i < result.stars; i++) {
        const timeout = setTimeout(() => {
          if (stars[i]) {
            stars[i].classList.add('active');
            if (soundSynth) soundSynth.playStar(i);
          }
        }, 350 + i * 380);
        this.starAnimationTimeouts.push(timeout);
      }
    }
  }

  clearStarTimeouts() {
    this.starAnimationTimeouts.forEach((t) => clearTimeout(t));
    this.starAnimationTimeouts = [];
  }

  showFail(reason, coachTip) {
    this.hideModals();
    if (this.elements.failModal) {
      this.elements.failModal.classList.remove('hidden');
      if (this.elements.failReasonText) {
        this.elements.failReasonText.textContent = reason;
      }
      if (this.elements.failCoachTip) {
        this.elements.failCoachTip.textContent = coachTip || 'Keep your steering smooth and maintain safe stopping distances.';
      }
    }
  }

  hideModals() {
    this.clearStarTimeouts();
    if (this.elements.levelSelectModal) this.elements.levelSelectModal.classList.add('hidden');
    if (this.elements.successModal) this.elements.successModal.classList.add('hidden');
    if (this.elements.failModal) this.elements.failModal.classList.add('hidden');
  }

  triggerDamageFlash() {
    if (this.elements.damageFlash) {
      this.elements.damageFlash.style.opacity = '0.9';
      setTimeout(() => {
        if (this.elements.damageFlash) this.elements.damageFlash.style.opacity = '0';
      }, 350);
    }
    this.shakeIntensity = 1.0;
  }

  /**
   * Update Dashboard, Gauges, and Task HUD every frame
   */
  updateHUD(dynamics, mission, dt) {
    // 1. Digital Speed & RPM
    const kmh = Math.round(Math.abs(dynamics.speedKmh));
    if (this.elements.speedValue) this.elements.speedValue.textContent = `${kmh}`;
    if (this.elements.rpmValue) this.elements.rpmValue.textContent = `${Math.round(dynamics.rpm)}`;

    // 2. Analog Needles Rotation (Calibrated 0-100 km/h)
    if (this.elements.speedNeedle) {
      const speedNorm = Math.min(1.0, kmh / 100);
      const angleDeg = -125 + speedNorm * 250;
      this.elements.speedNeedle.style.transform = `rotate(${angleDeg}deg)`;
    }

    if (this.elements.rpmNeedle) {
      const rpmNorm = Math.min(1.0, dynamics.rpm / 8000);
      const angleDeg = -125 + rpmNorm * 250;
      this.elements.rpmNeedle.style.transform = `rotate(${angleDeg}deg)`;
    }

    // 3. Gear Display & Selector Gate Highlight
    const activeGear = dynamics.gear;
    if (this.elements.gearIndicator) {
      this.elements.gearIndicator.textContent = activeGear === 'D' ? `D${dynamics.autoGear}` : activeGear;
    }

    const gears = ['P', 'R', 'N', 'D'];
    gears.forEach((g) => {
      const btn = this.elements[`gear${g}`];
      if (btn) {
        btn.classList.toggle('active', activeGear === g);
      }
    });

    // 4. Fuel & ECO Light
    if (this.elements.fuelBarFill) {
      this.elements.fuelBarFill.style.width = `${Math.max(0, Math.min(100, dynamics.fuel))}%`;
    }

    if (this.elements.ecoIndicator) {
      if (dynamics.rpm < 3200) {
        this.elements.ecoIndicator.className = 'eco-badge eco-optimal';
        this.elements.ecoIndicator.textContent = 'ECO OPTIMAL';
      } else if (dynamics.rpm < 5200) {
        this.elements.ecoIndicator.className = 'eco-badge eco-warning';
        this.elements.ecoIndicator.textContent = 'ECO MODERATE';
      } else {
        this.elements.ecoIndicator.className = 'eco-badge eco-alert';
        this.elements.ecoIndicator.textContent = 'HIGH RPM DRAIN!';
      }
    }

    // 5. Turn signals blinking
    const blinkPhase = Math.floor(performance.now() / 350) % 2 === 0;
    const isLeft = dynamics.turnSignal === 'left' || dynamics.turnSignal === 'hazard';
    const isRight = dynamics.turnSignal === 'right' || dynamics.turnSignal === 'hazard';

    if (this.elements.signalLeft) {
      this.elements.signalLeft.classList.toggle('active', isLeft && blinkPhase);
    }
    if (this.elements.signalRight) {
      this.elements.signalRight.classList.toggle('active', isRight && blinkPhase);
    }

    // 6. Coins
    if (this.elements.coinCounter) {
      this.elements.coinCounter.textContent = mission.coins;
    }

    // 7. Dynamic Task Management Header
    const curMission = mission.getCurrentMission();
    if (this.elements.levelTitle) {
      this.elements.levelTitle.textContent = `LVL ${mission.currentLevel}: ${curMission.title}`;
    }

    if (this.elements.levelDiffTag) {
      this.elements.levelDiffTag.textContent = curMission.difficulty;
      this.elements.levelDiffTag.style.background = curMission.difficultyColor || '#00ff88';
    }

    // Real-time Objective Progress Bar
    if (this.elements.progressBar) {
      this.elements.progressBar.style.width = `${Math.max(0, Math.min(100, mission.progressPercent))}%`;
    }

    // Objective Status Metric Text
    if (this.elements.levelMetric) {
      this.elements.levelMetric.textContent = mission.progressText;
    }

    // Live Accumulated Score
    if (this.elements.liveScoreVal) {
      this.elements.liveScoreVal.textContent = `⭐ ${mission.liveScore.toLocaleString()} PTS`;
    }

    // 8. Warning Banner & Driver Assistance Prompts
    if (this.elements.warningBanner) {
      if (mission.warningBanner && mission.levelState === 'playing') {
        this.elements.warningBanner.textContent = mission.warningBanner;
        this.elements.warningBanner.classList.remove('hidden');
        this.elements.warningBanner.classList.toggle('info-style', mission.warningBanner.startsWith('💡'));
      } else {
        this.elements.warningBanner.classList.add('hidden');
      }
    }

    // Auto-hide briefing card when car starts driving
    if (mission.levelState === 'playing' && Math.abs(dynamics.speed) > 0.4) {
      this.hideBriefing();
    }
  }

  /**
   * Render dynamic top-down radar minimap
   */
  renderRadar(dynamics, trafficAI, cityGrid) {
    if (!this.radarCtx || !this.radarCanvas) return;
    const ctx = this.radarCtx;
    const w = this.radarCanvas.width;
    const h = this.radarCanvas.height;
    const cx = w / 2;
    const cy = h / 2;

    ctx.clearRect(0, 0, w, h);

    // Radar background
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.beginPath();
    ctx.arc(cx, cy, cx - 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#38bdf8';
    ctx.stroke();

    // Radar grid range circles
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, cx * 0.45, 0, Math.PI * 2);
    ctx.arc(cx, cy, cx * 0.8, 0, Math.PI * 2);
    ctx.stroke();

    ctx.save();
    // Clip drawing strictly inside circular radar screen
    ctx.beginPath();
    ctx.arc(cx, cy, cx - 3, 0, Math.PI * 2);
    ctx.clip();

    ctx.translate(cx, cy);
    ctx.rotate(dynamics.heading);

    const scale = 1.15; // 1 meter = 1.15 radar pixels
    const toScreenX = (wx) => (wx - dynamics.x) * scale;
    const toScreenY = (wz) => (wz - dynamics.z) * scale;

    const crossroadZs = (cityGrid && cityGrid.crossroadZs) ? cityGrid.crossroadZs : [-80, -280, -530, -750, -980];

    // 1. Road Asphalt Surfaces (Main Boulevard, Crossroads, Side Avenues)
    ctx.fillStyle = 'rgba(30, 41, 59, 0.75)';

    // Main Boulevard (-10 to +10, Z: -1060 to 60)
    ctx.fillRect(toScreenX(-10), toScreenY(-1060), 20 * scale, 1120 * scale);

    // Parallel Side Avenues (West: -93 to -77, East: 77 to 93)
    ctx.fillRect(toScreenX(-93), toScreenY(-1060), 16 * scale, 1120 * scale);
    ctx.fillRect(toScreenX(77), toScreenY(-1060), 16 * scale, 1120 * scale);

    // 5 Crossroad Avenues (Width 18m, X: -130 to 130)
    crossroadZs.forEach((cz) => {
      ctx.fillRect(toScreenX(-130), toScreenY(cz - 9), 260 * scale, 18 * scale);
    });

    // 2. Yellow Centerlines
    ctx.strokeStyle = 'rgba(255, 204, 0, 0.55)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();

    // Main Boulevard Centerline
    ctx.moveTo(toScreenX(0), toScreenY(-1060));
    ctx.lineTo(toScreenX(0), toScreenY(60));

    // Parallel Side Avenues
    ctx.moveTo(toScreenX(-85), toScreenY(-1060));
    ctx.lineTo(toScreenX(-85), toScreenY(60));
    ctx.moveTo(toScreenX(85), toScreenY(-1060));
    ctx.lineTo(toScreenX(85), toScreenY(60));

    // Crossroad Centerlines
    crossroadZs.forEach((cz) => {
      ctx.moveTo(toScreenX(-130), toScreenY(cz));
      ctx.lineTo(toScreenX(130), toScreenY(cz));
    });
    ctx.stroke();
    ctx.setLineDash([]); // Reset dash

    // 3. Road Curbs & Open Turning Intersection Mouths
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    const curbSegments = [
      { startZ: 60,   endZ: -69 },
      { startZ: -91,  endZ: -269 },
      { startZ: -291, endZ: -519 },
      { startZ: -541, endZ: -739 },
      { startZ: -761, endZ: -969 },
      { startZ: -991, endZ: -1060 }
    ];

    // Main Boulevard Curb Segments (open at intersections)
    curbSegments.forEach((seg) => {
      ctx.moveTo(toScreenX(-10), toScreenY(seg.startZ));
      ctx.lineTo(toScreenX(-10), toScreenY(seg.endZ));
      ctx.moveTo(toScreenX(10), toScreenY(seg.startZ));
      ctx.lineTo(toScreenX(10), toScreenY(seg.endZ));
    });

    // Crossroad Curb Segments
    crossroadZs.forEach((cz) => {
      const topZ = cz - 9;
      const botZ = cz + 9;
      // West crossroad curbs
      ctx.moveTo(toScreenX(-130), toScreenY(topZ));
      ctx.lineTo(toScreenX(-10), toScreenY(topZ));
      ctx.moveTo(toScreenX(-130), toScreenY(botZ));
      ctx.lineTo(toScreenX(-10), toScreenY(botZ));

      // East crossroad curbs
      ctx.moveTo(toScreenX(10), toScreenY(topZ));
      ctx.lineTo(toScreenX(130), toScreenY(topZ));
      ctx.moveTo(toScreenX(10), toScreenY(botZ));
      ctx.lineTo(toScreenX(130), toScreenY(botZ));
    });
    ctx.stroke();

    // 4. Mission Milestones & Gantries
    // 500m Sprint Checkpoint (Z = -480)
    ctx.strokeStyle = '#00e5ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(toScreenX(-10), toScreenY(-480));
    ctx.lineTo(toScreenX(10), toScreenY(-480));
    ctx.stroke();

    // 750m U-turn Zone (Z = -730)
    ctx.strokeStyle = '#ffaa00';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(toScreenX(-10), toScreenY(-730));
    ctx.lineTo(toScreenX(10), toScreenY(-730));
    ctx.stroke();

    // 1km Grand Terminal Finish Line (Z = -980)
    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(toScreenX(-10), toScreenY(-980));
    ctx.lineTo(toScreenX(10), toScreenY(-980));
    ctx.stroke();

    // 5. Target Parking Bays
    const bays = [];
    if (cityGrid && cityGrid.parkingBay) bays.push(cityGrid.parkingBay);
    if (cityGrid && cityGrid.terminalParkingBay) bays.push(cityGrid.terminalParkingBay);

    bays.forEach((pBay) => {
      const bx = toScreenX(pBay.centerX);
      const bz = toScreenY(pBay.centerZ);
      ctx.fillStyle = 'rgba(0, 255, 136, 0.45)';
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.strokeRect(bx - 12, bz - 16, 24, 32);
      ctx.fillRect(bx - 12, bz - 16, 24, 32);
    });

    // 6. AI Traffic Vehicles (Red dots with forward direction needles)
    if (trafficAI && trafficAI.vehicles) {
      trafficAI.vehicles.forEach((v) => {
        if (v.isActive === false) return;
        const vx = toScreenX(v.x);
        const vz = toScreenY(v.z);

        if (Math.hypot(vx, vz) < cx - 6) {
          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          ctx.arc(vx, vz, 3.5, 0, Math.PI * 2);
          ctx.fill();

          const dirLen = 5.0;
          const headX = vx + Math.sin(v.heading || 0) * dirLen;
          const headZ = vz - Math.cos(v.heading || 0) * dirLen;
          ctx.strokeStyle = '#fca5a5';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(vx, vz);
          ctx.lineTo(headX, headZ);
          ctx.stroke();
        }
      });
    }

    ctx.restore();

    // 7. North Compass Indicator on Radar Rim
    const nR = cx - 9;
    const nx = cx + Math.sin(-dynamics.heading) * nR;
    const ny = cy - Math.cos(-dynamics.heading) * nR;
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 9px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', nx, ny);

    // 8. Draw Player Car Arrow (Centered, pointing UP)
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(6, 7);
    ctx.lineTo(0, 4);
    ctx.lineTo(-6, 7);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }

  getShakeOffset(dt) {
    if (this.shakeIntensity > 0.01) {
      const ox = (Math.random() - 0.5) * this.shakeIntensity * 0.15;
      const oy = (Math.random() - 0.5) * this.shakeIntensity * 0.15;
      this.shakeIntensity = Math.max(0, this.shakeIntensity - this.shakeDecay * dt);
      return { x: ox, y: oy };
    }
    return { x: 0, y: 0 };
  }
}
