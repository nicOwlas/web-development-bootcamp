import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function CreateCard(emojiDetails) {
  return (
    <Card
      key={emojiDetails.id}
      name={emojiDetails.name}
      emoji={emojiDetails.emoji}
      meaning={emojiDetails.meaning}
    />
  );
}

function App() {
  const emojiList = emojipedia.map((emoji) => CreateCard(emoji));
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojiList}</dl>
    </div>
  );
}

export default App;
