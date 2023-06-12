import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([{ title: "test", content: "blabla" }]);

  function handleAdd(noteText) {
    console.log(notes);
    setNotes((previousState) => [
      { title: noteText.title, content: noteText.content },
      ...previousState,
    ]);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
