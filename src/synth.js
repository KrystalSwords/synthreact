import { MonoSynth } from "tone";

export const synth = new MonoSynth({
  volume: -8,
  oscillator: {
    type: "sine",
    frequency: 150,
  },
  envelope: {
    attack: 0,
    decay: 0.0,
    sustain: 1,
    release: 0.1,
    releaseCurve: "linear",
  },
}).toDestination();
