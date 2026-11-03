/**
 * MissionManager.js - Dr. Driving Progression, Task Management & Scoring Engine
 * 
 * 5 Progressive Missions:
 * - Mission 1: The Basics (Straight Sprint) - 500m straight sprint (45s limit, speed in 80-90 km/h)
 * - Mission 2: City Navigation (Turns & Handling) - 750m course: 300m straight -> 90° Left Turn -> 250m -> U-turn pocket -> 200m finish
 * - Mission 3: Precision Arrival (Drive & Park) - 1km course leading to outdoor parking bay (±5° alignment, P, handbrake 2s)
 * - Mission 4: Rush Hour (High-Density Traffic) - 1km heavy arterial traffic, safe following distances, 0 collisions, 0 red light violations
 * - Mission 5: The Ultimate Test (Complex Route + Heavy Traffic + Parking) - Rush hour -> Left turn -> Blind Right turn -> 150m -> Alley right -> U-turn loop -> Crowded garage bay (±5° alignment, P, handbrake 2s)
 */

export class MissionManager {
  constructor() {
    this.currentLevel = 1;
    this.levelState = 'menu'; // 'menu', 'briefing', 'playing', 'passed', 'failed'
    this.failReason = '';
    this.failTip = '';

    // Active Mission Tracking
    this.elapsedTime = 0.0;
    this.timeLimit = 45.0;
    this.progressPercent = 0;
    this.progressText = '';
    this.warningBanner = null;
    this.warningTimer = 0;
    this.briefingTimer = 0;

    // Granular Score Accumulators
    this.liveScore = 0;
    this.smoothPoints = 0;
    this.cleanDrive = true;
    this.infractionsCount = 0;
    this.techniquePoints = 0;

    // Mission State Machines & Latch Timers
    this.parkHoldTimer = 0.0;
    this.mission2Phase = 0;
    this.mission5Phase = 0;

    // Persistent Player Stats
    this.coins = 500;
    this.unlockedLevels = 1;
    this.levelStats = {}; // { [levelId]: { stars: 0, highScore: 0, completions: 0 } }

    this.loadProgress();

    // Mission Metadata Catalog
    this.missions = [
      {
        id: 1,
        title: 'The Basics (Straight Sprint)',
        subtitle: '500M SPRINT & LANE STABILITY',
        difficulty: 'BEGINNER',
        difficultyColor: '#00ff88',
        description: 'Sprint 500m along the wide boulevard. Reach the 500m checkpoint marker within 45s while keeping the vehicle stable at 80-90 km/h.',
        tip: 'Shift into D (Key 4 or tap D), accelerate to 80-90 km/h, and keep your steering steady in the marked lane.',
        reward: 350,
        timeLimit: 45.0,
        distance: 500.0,
        startX: -5.0,
        startZ: 20.0,
        startHeading: 0,
        targetZ: -480.0
      },
      {
        id: 2,
        title: 'City Navigation (Turns & Handling)',
        subtitle: '300M RUN • 90° LEFT TURN • U-TURN',
        difficulty: 'MODERATE',
        difficultyColor: '#00e5ff',
        description: 'Drive 300m straight, make a 90° Left Turn at the signalized intersection, navigate 250m, complete the U-turn without reversing, and sprint to the finish.',
        tip: 'Brake before the intersection mouth, execute a clean 90° left turn, and steer smoothly around the U-turn divider.',
        reward: 550,
        timeLimit: 70.0,
        distance: 750.0,
        startX: -5.0,
        startZ: 20.0,
        startHeading: 0,
        targetZ: -730.0
      },
      {
        id: 3,
        title: 'Precision Arrival (Drive & Park)',
        subtitle: '1KM CRUISE • PRECISION BAY PARKING',
        difficulty: 'INTERMEDIATE',
        difficultyColor: '#ffaa00',
        description: 'Drive the 1km course following navigation waypoints. Pull into the designated parking bay, center vehicle within ±5°, shift into P, and engage handbrake for 2 seconds.',
        tip: 'Follow waypoints to the parking bay. Align straight between lines, come to a dead stop, shift to P and hold handbrake (Space) for 2s.',
        reward: 800,
        timeLimit: 85.0,
        distance: 1000.0,
        startX: -5.0,
        startZ: 20.0,
        startHeading: 0,
        targetZ: -980.0
      },
      {
        id: 4,
        title: 'Rush Hour (High-Density Traffic)',
        subtitle: '1KM HIGHWAY WEAVE • ZERO CRASHES',
        difficulty: 'ADVANCED',
        difficultyColor: '#c084fc',
        description: 'Navigate 1km of heavy arterial traffic with variable speeds, sudden braking, and lane-cutters. Cross the 1km finish line with safe following distances and zero red lights.',
        tip: 'Watch brake lights ahead! Maintain safe stopping distance, overtake on open lanes, and obey red traffic signals.',
        reward: 1100,
        timeLimit: 90.0,
        distance: 1000.0,
        startX: -5.0,
        startZ: 20.0,
        startHeading: 0,
        targetZ: -980.0
      },
      {
        id: 5,
        title: 'The Ultimate Test (Complex Route)',
        subtitle: 'HEAVY TRAFFIC • BLIND TURNS • PRECISION PARK',
        difficulty: 'EXPERT',
        difficultyColor: '#ff3366',
        description: 'The master exam: heavy traffic sprint -> 90° Left Turn -> immediate blind Right Turn -> 150m straight -> sharp Right into alley -> tight U-turn loop -> precision park in crowded garage bay (P + 2s handbrake).',
        tip: 'Follow turn prompts in exact sequence without missing waypoints. Park centered within ±5° in P with handbrake for 2s.',
        reward: 1600,
        timeLimit: 110.0,
        distance: 1150.0,
        startX: -5.0,
        startZ: 20.0,
        startHeading: 0,
        targetZ: -980.0
      }
    ];
  }

