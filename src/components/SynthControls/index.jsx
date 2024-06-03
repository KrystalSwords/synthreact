import { Button } from "primereact/button";
import { ButtonGroup } from "primereact/buttongroup";
import WaveSelector from "../WaveSelector";
import ASDROptions from "../ASDROptions";
import "./styles.css";

//COMPONENT that contains the controls for the synth
export default function SynthControls({
  handleWaveChange,
  handleASDRChange,
  octaveUp,
  octaveDown,
}) {
  return (
    <div className="controls">
      <div className="pitchButtons">
        <h1>Krystal Synth</h1>
        <ButtonGroup>
          <Button label="Octave Down" onClick={octaveDown} size="small" />
          <Button label="Octave Up" onClick={octaveUp} size="small" />
        </ButtonGroup>
      </div>
      <div className="oscOptions">
        <ASDROptions handleASDRChange={handleASDRChange} />
        <WaveSelector handleWaveChange={handleWaveChange} />
      </div>
    </div>
  );
}
