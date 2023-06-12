import React, { useState } from "react";

function CreateArea(props) {
  const [noteText, setNoteText] = useState({ title: "", content: "" });

  function handleKeyDown(event) {
    if (
      (event.key === "Enter" && event.metaKey) ||
      (event.key === "Enter" && event.ctrlKey)
    ) {
      props.onAdd(noteText);
      setNoteText({ title: "", content: "" });
    }
  }

  function handleChange(event) {
    setNoteText((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
      <form
        onChange={handleChange}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          name="title"
          placeholder="Title"
          value={noteText.title}
          onKeyDown={handleKeyDown}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteText.content}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => {
            props.onAdd(noteText);
            setNoteText({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
