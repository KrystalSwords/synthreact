import Key from "../Key";

export default function KeyBed({ notesarray, octave, noteplay, notestop }) {
  return (
    <>
      <span className="octave1">
        {notesarray.map((note) => (
          <Key
            note={noteToString(note, octave)}
            noteplay={noteplay}
            notestop={notestop}
          />
        ))}
      </span>
      <span className="octave2">
        {notesarray.map((note) => (
          <Key
            note={noteToString(note, octave + 1)}
            noteplay={noteplay}
            notestop={notestop}
          />
        ))}
      </span>
    </>
  );
}

function noteToString(note, octave) {
  return note + octave;
}