  resetToFirstLevel() {
    this.currentLevel = 1;
    this.unlockedLevels = 1;
    this.levelStats = {};
    try {
      localStorage.removeItem('dr_driving_unlocked');
      localStorage.removeItem('dr_driving_v2_stats');
      sessionStorage.removeItem('dr_driving_unlocked');
      sessionStorage.removeItem('dr_driving_v2_stats');
    } catch (e) {
      console.warn('Could not reset level progress:', e);
    }
  }

  loadProgress() {
    try {
      const savedCoins = localStorage.getItem('dr_driving_coins');
      if (savedCoins !== null) this.coins = parseInt(savedCoins, 10);

      // On every browser refresh, always start clean from the first level
      this.resetToFirstLevel();
    } catch (e) {
      console.warn('Could not load progress:', e);
    }
  }

  saveProgress() {
    try {
      localStorage.setItem('dr_driving_coins', this.coins.toString());
      // Save level progress only for the current active browser session
      sessionStorage.setItem('dr_driving_unlocked', this.unlockedLevels.toString());
      sessionStorage.setItem('dr_driving_v2_stats', JSON.stringify(this.levelStats));
    } catch (e) {
      console.warn('Could not save progress:', e);
    }
  }

  getLevelStats(levelId) {
    return this.levelStats[levelId] || { stars: 0, highScore: 0, completions: 0 };
  }

  startMission(levelId, vehicleDynamics) {
    this.currentLevel = Math.max(1, Math.min(this.missions.length, levelId));
    this.levelState = 'briefing';
    this.briefingTimer = 3.5;
    this.failReason = '';
    this.failTip = '';

    const mission = this.getCurrentMission();
    vehicleDynamics.reset(mission.startX, mission.startZ, mission.startHeading);

    // Reset Time & Tracking
    this.elapsedTime = 0.0;
    this.timeLimit = mission.timeLimit || 45.0;
    this.progressPercent = 0;
    this.progressText = 'Starting...';
    this.warningBanner = null;
    this.warningTimer = 0;

    // Reset Score Accumulators
    this.liveScore = 0;
    this.smoothPoints = 0;
    this.cleanDrive = true;
    this.infractionsCount = 0;
    this.techniquePoints = 0;

    // Reset Latch Timers & Route Phase State Machines
    this.parkHoldTimer = 0.0;
    this.mission2Phase = 0;
    this.mission5Phase = 0;

    vehicleDynamics.fuel = 100.0;
  }

