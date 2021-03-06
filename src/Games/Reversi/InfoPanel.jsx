import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import { TextareaAutosize } from '@material-ui/core'

function showActivePlayer(currentPlayer) {
  return currentPlayer === 1 ? 'White' : 'Black';
}

function showLogs(logs) {
  let text = '';
  const startIndex = logs.length >= 10 ? logs.length - 10 : 0;
  for (let i = startIndex; i < logs.length; i += 1) {
    text += `${logs[i]}\n`;
  }
  return <TextareaAutosize className="logs-list" rowsMin="11" value={text} />;
}

export default function InfoPanel(props) {
  const {
    currentPlayer, whiteScore, blackScore, logs, newGame,
  } = props;
  const txtStatusMessage = `It is ${showActivePlayer(currentPlayer)}'s turn`;
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
    <div id="info-panel">
      <h2>REVERSI</h2>
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
      <Button
        variant="contained"
        color="primary"
        startIcon={<FiberNewIcon />}
        onClick={newGame}
      >
        Start New Game
      </Button>
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
