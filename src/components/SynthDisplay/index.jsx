import SynthControls from "../SynthControls";
import KeyBed from "../KeyBed";

//COMPONENT that houses the synth and its controls
export default function SynthDisplay({
  notesarray,
  currentOctave,
  noteplay,
  notestop,
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
      <KeyBed
        notesarray={notesarray}
        octave={currentOctave}
        noteplay={noteplay}
        notestop={notestop}
      />
    </div>
  );
}
