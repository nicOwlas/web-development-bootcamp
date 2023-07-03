import InputNote from "./Components/InputNote.client";
import NoteArea from "./Components/NoteArea.client";

export interface NoteInterface {
  key: number;
  title: string;
  content: string;
}

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <h1>Notes</h1>
        <InputNote />
        <NoteArea />
      </div>
    </main>
  );
}
