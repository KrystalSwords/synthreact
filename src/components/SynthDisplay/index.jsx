import SynthControls from "../SynthControls";
import KeyBed from "../KeyBed";

//COMPONENT that houses the synth and its controls
export default function SynthDisplay({
  keyboardarray,
  currentOctave,
  handleWaveChange,
  handleASDRChange,
  octaveUp,
  octaveDown,
}) {
  return (
    <div>
      <SynthControls
        handleWaveChange={handleWaveChange}
        handleASDRChange={handleASDRChange}
        octaveUp={octaveUp}
        octaveDown={octaveDown}
      />
      <KeyBed keyboardarray={keyboardarray} octave={currentOctave} />
    </div>
  );
}
