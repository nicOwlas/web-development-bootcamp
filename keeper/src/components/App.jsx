import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([{ title: "test", content: "blabla" }]);

  function handleAdd(noteText) {
    setNotes((previousState) => [
      { title: noteText.title, content: noteText.content },
      ...previousState,
    ]);
  }

  function handleDelete(id) {
    setNotes((previousState) =>
      previousState.filter((note, index) => index !== id)
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          onDelete={handleDelete}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