  /**
   * Main mission logic update executed every frame
   * @param {number} dt delta time in seconds
   * @param {VehiclePhysics} dynamics
   * @param {CityBuilder} cityGrid
   */
  update(dt, dynamics, cityGrid) {
    if (this.levelState === 'briefing') {
      this.briefingTimer -= dt;
      if (this.briefingTimer <= 0 || Math.abs(dynamics.speed) > 0.5) {
        this.levelState = 'playing';
      }
    }

    if (this.levelState !== 'playing') return;

    this.elapsedTime += dt;
    const timeLeft = Math.max(0, this.timeLimit - this.elapsedTime);

    // Global Time-Out Fail
    if (timeLeft <= 0) {
      this.failMission(
        'TIME EXPIRED! The clock ran out before completing the objective.',
        'Coach Tip: Maintain a swift cruising speed between 80-90 km/h and minimize unnecessary stops.'
      );
      return;
    }

    // Accumulate smooth driving points
    if (Math.abs(dynamics.speedKmh) > 15.0) {
      const steeringSmoothness = 1.0 - Math.min(1.0, Math.abs(dynamics.steerAngle) * 1.5);
      this.smoothPoints += dt * 15.0 * steeringSmoothness;
    }

    this.warningBanner = null;

    // ========================================================
    // MISSION 1: THE BASICS (STRAIGHT SPRINT) - 500m
    // ========================================================
    if (this.currentLevel === 1) {
      const startZ = this.missions[0].startZ; // 20.0
      const targetZ = this.missions[0].targetZ; // -480.0 (500m sprint)
      const totalDistance = 500.0;
      const distanceTraveled = Math.max(0, Math.min(totalDistance, startZ - dynamics.z));

      this.progressPercent = Math.min(100, Math.round((distanceTraveled / totalDistance) * 100));
      this.progressText = `${Math.round(distanceTraveled)}m / 500m (${this.progressPercent}%)`;

      // Reward cruising at 80-90 km/h
      const kmh = Math.abs(dynamics.speedKmh);
      if (kmh >= 75.0 && kmh <= 90.0) {
        this.techniquePoints += dt * 25.0;
      }

      this.liveScore = Math.round(distanceTraveled * 4 + this.smoothPoints + this.techniquePoints);

      // Reached 500m checkpoint!
      if (dynamics.z <= targetZ) {
        this.completeMission();
        return;
      }

      // Guidance prompts
      if (dynamics.gear === 'P' || dynamics.gear === 'N') {
        this.warningBanner = '💡 SHIFT TO "D" (Key 4 or tap D) TO ACCELERATE';
      } else if (kmh < 10.0 && this.elapsedTime > 2.5) {
        this.warningBanner = '💡 ACCELERATE FORWARD! REACH 80-90 KM/H';
      } else if (kmh >= 78.0 && kmh <= 90.0) {
        this.warningBanner = '⚡ OPTIMAL SPEED: 80-90 KM/H! HOLD LANE STEADY';
      }
    }

    // ========================================================
    // MISSION 2: CITY NAVIGATION (TURNS & HANDLING) - 750m
    // ========================================================
    else if (this.currentLevel === 2) {
      const startZ = 20.0;
      const totalDistance = 750.0;
      const distanceTraveled = Math.max(0, Math.min(totalDistance, startZ - dynamics.z));

      this.progressPercent = Math.min(100, Math.round((distanceTraveled / totalDistance) * 100));

      // Phase 0: Initial 300m straight segment (Z: 20 -> -280)
      if (this.mission2Phase === 0) {
        const distToTurn = Math.max(0, Math.round(dynamics.z - (-280)));
        this.progressText = `APPROACHING TURN: ${distToTurn}m`;

        if (distToTurn < 60) {
          this.warningBanner = '⬅️ PREPARE TO BRAKE: 90° LEFT TURN IN 50M!';
        }

        // Trigger turn when entering intersection at Z = -280
        if (dynamics.z <= -270) {
          this.mission2Phase = 1;
          this.techniquePoints += 150;
        }
      }
      // Phase 1: 90° Left Turn into crossroad
      else if (this.mission2Phase === 1) {
        this.warningBanner = '⬅️ TURN LEFT SMOOTHLY INTO CROSSROAD AVENUE';
        this.progressText = 'EXECUTING 90° LEFT TURN';

        // Check if car turned left (heading or X displacement)
        if (dynamics.x <= -16.0 || Math.abs(dynamics.heading) > 1.1) {
          this.mission2Phase = 2;
          this.techniquePoints += 250;
        }
      }
      // Phase 2: 250m straight stretch along avenue
      else if (this.mission2Phase === 2) {
        this.warningBanner = '⬆️ 250M STRAIGHT STRETCH: ACCELERATE TOWARDS U-TURN';
        this.progressText = 'NAVIGATING 250M STRETCH';

        // Car continues to U-turn pocket (Z <= -700)
        if (dynamics.z <= -700) {
          this.mission2Phase = 3;
          this.techniquePoints += 200;
        }
      }
      // Phase 3: Dedicated U-turn pocket
      else if (this.mission2Phase === 3) {
        this.warningBanner = '🔄 ENTER U-TURN POCKET: EXECUTE 180° TURN WITHOUT REVERSING';
        this.progressText = 'EXECUTING U-TURN';

        // Car loops around or completes turn
        if (dynamics.z <= -720) {
          this.mission2Phase = 4;
          this.techniquePoints += 300;
        }
      }
      // Phase 4: Final 200m stretch to finish zone
      else {
        this.warningBanner = '🏁 FINAL SPRINT! ACCELERATE TO THE 750M FINISH LINE';
        this.progressText = 'SPRINTING TO 750M FINISH';

        if (dynamics.z <= -730.0) {
          this.completeMission();
          return;
        }
      }

      this.liveScore = Math.round(distanceTraveled * 3 + this.smoothPoints + this.techniquePoints);
    }

    // ========================================================
    // MISSION 3: PRECISION ARRIVAL (DRIVE & PARK) - 1KM
    // ========================================================
    else if (this.currentLevel === 3) {
      const bay = cityGrid.terminalParkingBay || cityGrid.parkingBay;
      const targetZ = -980.0;
      const totalDistance = 1000.0;
      const distTraveled = Math.max(0, Math.min(totalDistance, 20.0 - dynamics.z));
      const distToBay = bay ? Math.hypot(dynamics.x - bay.centerX, dynamics.z - bay.centerZ) : 999;

      this.liveScore = Math.round(distTraveled * 3 + this.smoothPoints + this.techniquePoints);

      if (distToBay > 35.0) {
        // En route along 1km highway
        this.progressPercent = Math.min(85, Math.round((distTraveled / totalDistance) * 85));
        this.progressText = `WAYPOINT: ${Math.round(distToBay)}m TO PARKING BAY`;
      } else {
        // In or near the parking bay
        const dx = Math.abs(dynamics.x - bay.centerX);
        const dz = Math.abs(dynamics.z - bay.centerZ);
        const insideBox = dx < (bay.width * 0.6) && dz < (bay.length * 0.55);

        // Alignment angle tolerance: ±5 degrees (5 * PI / 180 = 0.087 rad)
        let angleDiff = Math.abs(dynamics.heading - bay.targetHeading) % (Math.PI * 2);
        if (angleDiff > Math.PI) angleDiff = Math.PI * 2 - angleDiff;
        const angleDeg = (angleDiff * 180 / Math.PI).toFixed(1);
        const isAligned = angleDiff <= (7.0 * Math.PI / 180); // ~5-7 deg tolerance

        const isStopped = Math.abs(dynamics.speed) < 0.1;
        const isShiftedToP = dynamics.gear === 'P';
        const isHandbrake = dynamics.isEBrakeActive || isShiftedToP;

        if (insideBox) {
          if (!isAligned) {
            this.parkHoldTimer = 0.0;
            this.warningBanner = `🅿️ STRAIGHTEN CAR! CURRENT ANGLE: ${angleDeg}° (NEED ±5°)`;
            this.progressText = `ALIGNMENT: ${angleDeg}° / ±5°`;
          } else if (!isStopped) {
            this.parkHoldTimer = 0.0;
            this.warningBanner = '🅿️ ALIGNED! COME TO A COMPLETE STOP';
            this.progressText = 'STOP VEHICLE';
          } else if (!isShiftedToP) {
            this.parkHoldTimer = 0.0;
            this.warningBanner = '✅ STOPPED! SHIFT INTO "P" (Key 1 or tap P)';
            this.progressText = 'SHIFT TO P';
          } else if (!isHandbrake) {
            this.parkHoldTimer = 0.0;
            this.warningBanner = '🅿️ ENGAGE HANDBRAKE (Spacebar)';
            this.progressText = 'ENGAGE HANDBRAKE';
          } else {
            // All 4 conditions met: Inside + ±5° Aligned + Stopped + P + Handbrake!
            // Hold for 2.0 seconds continuous!
            this.parkHoldTimer += dt;
            const holdProgress = Math.min(2.0, this.parkHoldTimer);
            this.warningBanner = `🅿️ HOLDING IN P & HANDBRAKE: ${holdProgress.toFixed(1)}s / 2.0s`;
            this.progressText = `LATCHING: ${(holdProgress / 2.0 * 100).toFixed(0)}%`;
            this.progressPercent = 90 + Math.round((holdProgress / 2.0) * 10);

            if (this.parkHoldTimer >= 2.0) {
              this.techniquePoints += 500;
              this.completeMission();
              return;
            }
          }
        } else {
          this.parkHoldTimer = 0.0;
          this.warningBanner = '🅿️ PULL INTO MARKED GREEN PARKING BAY';
          this.progressText = `DISTANCE TO BAY: ${distToBay.toFixed(1)}m`;
          this.progressPercent = 80;
        }
      }
    }

    // ========================================================
    // MISSION 4: RUSH HOUR (HIGH-DENSITY TRAFFIC) - 1KM
    // ========================================================
    else if (this.currentLevel === 4) {
      // Red light check
      if (cityGrid.checkRedLightViolation(dynamics)) {
        this.failMission(
          'RED LIGHT VIOLATION! You ran through an active red traffic light during rush hour.',
          'Coach Tip: Watch the overhead signals. When light turns yellow, brake early before the crosswalk.'
        );
        return;
      }

      const startZ = 20.0;
      const targetZ = -980.0; // 1km finish line
      const totalDistance = 1000.0;
      const distTraveled = Math.max(0, Math.min(totalDistance, startZ - dynamics.z));
      const distRemaining = Math.max(0, Math.round(dynamics.z - targetZ));

      this.progressPercent = Math.min(100, Math.round((distTraveled / totalDistance) * 100));
      this.progressText = `FINISH: ${distRemaining}m | TRAFFIC: HEAVY`;

      // Safe following distance and overtaking rewards
      if (Math.abs(dynamics.speedKmh) > 40.0) {
        this.techniquePoints += dt * 25.0;
      }

      this.liveScore = Math.round(distTraveled * 3 + this.smoothPoints + this.techniquePoints);

      // Successfully crossed 1km finish line!
      if (dynamics.z <= targetZ) {
        this.completeMission();
        return;
      }
    }

    // ========================================================
    // MISSION 5: THE ULTIMATE TEST (COMPLEX ROUTE + TRAFFIC + PARK)
    // ========================================================
    else if (this.currentLevel === 5) {
      const bay = cityGrid.terminalParkingBay || cityGrid.parkingBay;
      const kmh = Math.abs(dynamics.speedKmh);

      // Phase 0: 3-Lane Rush Hour Start
      if (this.mission5Phase === 0) {
        this.warningBanner = '🚦 RUSH HOUR START: SPRINT FORWARD (LEFT TURN IN 70M)';
        this.progressText = 'STEP 1/6: RUSH HOUR SPRINT';
        if (dynamics.z <= -60) {
          this.mission5Phase = 1;
          this.techniquePoints += 150;
        }
      }
      // Phase 1: Mandatory Left Turn into tight two-way street at Z = -80
      else if (this.mission5Phase === 1) {
        this.warningBanner = '⬅️ MANDATORY LEFT TURN: TURN INTO TWO-WAY STREET';
        this.progressText = 'STEP 2/6: 90° LEFT TURN';
        if (dynamics.x <= -18.0) {
          this.mission5Phase = 2;
          this.techniquePoints += 200;
        }
      }
      // Phase 2: Immediate Right Turn at unsignalized blind junction
      else if (this.mission5Phase === 2) {
        this.warningBanner = '➡️ BLIND JUNCTION: IMMEDIATE RIGHT TURN!';
        this.progressText = 'STEP 3/6: BLIND RIGHT TURN';
        if (dynamics.z <= -160.0 || dynamics.x > -14.0) {
          this.mission5Phase = 3;
          this.techniquePoints += 250;
        }
      }
      // Phase 3: 150m straight stretch along service road
      else if (this.mission5Phase === 3) {
        this.warningBanner = '⬆️ FOLLOW SERVICE ROAD 150M TOWARDS ALLEYWAY';
        this.progressText = 'STEP 4/6: 150M SERVICE ROAD';
        if (dynamics.z <= -340.0) {
          this.mission5Phase = 4;
          this.techniquePoints += 250;
        }
      }
      // Phase 4: Sharp Right Turn into alley & turnaround loop
      else if (this.mission5Phase === 4) {
        this.warningBanner = '🔄 ENTER NARROW ALLEY & EXECUTE TIGHT U-TURN LOOP';
        this.progressText = 'STEP 5/6: U-TURN LOOP';
        if (dynamics.z <= -600.0) {
          this.mission5Phase = 5;
          this.techniquePoints += 300;
        }
      }
      // Phase 5: Enter crowded parking garage/lot bay
      else {
        this.progressText = 'STEP 6/6: PRECISION PARKING';
        const distToBay = bay ? Math.hypot(dynamics.x - bay.centerX, dynamics.z - bay.centerZ) : 999;

        if (distToBay > 30.0) {
          this.warningBanner = '🅿️ ENTER COMMERCIAL PARKING LOT';
        } else {
          const dx = Math.abs(dynamics.x - bay.centerX);
          const dz = Math.abs(dynamics.z - bay.centerZ);
          const insideBox = dx < (bay.width * 0.6) && dz < (bay.length * 0.55);

          let angleDiff = Math.abs(dynamics.heading - bay.targetHeading) % (Math.PI * 2);
          if (angleDiff > Math.PI) angleDiff = Math.PI * 2 - angleDiff;
          const isAligned = angleDiff <= (7.0 * Math.PI / 180);
          const isStopped = Math.abs(dynamics.speed) < 0.1;
          const isShiftedToP = dynamics.gear === 'P';
          const isHandbrake = dynamics.isEBrakeActive || isShiftedToP;

          if (insideBox) {
            if (!isAligned) {
              this.parkHoldTimer = 0.0;
              this.warningBanner = '🅿️ STRAIGHTEN CAR WITHIN ±5° OF BAY LINES';
            } else if (!isStopped) {
              this.parkHoldTimer = 0.0;
              this.warningBanner = '🅿️ ALIGNED! COME TO A FULL STOP';
            } else if (!isShiftedToP) {
              this.parkHoldTimer = 0.0;
              this.warningBanner = '✅ SHIFT INTO "P" (Key 1 or tap P)';
            } else if (!isHandbrake) {
              this.parkHoldTimer = 0.0;
              this.warningBanner = '🅿️ ENGAGE HANDBRAKE (Spacebar)';
            } else {
              this.parkHoldTimer += dt;
              const holdProgress = Math.min(2.0, this.parkHoldTimer);
              this.warningBanner = `🅿️ HOLDING IN P & HANDBRAKE: ${holdProgress.toFixed(1)}s / 2.0s`;

              if (this.parkHoldTimer >= 2.0) {
                this.techniquePoints += 800;
                this.completeMission();
                return;
              }
            }
          } else {
            this.parkHoldTimer = 0.0;
            this.warningBanner = '🅿️ PULL INTO THE MARKED PARKING BAY';
          }
        }
      }

      this.progressPercent = Math.min(100, Math.round((this.mission5Phase / 5) * 100));
      this.liveScore = Math.round(this.mission5Phase * 300 + this.smoothPoints + this.techniquePoints);
    }
  }

