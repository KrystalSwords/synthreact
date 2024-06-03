import "./styles.css";
import { useEffect, useState } from "react";
import KeyBed from "./components/KeyBed";
import { synth } from "./synth.js";
import SynthControls from "./components/SynthControls";
import SynthDisplay from "./components/SynthDisplay";

export default function App() {
  const notesarray = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const keyboardarray = [
    "a",
    "w",
    "s",
    "e",
    "d",
    "f",
    "t",
    "g",
    "y",
    "h",
    "u",
    "j",
  ];
  const [currentOctave, setCurrentOctave] = useState(4);

  const handleASDRChange = (e, asdrselect) => {
    if (asdrselect === "attack") {
      synth.envelope.attack = e;
    } else if (asdrselect === "decay") {
      synth.envelope.decay = e;
    } else if (asdrselect === "sustain") {
      synth.envelope.sustain = e;
    } else if (asdrselect === "release") {
      synth.envelope.release = e;
    } else {
      console.log("you goofed");
    }
  };

  const handleWaveChange = (e) => {
    synth.oscillator.type = e;
  };

  const noteplay = (note) => {
    synth.triggerAttack(note);
  };

  const notestop = () => {
    synth.triggerRelease();
  };

  function octaveUp() {
    setCurrentOctave(currentOctave + 1);
  }

  function octaveDown() {
    setCurrentOctave(currentOctave - 1);
  }

  return (
    <div class="maindisplay">
      <SynthDisplay
        notesarray={notesarray}
        currentOctave={currentOctave}
        noteplay={noteplay}
        notestop={notestop}
        handleWaveChange={handleWaveChange}
        handleASDRChange={handleASDRChange}
        octaveUp={octaveUp}
        octaveDown={octaveDown}
      />
    </div>
  );
}
