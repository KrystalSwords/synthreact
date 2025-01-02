import "./styles.css";
import { useEffect, useState } from "react";
import KeyBed from "./components/KeyBed";
import SynthControls from "./components/SynthControls";
import SynthDisplay from "./components/SynthDisplay";
import { useKeyPress } from "./hooks/useKeyPress";
import SoundGen from "./components/SoundGen";

export default function App() {
  const defaultOptions = {
    volume: -8,
    oscillator: {
      type: "sine",
      frequency: 150,
    },
    envelope: {
      attack: 1,
      decay: 0,
      sustain: 1,
      release: 0,
      releaseCurve: "linear",
    },
  };
  const keyboardarray = "zsxdcvgbhnjmq2w3er5t6y7u".split("");
  const [currentOctave, setCurrentOctave] = useState(4);
  const [options, setOptions] = useState(defaultOptions);

  const handleASDRChange = (e, adsrselect) => {
    //    const newOptions = // merge current options with envelope[adsrselect]
    setOptions({
      ...options,
      envelope: { ...options.envelope, [adsrselect]: e },
    });
    console.log(options);
  };

  const handleWaveChange = (e) => {
    //    const newOptions = // merge current options with envelope[adsrselect]
    setOptions({
      ...options,
      oscillator: { ...options.oscillator, type: e },
    });
    console.log(options);
  };

  function octaveUp() {
    setCurrentOctave(currentOctave + 1);
  }

  function octaveDown() {
    setCurrentOctave(currentOctave - 1);
  }

  return (
    <div class="maindisplay">
      <SoundGen
        options={options}
        notesarray={keyboardarray}
        octave={currentOctave}
      />
      <SynthDisplay
        keyboardarray={keyboardarray}
        currentOctave={currentOctave}
        handleWaveChange={handleWaveChange}
        handleASDRChange={handleASDRChange}
        octaveUp={octaveUp}
        octaveDown={octaveDown}
      />
    </div>
  );
}