  completeMission() {
    this.levelState = 'passed';
    const mission = this.getCurrentMission();

    // 1. Calculate Score Breakdown
    const baseScore = 1000;
    const timeLeft = Math.max(0, this.timeLimit - this.elapsedTime);
    const timeBonus = Math.round(timeLeft * 25.0);
    const cleanBonus = this.cleanDrive ? 600 : 0;
    const smoothBonus = Math.round(this.smoothPoints);
    const techBonus = Math.round(this.techniquePoints);

    const totalScore = baseScore + timeBonus + cleanBonus + smoothBonus + techBonus;

    // 2. Determine Star Rating (1 to 3 Stars)
    let stars = 1;
    if (totalScore >= 2400) {
      stars = 3;
    } else if (totalScore >= 1600) {
      stars = 2;
    }

    // 3. Coins Earned with Star Multiplier
    const starMultiplier = 1.0 + (stars - 1) * 0.35;
    const coinsEarned = Math.round(mission.reward * starMultiplier);
    this.coins += coinsEarned;

    // 4. Update High Scores & Stars Record
    const prevStats = this.getLevelStats(this.currentLevel);
    const isNewHighScore = totalScore > (prevStats.highScore || 0);
    const newStars = Math.max(prevStats.stars || 0, stars);

    this.levelStats[this.currentLevel] = {
      stars: newStars,
      highScore: Math.max(prevStats.highScore || 0, totalScore),
      completions: (prevStats.completions || 0) + 1
    };

    // 5. Unlock Next Level
    if (this.currentLevel < this.missions.length && this.unlockedLevels <= this.currentLevel) {
      this.unlockedLevels = this.currentLevel + 1;
    }

    this.saveProgress();

    this.lastResult = {
      baseScore,
      timeBonus,
      cleanBonus,
      smoothBonus,
      techBonus,
      totalScore,
      stars,
      coinsEarned,
      isNewHighScore,
      timeRemaining: timeLeft
    };

    return this.lastResult;
  }

  failMission(reason, coachTip) {
    this.levelState = 'failed';
    this.failReason = reason || 'COLLISION! Vehicle damaged.';
    this.failTip = coachTip || 'Keep your steering smooth and maintain safe stopping distances.';
    this.cleanDrive = false;
    this.infractionsCount++;
  }

  getCurrentMission() {
    return this.missions[this.currentLevel - 1] || this.missions[0];
  }
}
