import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerShape, setPlayerShape] = useState("X");
  console.log("Board function is executed");

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is " + winner;
  } else {
    status = "Next player is " + playerShape;
  }

  function handlSquareClick(id) {
    // Do not allow a square to be played twice
    if (calculateWinner(squares) || squares[id]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[id] = playerShape;
    setSquares(nextSquares);
    playerShape === "X" ? setPlayerShape("O") : setPlayerShape("X");
    console.log(calculateWinner(squares));
  }

  return (
    <>
      <div>{status}</div>
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

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let gameStatus;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      } else {
        gameStatus = "Next player is " + playerShape;
      }
    }
    return null;
  }
}

export default Board;
