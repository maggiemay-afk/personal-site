import * as React from "react";
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import './ticTacToe.module.css';
import { Link } from "gatsby";


function Square(props) {
  return(
    <button
      className="square" onClick={props.onClick}>
        {props.value}
    </button>
  );
}

function Board () { 
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  function handleClick(i) {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    newSquares[i] = setSquares.xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);

  }

  function handleResetButton () {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  //fix this 
  function renderSquare(i) {
    return (
      <Square>

      </Square>
    )
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div> 
        <button className="button" onClick={() => handleResetButton()}>
        <FaRedoAlt/> Reset Game
        </button>
      </div>
    </div>
  );
}


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

  for (let i=0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return undefined;
}


export default Board;