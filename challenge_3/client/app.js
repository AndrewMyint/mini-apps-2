import React, { useState } from 'react';
import Keypad from './components/keypad';
import Scoreboard from './components/scoreboard';
import './app.css';

const App = () => {
  // using Array(10).fill({}) won't work because each array index referencing to same obj
  const array = [...Array(10)].map(() => ({
    firstAttempt: ' ', secondAttempt: ' ', total: ' ', done: false,
  }));
  const [totalScore, setTotal] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [roundScore, setRoundScore] = useState(array);
  // console.log('this is roundScore: ', roundScore);
  return (
    <>
      <Keypad
        currentRound={currentRound}
        roundScore1={roundScore}
        totalScore={totalScore}
        setRoundScore={setRoundScore}
        setCurrentRound={setCurrentRound}
        setTotal={setTotal}
      />
      <Scoreboard roundScore={roundScore} />
    </>
  );
};


export default App;
