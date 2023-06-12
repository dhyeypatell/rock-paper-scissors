"use client";
import { useState, useEffect } from "react";
import YourMove from "../../components/YourMove/YourMove";
import OpponentMove from "../../components/OpponentMove/OpponentMove";
import RoundWinner from "../../components/RoundWinner/RoundWinner";
import GameWinner from "../../components/GameWinner/GameWinner";
import Footer from "../../components/Footer/Footer";
import Styles from "./page.module.scss";

const Home = () => {
  const [yourMoves, setYourMoves] = useState([]);
  const [opponentMoves, setOpponentMoves] = useState([]);
  const [yourPoints, setYourPoints] = useState(0);
  const [opponentPoints, setOpponentPoints] = useState(0);
  const [isGameDone, setIsGameDone] = useState(false);

  useEffect(() => {
    if (yourPoints === 5 || opponentPoints === 5) {
      setIsGameDone(true);
    }
  }, [yourPoints, opponentPoints]);

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.innerContainer}>
        <h1>Rock, Paper, Scissors</h1>
        <p>This game will be played until 5 points.</p>
        <p>Your points: {yourPoints}</p>
        <p>Computer's Points: {opponentPoints}</p>
        <YourMove
          yourMoves={yourMoves}
          setYourMoves={setYourMoves}
          isGameDone={isGameDone}
        />
        <OpponentMove
          yourMoves={yourMoves}
          opponentMoves={opponentMoves}
          setOpponentMoves={setOpponentMoves}
        />
        <RoundWinner
          yourMoves={yourMoves}
          opponentMoves={opponentMoves}
          yourPoints={yourPoints}
          setYourPoints={setYourPoints}
          opponentPoints={opponentPoints}
          setOpponentPoints={setOpponentPoints}
        />
        {isGameDone && (
          <GameWinner
            yourPoints={yourPoints}
            opponentPoints={opponentPoints}
            setYourPoints={setYourPoints}
            setOpponentPoints={setOpponentPoints}
            setYourMoves={setYourMoves}
            setOpponentMoves={setOpponentMoves}
            setIsGameDone={setIsGameDone}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
