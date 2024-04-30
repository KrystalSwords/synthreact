import "./styles.css";

export default function Key({ note, noteplay, notestop, handleKeyPress }) {
  let keystyle;
  if (note.includes("b") || note.includes("#")) {
    keystyle = "keyaccid";
  } else {
    keystyle = "keynat";
  }
  return (
    <div
      className={keystyle}
      onMouseDown={() => noteplay(note)}
      onMouseUp={notestop}
      onMouseLeave={notestop}
    ></div>
  );
}
