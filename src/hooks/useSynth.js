import { useState, useEffect } from "react";
import { PolySynth, Synth } from "tone";

//HOOK that reloads the synth when the options (type, asdr) change
//adapted from: https://github.com/trvswgnr/tonejs-synth/tree/main
export const useSynth = (options) => {
  const [synth, setSynth] = useState(null);
  useEffect(() => {
    if (!options) {
      return;
    }
    const synth = new PolySynth(Synth, {
      oscillator: {
        type: options.oscillator,
      },
    });

    setSynth(synth);

    return () => {
      if (synth) {
        synth.releaseAll();
        setSynth(null);
      }
    };
  }, [options]);

  return synth;
};
