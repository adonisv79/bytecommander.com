import React, { MouseEventHandler } from 'react';
import styles from './InfoPanel.module.css';
import Button from '../../ui/Button';

interface GameLogProps {
  logs: string[];
};

/**
 * Renders the GameLog Text Area element
 * @property logs - string array containing the log data
 * @returns The GameLog Text Area
 */
function GameLogs(props: GameLogProps) {
  let text = '';
  let { logs } = props;
  const startIndex = logs.length >= 10 ? logs.length - 10 : 0;
  for (let i = startIndex; i < logs.length; i += 1) {
    text += `${logs[i]}\n`;
  }

  return <div className={styles.logsarea}>
    <textarea
      className={["text-xs p-1 mx-1 text-gray-800", styles.logslist].join(" ")}
      readOnly
      value={text} />
  </div>;
}

interface InfoPanelProps {
  currentPlayer: number,
  whiteScore: number,
  blackScore: number,
  logs: string[],
  newGame: MouseEventHandler,
}

/**
 * Renders the Reversi game information panel element
 * @property logs - string array containing the log data
 * @returns The InfoPanel Component
 */
export default function InfoPanel(props: InfoPanelProps) {
  const {
    currentPlayer, whiteScore, blackScore, logs, newGame,
  } = props;
  const txtStatusMessage = `It is ${currentPlayer === 1 ? 'White' : 'Black'}'s turn`;
  const txtWhiteScore = `White Player: ${whiteScore}`;
  const txtBlackScore = `Black Player: ${blackScore}`;
  let whitePlayerClass = "border border-gray-500";
  let blackPlayerClass = "border border-gray-500";
  if (currentPlayer === 1) {
    whitePlayerClass += ' bg-yellow-700';
  } else if (currentPlayer === -1) {
    blackPlayerClass += ' bg-yellow-700';
  }

  return (
    <div id="info-panel">
      <h2 className='text-xl font-bold'>REVERSI</h2>
      <div className="text-sm font-medium">
        {txtStatusMessage}
      </div>
      <div className={[whitePlayerClass, "p-1 m-1"].join(" ")}>
        <svg className={styles.playericon} height="14" width="14">
          <circle cx="7" cy="7" r="6" stroke="grey" strokeWidth="1" fill="white" />
        </svg>
        {txtWhiteScore}
      </div>
      <div className={[blackPlayerClass, "p-1 m-1"].join(" ")}>
        <svg className={styles.playericon} height="14" width="14">
          <circle cx="7" cy="7" r="6" stroke="grey" strokeWidth="1" fill="black" />
        </svg>
        {txtBlackScore}
      </div>
      <GameLogs logs={logs} />
      <Button
        onClick={newGame}
      >
        Start New Game
      </Button>
    </div>
  );
}
