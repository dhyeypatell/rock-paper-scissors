import { useEffect } from "react";
import Button from "../Button/Button";
import Styles from "./YourMove.module.scss";

const YourMove = ({ yourMoves, setYourMoves, isGameDone }) => {
  const arrMoves = ["Rock", "Paper", "Scissors"];

  useEffect(() => {
    if (yourMoves.length === 0) {
      setYourMoves((oldArray) => [...oldArray, ""]);
    }
  });

  const handleOnClick = (move) => {
    if (!isGameDone) {
      setYourMoves((oldArray) => [...oldArray, move]);
    }
  };

  return (
    <>
      <div>
        {arrMoves.map((move, index) => (
          <Button
            value={move}
            handleOnClick={handleOnClick}
            styleDisabled={isGameDone ? Styles.disableButton : undefined}
            key={index}
          />
        ))}
      </div>
      <p>Your move: {yourMoves[yourMoves.length - 1]}</p>
    </>
  );
};

export default YourMove;
