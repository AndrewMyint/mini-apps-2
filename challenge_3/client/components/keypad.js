/* eslint-disable quotes */
/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Keypad = (props) => {
  const {
    currentRound, roundScore1, setRoundScore,
    setCurrentRound, setTotal, totalScore,
  } = props;
  const roundScore = [...roundScore1];
  const handleScore = (e) => {
    const value = parseInt(e.target.innerText, 10);
    // if (!roundScore[currentRound].done) {
    if (roundScore[currentRound].firstAttempt === ' ') {
      console.log("before this is value0", roundScore[0]);
      if (value === 10) {
        roundScore[currentRound].firstAttempt = value;
        roundScore[currentRound].secondAttempt = '/';
        roundScore[currentRound].total = value + 10 + totalScore;
        setRoundScore(roundScore);
        setTotal(prevTotal => prevTotal + value + 10);
        if (currentRound < 9) {
          setCurrentRound(prevRound => prevRound + 1);
        }
      } else {
        roundScore[currentRound].firstAttempt = value;
        setRoundScore(roundScore);
      }

      console.log("after this is value", roundScore[0]);
      setRoundScore(roundScore);
    } else if (roundScore[currentRound].secondAttempt === ' ') {
      const { firstAttempt } = roundScore[currentRound];
      if (firstAttempt + value === 10) {
        roundScore[currentRound].secondAttempt = value;
        const tempTotal = (2 * firstAttempt) + roundScore[currentRound].secondAttempt;
        roundScore[currentRound].total = totalScore + tempTotal;
        setRoundScore(roundScore);
        setTotal(prevTotal => prevTotal + tempTotal);
        if (currentRound < 9) {
          setCurrentRound(prevRound => prevRound + 1);
        }
      } else {
        roundScore[currentRound].secondAttempt = value;
        const tempTotal = firstAttempt + roundScore[currentRound].secondAttempt;
        roundScore[currentRound].total = totalScore + tempTotal;
        setRoundScore(roundScore);
        setTotal(prevTotal => prevTotal + tempTotal);
        if (currentRound < 9) {
          setCurrentRound(prevRound => prevRound + 1);
        }
      }
    }
    // }
  };

  console.log("this is score", roundScore);
  return (
    <>
      <div>This is keypad </div>
      <table className="setBorder">
        <tbody>
          <tr>
            <td>
              <button type="submit" onClick={handleScore}>1</button>
            </td>
            <td>
              <button type="submit" onClick={handleScore}>2</button>
            </td>
            <td>
              <button type="submit" onClick={handleScore}>3</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit" onClick={handleScore}>4</button>
            </td>
            <td>
              <button type="submit" onClick={handleScore}>5</button>
            </td>
            <td>
              <button type="submit" onClick={handleScore}>6</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit" onClick={handleScore}>7</button>
            </td>
            <td>
              <button type="submit" onClick={handleScore}>8</button>
            </td>
            <td>
              <button type="submit" onClick={handleScore}>9</button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit" onClick={handleScore}>10</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Keypad;

Keypad.propTypes = {
  roundScore1: PropTypes.instanceOf(Object).isRequired,
  currentRound: PropTypes.number.isRequired,
  totalScore: PropTypes.number.isRequired,
  setRoundScore: PropTypes.func.isRequired,
  setCurrentRound: PropTypes.func.isRequired,
  setTotal: PropTypes.func.isRequired,
};
