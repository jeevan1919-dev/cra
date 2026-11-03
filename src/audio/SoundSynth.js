/**
 * SoundSynth.js - Procedural Web Audio Engine for Dr. Driving
 * Zero external audio files - 100% real-time synthesis via Web Audio API
 */

export class SoundSynth {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isMuted = false;
    this.initialized = false;

    // Engine synth nodes
    this.engineRunning = false;
    this.engineOsc1 = null;
    this.engineOsc2 = null;
    this.engineFilter = null;
    this.engineGain = null;

    // Tire screech nodes
    this.screechNoise = null;
    this.screechFilter = null;
    this.screechGain = null;

    // Horn nodes
    this.hornOsc1 = null;
    this.hornOsc2 = null;
    this.hornGain = null;
  }

  init() {
    if (this.initialized) return;

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.setupEngineSound();
      this.setupScreechSound();

      this.initialized = true;
    } catch (e) {
      console.warn('Web Audio init notice:', e);
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (!this.initialized) {
      this.init();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.7, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  setupEngineSound() {
    if (!this.ctx) return;

    // Low-frequency sawtooth oscillator + sub-triangle for deep engine growl
    this.engineOsc1 = this.ctx.createOscillator();
    this.engineOsc1.type = 'sawtooth';
    this.engineOsc1.frequency.setValueAtTime(45, this.ctx.currentTime);

    this.engineOsc2 = this.ctx.createOscillator();
    this.engineOsc2.type = 'triangle';
    this.engineOsc2.frequency.setValueAtTime(22.5, this.ctx.currentTime);

    // Dynamic low-pass filter modulated by vehicle RPM and throttle intake
    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.setValueAtTime(240, this.ctx.currentTime);
    this.engineFilter.Q.setValueAtTime(2.8, this.ctx.currentTime);

    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.setValueAtTime(0.18, this.ctx.currentTime);

    this.engineOsc1.connect(this.engineFilter);
    this.engineOsc2.connect(this.engineFilter);
    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(this.masterGain);

    this.engineOsc1.start();
    this.engineOsc2.start();
    this.engineRunning = true;
  }

  setupScreechSound() {
    if (!this.ctx) return;

    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    this.screechNoise = this.ctx.createBufferSource();
    this.screechNoise.buffer = noiseBuffer;
    this.screechNoise.loop = true;

    // Resonant bandpass filter tuned to tire rubber squeal
    this.screechFilter = this.ctx.createBiquadFilter();
    this.screechFilter.type = 'bandpass';
    this.screechFilter.frequency.setValueAtTime(1150, this.ctx.currentTime);
    this.screechFilter.Q.setValueAtTime(4.2, this.ctx.currentTime);

    this.screechGain = this.ctx.createGain();
    this.screechGain.gain.setValueAtTime(0, this.ctx.currentTime);

    this.screechNoise.connect(this.screechFilter);
    this.screechFilter.connect(this.screechGain);
    this.screechGain.connect(this.masterGain);

    this.screechNoise.start();
  }

  /**
   * Modulate engine pitch and intake filter with RPM and throttle
   */
  updateEngine(rpm, throttle, gear = 'D') {
    if (!this.initialized || !this.engineRunning || this.isMuted) return;

    const t = this.ctx.currentTime;
    const normRpm = Math.max(800, Math.min(8000, rpm));

    const baseFreq = 28 + (normRpm / 8000) * 165;
    this.engineOsc1.frequency.setTargetAtTime(baseFreq, t, 0.04);
    this.engineOsc2.frequency.setTargetAtTime(baseFreq * 0.5, t, 0.04);

    const cutoffFreq = 220 + (normRpm / 8000) * 850 + throttle * 900;
    this.engineFilter.frequency.setTargetAtTime(cutoffFreq, t, 0.035);

    let targetVol = 0.12 + (normRpm / 8000) * 0.16 + throttle * 0.08;
    if (gear === 'N' || gear === 'P') {
      targetVol *= 0.75;
    }
    this.engineGain.gain.setTargetAtTime(targetVol, t, 0.04);
  }

  /**
   * Trigger screech on high lateral stress or handbrake slide
   */
  updateTireScreech(intensity) {
    if (!this.initialized || !this.screechGain || this.isMuted) return;

    const t = this.ctx.currentTime;
    const clamped = Math.max(0, Math.min(1, intensity));
    const targetGain = clamped > 0.15 ? (clamped - 0.15) * 0.45 : 0;
    this.screechGain.gain.setTargetAtTime(targetGain, t, 0.035);

    if (this.screechFilter) {
      const freq = 1000 + clamped * 450;
      this.screechFilter.frequency.setTargetAtTime(freq, t, 0.04);
    }
  }

  /**
   * Impact collision crunch: Fast noise burst + low-frequency pitch drop
   */
  playCrash() {
    if (!this.initialized || this.isMuted) return;
    const t = this.ctx.currentTime;

    // 1. High transient noise explosion
    const noiseLen = 0.45;
    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * noiseLen, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.10));
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = buffer;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(2200, t);
    noiseFilter.frequency.exponentialRampToValueAtTime(150, t + noiseLen);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.85, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, t + noiseLen);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noiseSource.start(t);

    // 2. Heavy sub-bass pitch drop (130 Hz down to 30 Hz)
    const subOsc = this.ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(130, t);
    subOsc.frequency.exponentialRampToValueAtTime(30, t + 0.35);

    const subGain = this.ctx.createGain();
    subGain.gain.setValueAtTime(0.7, t);
    subGain.gain.exponentialRampToValueAtTime(0.01, t + 0.35);

    subOsc.connect(subGain);
    subGain.connect(this.masterGain);

    subOsc.start(t);
    subOsc.stop(t + 0.4);
  }

  playGearShift() {
    if (!this.initialized || this.isMuted) return;
    const t = this.ctx.currentTime;

    const clickOsc = this.ctx.createOscillator();
    clickOsc.type = 'triangle';
    clickOsc.frequency.setValueAtTime(800, t);
    clickOsc.frequency.exponentialRampToValueAtTime(180, t + 0.05);

    const clickGain = this.ctx.createGain();
    clickGain.gain.setValueAtTime(0.35, t);
    clickGain.gain.exponentialRampToValueAtTime(0.01, t + 0.06);

    clickOsc.connect(clickGain);
    clickGain.connect(this.masterGain);
    clickOsc.start(t);
    clickOsc.stop(t + 0.07);
  }

  playTurnSignal(isTick = true) {
    if (!this.initialized || this.isMuted) return;
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(isTick ? 1850 : 1350, t);
    osc.frequency.exponentialRampToValueAtTime(800, t + 0.025);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.005, t + 0.03);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.035);
  }

  playHorn(start = true) {
    if (!this.initialized || this.isMuted) return;

    if (start) {
      if (this.hornOsc1) return;
      const t = this.ctx.currentTime;

      this.hornOsc1 = this.ctx.createOscillator();
      this.hornOsc1.type = 'sawtooth';
      this.hornOsc1.frequency.setValueAtTime(349.23, t); // F4

      this.hornOsc2 = this.ctx.createOscillator();
      this.hornOsc2.type = 'sawtooth';
      this.hornOsc2.frequency.setValueAtTime(440.0, t); // A4

      const hornFilter = this.ctx.createBiquadFilter();
      hornFilter.type = 'lowpass';
      hornFilter.frequency.setValueAtTime(1400, t);

      this.hornGain = this.ctx.createGain();
      this.hornGain.gain.setValueAtTime(0.25, t);

      this.hornOsc1.connect(hornFilter);
      this.hornOsc2.connect(hornFilter);
      hornFilter.connect(this.hornGain);
      this.hornGain.connect(this.masterGain);

      this.hornOsc1.start(t);
      this.hornOsc2.start(t);
    } else {
      if (this.hornOsc1) {
        const t = this.ctx.currentTime;
        this.hornGain.gain.setTargetAtTime(0, t, 0.03);
        setTimeout(() => {
          try {
            if (this.hornOsc1) {
              this.hornOsc1.stop();
              this.hornOsc2.stop();
              this.hornOsc1.disconnect();
              this.hornOsc2.disconnect();
              this.hornOsc1 = null;
              this.hornOsc2 = null;
            }
          } catch (e) {}
        }, 50);
      }
    }
  }

  playVictory() {
    if (!this.initialized || this.isMuted) return;
    const notes = [261.63, 329.63, 392.0, 523.25, 659.25, 783.99];
    const t0 = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const t = t0 + idx * 0.09;
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.28, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.005, t + (idx === notes.length - 1 ? 0.7 : 0.22));

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + (idx === notes.length - 1 ? 0.75 : 0.25));
    });
  }

  playFail() {
    if (!this.initialized || this.isMuted) return;
    const t = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    osc1.frequency.setValueAtTime(146.83, t);
    osc2.frequency.setValueAtTime(155.56, t);

    osc1.frequency.linearRampToValueAtTime(98.0, t + 0.55);
    osc2.frequency.linearRampToValueAtTime(103.8, t + 0.55);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.6);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 0.65);
    osc2.stop(t + 0.65);
  }

  playStar(index = 0) {
    if (!this.initialized || this.isMuted) return;
    const t = this.ctx.currentTime;
    const baseFreqs = [523.25, 659.25, 783.99]; // C5, E5, G5
    const freq = baseFreqs[Math.min(index, baseFreqs.length - 1)];

    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, t + 0.25);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.35, t + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(t);
    osc.stop(t + 0.42);
  }

  playCheckpoint() {
    if (!this.initialized || this.isMuted) return;
    const t = this.ctx.currentTime;
    const freqs = [440.0, 554.37, 659.25, 880.0]; // A major arpeggio

    freqs.forEach((f, idx) => {
      const noteTime = t + idx * 0.06;
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, noteTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, noteTime);
      gain.gain.linearRampToValueAtTime(0.25, noteTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.22);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(noteTime);
      osc.stop(noteTime + 0.25);
    });
  }

  playAlert() {
    if (!this.initialized || this.isMuted) return;
    const t = this.ctx.currentTime;
    [0, 0.12].forEach((offset) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'square';
      osc.frequency.setValueAtTime(740, t + offset);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, t + offset);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.12, t + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.08);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      osc.start(t + offset);
      osc.stop(t + offset + 0.09);
    });
  }
}
