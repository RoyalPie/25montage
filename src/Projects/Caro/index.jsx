import { useEffect, useState } from "react";
import "./caro.css";
const CaroChess = () => {
  const init = new Array(9).fill(null);
  const [chessCell, setChessCell] = useState(init);
  const [playTurn, setPlayTurn] = useState("X");
  const [active, setActive] = useState(init.fill(true));
  const [winner, setWinner] = useState();
  function handleClick(index) {
    if (active[index]) {
      const newCell = [...chessCell];
      const newActive = [...active];
      newCell[index] = playTurn;
      newActive[index] = false;
      setChessCell(newCell);
      setPlayTurn(playTurn === "X" ? "O" : "X");
      setActive(newActive);
    }
  }
  function checkWinner() {
    const winPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winPattern.length; i++) {
      const [x, y, z] = winPattern[i];
      if (
        (chessCell[x] === "X" || chessCell[x] === "O") &&
        chessCell[x] === chessCell[y] &&
        chessCell[x] === chessCell[z]
      ) {
        setActive(init.fill(false));
        setWinner(playTurn === "X" ? "O" : "X");
      }
    }
  }
  useEffect(() => {
    checkWinner();
  }, [chessCell]);
  function reset() {
    setActive(init.fill(true));
    setChessCell(init);
    setWinner();
  }
  return (
    <>
      <div className="chess-table">
        {chessCell &&
          chessCell.map((cell, index) => (
            <div
              key={index}
              className="table-cell"
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          ))}
      </div>
      {winner && <h1>Winner is {winner}!!!!!</h1>}
      <button onClick={reset}>Reset</button>
    </>
  );
};
export default CaroChess;
