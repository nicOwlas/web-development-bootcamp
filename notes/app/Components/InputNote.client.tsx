"use client";

import { useState } from "react";
import { NoteInterface } from "../page";

const InputNote: React.FC = () => {
  const [note, setNote] = useState<NoteInterface>({
    key: -1,
    title: "",
    content: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    console.log(event.target.name, event.target.value);
    setNote((previousNote) => {
      return {
        ...previousNote,
        [name]: value,
      };
    });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "20px",
          backgroundColor: "white",
          height: "100px",
          width: "300px",
          borderRadius: "8px",
          justifyContent: "space-around",
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="title"
          style={{ border: "none" }}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="content"
          rows="3"
          style={{ border: "none" }}
          onChange={handleChange}
        />
      </div>
      <button
        style={{
          height: "50px",
          width: "100px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
};

export default InputNote;
