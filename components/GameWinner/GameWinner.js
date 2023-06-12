import Button from "../Button/Button";

const GameWinner = ({
  yourPoints,
  opponentPoints,
  setYourPoints,
  setOpponentPoints,
  setYourMoves,
  setOpponentMoves,
  setIsGameDone,
}) => {
  const handleOnClick = () => {
    setYourPoints(0);
    setOpponentPoints(0);
    setYourMoves([]);
    setOpponentMoves([]);
    setIsGameDone(false);
  };

  return (
    <>
      {yourPoints > opponentPoints && <p>You win the game!</p>}
      {yourPoints < opponentPoints && <p>The computer wins the game!</p>}
      <Button value={"Play Again"} handleOnClick={handleOnClick} />
    </>
  );
};

export default GameWinner;
