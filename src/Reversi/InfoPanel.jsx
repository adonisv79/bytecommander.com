import React from 'react';
import PropTypes from 'prop-types';

function showLogs(logs) {
  let text = '';
  const startIndex = logs.length >= 10 ? logs.length - 10 : 0;
  for (let i = startIndex; i < logs.length; i += 1) {
    text += `${logs[i]}\n`;
  }
  return <textarea className="logs-list" value={text} />;
}

export default function InfoPanel(props) {
  const {
    currentPlayer, whiteScore, blackScore, logs, newGame,
  } = props;
  const txtStatusMessage = 'It is { showActivePlayer(currentPlayer) }\'s turn';
  const txtWhiteScore = `White Player: ${whiteScore}`;
  const txtBlackScore = `Black Player: ${blackScore}`;
  let whitePlayerClass = 'player-bar';
  let blackPlayerClass = 'player-bar';
  if (currentPlayer === 1) {
    whitePlayerClass += ' current-player';
  } else if (currentPlayer === -1) {
    blackPlayerClass += ' current-player';
  }

  return (
    <div className="info-panel">
      <div>
        <h2>REVERSI</h2>
        <p>
          The goal is to capture as many areas as possible. For the full instructions, please see
          <a target="new" href="https://en.wikipedia.org/wiki/Reversi">the Wikipedia guide on Reversi </a>
        </p>
      </div>
      <div className="info-panel-status">
        { txtStatusMessage }
      </div>
      <div className={whitePlayerClass}>
        <svg className="player-icon" height="13" width="13">
          <circle cx="6" cy="6" r="6" stroke="black" strokeWidth="1" fill="white" />
        </svg>
        { txtWhiteScore }
      </div>
      <div className={blackPlayerClass}>
        <svg className="player-icon" height="13" width="13">
          <circle cx="6" cy="6" r="6" stroke="black" strokeWidth="1" fill="black" />
        </svg>
        { txtBlackScore }
      </div>

      {showLogs(logs)}
      <button type="button" onClick={newGame}>New Game</button>
    </div>
  );
}

InfoPanel.propTypes = {
  currentPlayer: PropTypes.number.isRequired,
  whiteScore: PropTypes.number.isRequired,
  blackScore: PropTypes.number.isRequired,
  logs: PropTypes.arrayOf(PropTypes.string).isRequired,
  newGame: PropTypes.func.isRequired,
};
