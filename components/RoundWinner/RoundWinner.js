import { useEffect, useState } from "react";

const RoundWinner = ({
  yourMoves,
  opponentMoves,
  yourPoints,
  setYourPoints,
  opponentPoints,
  setOpponentPoints,
}) => {
  const [roundWinner, setRoundWinner] = useState();

  useEffect(() => {
    if (
      yourMoves[yourMoves.length - 1] !==
      opponentMoves[opponentMoves.length - 1]
    ) {
      if (
        yourMoves[yourMoves.length - 1] === "Rock" &&
        opponentMoves[opponentMoves.length - 1] === "Scissors"
      ) {
        setRoundWinner("you");
        setYourPoints(yourPoints + 1);
      } else if (
        yourMoves[yourMoves.length - 1] === "Rock" &&
        opponentMoves[opponentMoves.length - 1] === "Paper"
      ) {
        setRoundWinner("computer");
        setOpponentPoints(opponentPoints + 1);
      } else if (
        yourMoves[yourMoves.length - 1] === "Paper" &&
        opponentMoves[opponentMoves.length - 1] === "Rock"
      ) {
        setRoundWinner("you");
        setYourPoints(yourPoints + 1);
      } else if (
        yourMoves[yourMoves.length - 1] === "Paper" &&
        opponentMoves[opponentMoves.length - 1] === "Scissors"
      ) {
        setRoundWinner("computer");
        setOpponentPoints(opponentPoints + 1);
      } else if (
        yourMoves[yourMoves.length - 1] === "Scissors" &&
        opponentMoves[opponentMoves.length - 1] === "Paper"
      ) {
        setRoundWinner("you");
        setYourPoints(yourPoints + 1);
      } else if (
        yourMoves[yourMoves.length - 1] === "Scissors" &&
        opponentMoves[opponentMoves.length - 1] === "Rock"
      ) {
        setRoundWinner("computer");
        setOpponentPoints(opponentPoints + 1);
      }
    } else {
      setRoundWinner("");
    }
  }, [opponentMoves]);

  return (
    <>
      {roundWinner === "computer" ? (
        <p>In this round, the {roundWinner} wins.</p>
      ) : roundWinner === "you" ? (
        <p>In this round, {roundWinner} win.</p>
      ) : (
        yourMoves.length > 1 &&
        opponentMoves.length > 1 && <p>This round was a tie.</p>
      )}
    </>
  );
};

export default RoundWinner;
