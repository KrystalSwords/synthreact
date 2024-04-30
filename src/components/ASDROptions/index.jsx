//COMPONENT that contains the options for synth envelope
export default function ASDROptions({ handleASDRChange }) {
  return (
    <>
      <div>
        <input
          type="number"
          name="synthattack"
          min={0}
          max={5}
          step={0.1}
          onChange={(e) => handleASDRChange(e.target.value, "attack")}
        />
        <label>Attack</label>
      </div>
      <div>
        <input
          type="number"
          name="synthdecay"
          min={0}
          max={10}
          step={1}
          onChange={(e) => handleASDRChange(e.target.value, "decay")}
        />
        <label>Decay</label>
      </div>
      <div>
        <input
          type="number"
          name="synthsustain"
          min={0}
          max={1}
          step={0.1}
          onChange={(e) => handleASDRChange(e.target.value, "sustain")}
        />
        <label>Sustain</label>
      </div>
      <div>
        <input
          type="number"
          name="synthrelease"
          min={0}
          max={5}
          step={0.1}
          onChange={(e) => handleASDRChange(e.target.value, "release")}
        />
        <label>Release</label>
      </div>
    </>
  );
}
