"use client";
import { useEffect, useState } from "react";
import { NoteInterface } from "../page";
import Note from "./Note.client";

const NoteArea = () => {
  const [notes, setNotes] = useState<NoteInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(fetchUrl);
      const jsonData = await response.json();
      const jsonDataFiltered = jsonData.filter((post: any) => post.id < 10);

      return jsonDataFiltered;
    };

    fetchData().then((postData) => {
      setNotes((previousNotes) => [
        ...previousNotes,
        ...postData.map((post: any, index: any) => {
          return { title: post["title"], content: post["body"] };
        }),
      ]);
    });
  }, []);

  console.log(
    notes.map((note, index) => (
      <Note key={index} title={note.title} content={note.content} />
    ))
  );

  return (
    <div style={{ width: "100vw" }}>
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
    </div>
  );
};

export default NoteArea;
