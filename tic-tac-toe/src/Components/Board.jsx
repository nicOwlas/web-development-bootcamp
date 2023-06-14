import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerShape, setPlayerShape] = useState("X");

  function handlSquareClick(id) {
    console.log("clicked id:", id);
    setSquares((previousState) =>
      previousState.map((square, index) =>
        index === id ? playerShape : previousState[index]
      )
    );
    if (playerShape === "X") {
      setPlayerShape("O");
    } else {
      setPlayerShape("X");
    }
  }

  return (
    <>
      <div className="board-row">
        <Square
          key={0}
          id={0}
          value={squares[0]}
          onClick={() => handlSquareClick(0)}
        />
        <Square
          key={1}
          id={1}
          value={squares[1]}
          onClick={() => handlSquareClick(1)}
        />
        <Square
          key={2}
          id={2}
          value={squares[2]}
          onClick={() => handlSquareClick(2)}
        />
      </div>
      <div className="board-row">
        <Square
          key={3}
          id={3}
          value={squares[3]}
          onClick={() => handlSquareClick(3)}
        />
        <Square
          key={4}
          id={4}
          value={squares[4]}
          onClick={() => handlSquareClick(4)}
        />
        <Square
          key={5}
          id={5}
          value={squares[5]}
          onClick={() => handlSquareClick(5)}
        />
      </div>
      <div className="board-row">
        <Square
          key={6}
          id={6}
          value={squares[6]}
          onClick={() => handlSquareClick(6)}
        />
        <Square
          key={7}
          id={7}
          value={squares[7]}
          onClick={() => handlSquareClick(7)}
        />
        <Square
          key={8}
          id={8}
          value={squares[8]}
          onClick={() => handlSquareClick(8)}
        />
      </div>
    </>
  );
}

export default Board;
