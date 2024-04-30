//COMPONENT that contains the selector for the waveform type
export default function WaveSelector({ handleWaveChange }) {
  return (
    <>
      <div>
        <input
          type="radio"
          value="sine"
          name="synthwave"
          defaultChecked
          onChange={(e) => handleWaveChange(e.target.value)}
        />
        <label>Sine</label>
      </div>
      <div>
        <input
          type="radio"
          value="square"
          name="synthwave"
          onChange={(e) => handleWaveChange(e.target.value)}
        />
        <label>Square</label>
      </div>
      <div>
        <input
          type="radio"
          value="sawtooth"
          name="synthwave"
          onChange={(e) => handleWaveChange(e.target.value)}
        />
        <label>Saw</label>
      </div>
      <div>
        <input
          type="radio"
          value="triangle"
          name="synthwave"
          onChange={(e) => handleWaveChange(e.target.value)}
        />
        <label>Triangle</label>
      </div>
    </>
  );
}
