"use client";
import { NoteInterface } from "../page";

const Note: React.FC<NoteInterface> = (props) => {
  return (
    <div style={{ width: "200px", height: "400px" }}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};

export default Note;
