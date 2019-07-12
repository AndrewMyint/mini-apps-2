import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Scoreboard = (props) => {
  const { roundScore } = props;
  console.log('from scoreboard: roundScore: ', roundScore);
  const totalRound = roundScore.map((value, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <td style={{ display: 'inline-block' }} key={`${index}`}>
      <tr>
        <td className="setBorder scordBoard">{value.firstAttempt}</td>
        <td className="setBorder scordBoard">{value.secondAttempt}</td>
      </tr>
      <tr>
        <td className="setBorder scordBoard">{value.total}</td>
      </tr>
    </td>
  ));
  // console.log('totalRound', totalRound);
  return (
    <>
      <table className="setBorder">
        <tbody>
          <tr>{totalRound}</tr>
        </tbody>
      </table>
    </>
  );
};

export default Scoreboard;

Scoreboard.propTypes = {
  roundScore: PropTypes.instanceOf(Object).isRequired,
};
