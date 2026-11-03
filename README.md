# Dr. Driving: Gesture Edition 🏎️
### High-Performance 3D Web Game with Pure Ackermann Kinematics & Real-Time Hand Tracking

Built with **Vite**, **Three.js**, and **Google MediaPipe Tasks Vision (`HandLandmarker`)**.

---

## 🚀 Engine Architecture & Performance Highlights

1. **Decoupled Render & Vision Loops (Solid 60+ FPS)**:
   - **Three.js Render Loop**: Runs at the native screen refresh rate via `requestAnimationFrame` driven by `THREE.Clock` delta-time (`dt = clock.getDelta()`).
   - **Asynchronous Vision Inference Loop**: Executes decoupled via `video.requestVideoFrameCallback` (or throttled 30 Hz timer), completely isolating heavy ML inference from the WebGL graphics loop.
   - **Stats.js Profiling**: Real-time FPS and MS frame-time graphs in the top-left corner.

2. **Rigid Hand Tracking Calibration**:
   - **Angle Calculation**: Tracks Landmark 9 (MCP) of both Left and Right hands:
     $$\theta = \text{atan2}(R_y - L_y, R_x - L_x)$$
   - **Exact Mechanical Deadband**:
     - `DEADZONE = 0.08` radians (~4.5°). If $|\theta| < \text{DEADZONE}$, the steering locks dead straight (`0.0`).
     - Above the deadzone, linear normalization maps tilt smoothly up to `MAX_TILT = 0.85` rad (~48°) into `[-1.0, 1.0]`.
   - **Mechanical Damping & Snap**:
     - **Active Tracking**: High-frequency damping (`RESPONSIVENESS = 24.0 * dt`) provides instant, crisp control with zero floaty sponge lag.
     - **Centering Spring**: If hands drop or lose tracking, the wheel immediately snaps back to center with `CENTER_SPRING = 16.0 * dt`.

3. **Pure Ackermann Kinematics (Zero Sideways Slip / No Ice Drift)**:
   - **Dynamic Lock Angle**:
     $$\text{effectiveWheelAngle} = \text{currentSteer} \times 0.52 \times \text{lerp}\left(1.0, 0.35, \frac{|\text{speed}|}{\text{maxSpeed}}\right)$$
   - **Turn Rate**:
     $$\text{angularVelocity} = \left(\frac{\text{speed}}{\text{wheelbase}}\right) \times \tan(\text{effectiveWheelAngle}) \quad (\text{wheelbase} = 2.6\text{m})$$
   - **Translation**: Translates strictly along the forward vector (`carMesh.quaternion.forward * speed * dt`). Lateral slip velocity is zero—the car grips the road with authentic mechanical authority.

4. **Dr. Driving Cockpit & Chassis Inertia**:
   - First-person cockpit view with working animated dashboard instruments.
   - **3D Steering Wheel**: Linked directly to `currentSteer` with a 1.5-turn visual ratio (`wheelMesh.rotation.z = -currentSteer * 7.85` rad).
   - **Inertial Weight Transfer**: Pitch forward under hard braking, tilt back on acceleration, and centrifugal body roll into turns.
   - **Working Rearview Mirror**: Secondary backwards-facing camera rendered dynamically to a mirror texture.

5. **100% Procedural Web Audio Engine (`SoundSynth.js`)**:
   - Zero external audio files required.
   - Sawtooth + dynamic `BiquadFilterNode` engine roar modulated by RPM and 4-speed automatic transmission.
   - Tire screech on high-G turns or handbrake slide.
   - Low-frequency noise crash crunch.

---

## 🕹️ Controls Guide

### ✋ Hand Gestures (Webcam)
- **TWO HANDS = STEERING CONTROL ONLY (Gears Locked 🔒)**:
  - Hold **both hands** up in front of the camera to steer like a real steering wheel.
  - **Gearing system is 100% LOCKED** while driving with 2 hands—zero accidental gear shifts while turning!
  - **Gas / Throttle**: Lower your open right hand toward your desk.
  - **Foot Brake**: Clench a fist with either hand (Double fist = Emergency Handbrake).
- **ONE HAND = GEAR SHIFTING CONTROL (Steering Locked Straight ⚡)**:
  - Drop one hand to enter Gear Shift Mode.
  - **Quick Paddle Pinch-Tap**: Touch thumb & index finger together to immediately toggle **Drive (D)** and **Reverse (R)** / **Park (P)**.
  - **Gentle Flick**: Flick your hand/wrist **UP** to shift up (towards P); flick **DOWN** to shift down (towards D).
  - **Virtual Gate**: Move your hand toward the right half of the screen to tap **P**, **R**, **N**, or **D**.
  - **Resume Steering**: Simply raise your 2nd hand to immediately return to Steering Control!
- **3D Cockpit Animated Hands**: In first-person cockpit view, watch the driver's 3D racing-gloved hands realistically steer the wheel and briskly reach down to the center console to throw the mechanical gear lever into place upon shifting!
- **On-Screen / Keyboard**: Click on-screen gear buttons (**P**, **R**, **N**, **D**) or press keys `1`, `2`, `3`, `4`.

### ⌨️ Keyboard Fallback
- `W` / `↑`: Accelerate / Gas
- `S` / `↓`: Foot Brake / Reverse (when in `R`)
- `A` / `←`: Steer Left
- `D` / `→`: Steer Right
- `Spacebar`: Emergency Handbrake
- `1`, `2`, `3`, `4`: Select P, R, N, D gears
- `Q` / `E`: Left / Right turn indicators
- `C`: Toggle Cockpit View / Third-Person Chase Cam
- `H`: Horn

---

## 🏁 Missions & Progression
- **Level 1: Highway Lane Weaving**: Maintain speed between 50 and 70 km/h for 40 seconds without scraping curbs or AI traffic.
- **Level 2: City Intersections**: Follow 3D green guide arrows and negotiate 3 crossroad turns through oncoming traffic. Obey red lights!
- **Level 3: Precision Bay Parking**: Navigate into the marked parking bay, stop completely between the yellow lines, and shift into **P** to finish.
- **Level 4: Fuel Economy Run**: Reach the 540m finish line before fuel runs out. Avoid high RPM acceleration!

---

## 📦 Running Locally
```powershell
npm run dev
```
Open **`http://localhost:3000`** in your browser.
