import { useEffect } from "react";

const OpponentMove = ({ yourMoves, opponentMoves, setOpponentMoves }) => {
  const arrMoves = ["Rock", "Paper", "Scissors"];

  useEffect(() => {
    if (opponentMoves.length === 0) {
      setOpponentMoves((oldArray) => [...oldArray, ""]);
    } else if (yourMoves.length > 1) {
      const min = 0;
      const max = 2;
      const randMoveIndex = Math.round(min + Math.random() * (max - min));
      setOpponentMoves((oldArray) => [...oldArray, arrMoves[randMoveIndex]]);
    }
  }, [yourMoves]);

  return <p>Computer's move: {opponentMoves[opponentMoves.length - 1]}</p>;
};

export default OpponentMove;
