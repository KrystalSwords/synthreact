import "./styles.css";
import { useEffect, useState } from "react";
import KeyBed from "./components/KeyBed";
import ASDROptions from "./components/ASDROptions";
import { synth } from "./synth.js";
import WaveSelector from "./components/WaveSelector";

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
    console.log("1");
  };

  const noteplay = (note) => {
    synth.triggerAttack(note);
    console.log("note play");
  };

  const notestop = () => {
    synth.triggerRelease();
    console.log("note stop");
  };

  function octaveUp() {
    setCurrentOctave(currentOctave + 1);
  }

  function octaveDown() {
    setCurrentOctave(currentOctave - 1);
  }

  return (
    <div>
      <KeyBed
        notesarray={notesarray}
        octave={currentOctave}
        noteplay={noteplay}
        notestop={notestop}
      />
      <div>
        <button onClick={octaveUp}>Octave Up</button>
        <button onClick={octaveDown}>Octave Down</button>
      </div>
      <div>
        <ASDROptions handleASDRChange={handleASDRChange} />
        <WaveSelector handleWaveChange={handleWaveChange} />
      </div>
    </div>
  );
}
