import Key from "../Key";

export default function KeyBed({ keyboardarray, octave }) {
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
  return (
    <>
      <span className="octave1">
        {keyboardarray.map((char) => (
          <Key char={char} />
        ))}
      </span>
    </>
  );
}
