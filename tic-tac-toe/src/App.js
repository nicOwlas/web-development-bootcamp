import React, { useState } from "react";

export default function Board() {
  const [checkedSquare, setCheckedSquare] = useState(false);

  function handleClick() {
    console.log("clicked");
    setCheckedSquare(!checkedSquare);
  }

  function Square({ value }) {
    return (
      <button onClick={handleClick} className="square">
        {checkedSquare ? value : "X"}
      </button>
    );
  }

  return (
    <>
      <div className="board-row">
        <Square key={1} id={1} value="1" />
        <Square key={2} id={2} value="2" />
        <Square key={3} id={3} value="3" />
      </div>
      <div className="board-row">
        <Square key={4} id={4} value="4" />
        <Square key={5} id={5} value="5" />
        <Square key={6} id={6} value="6" />
      </div>
      <div className="board-row">
        <Square key={7} id={7} value="7" />
        <Square key={8} id={8} value="8" />
        <Square key={9} id={9} value="9" />
      </div>
    </>
  );
}
