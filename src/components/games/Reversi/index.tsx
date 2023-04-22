import React, { Component } from 'react';
import Board from './Board';
import InfoPanel from './InfoPanel';
import Actions from './actions';

let self: any;

interface SavedState {
  turn: number,
  whiteScore: number,
  blackScore: number,
  board_tiles: number[][],
};

interface GameSession {
  logs: string[],
  gameHistoryIndex: number,
  gameHistory: SavedState[]
};

function generateNewGameSession() {
  const newSession: GameSession = {
    logs: [],
    gameHistoryIndex: 0,
    gameHistory: [],
  };

  const newBoard = new Array(8);
  for (let x = 0; x < 8; x += 1) { // generate the rows per X-axis
    newBoard[x] = new Array(8);
  }
  // set the default starting tiles
  newBoard[3][3] = 1;
  newBoard[4][4] = 1;
  newBoard[4][3] = -1;
  newBoard[3][4] = -1;

  newSession.gameHistory.push({
    turn: 1,
    whiteScore: 2,
    blackScore: 2,
    board_tiles: newBoard,
  });

  return newSession;
}

function deepCopy(obj: Object) {
  const str = JSON.stringify(obj);
  return JSON.parse(str);
}

export default class Reversi extends Component {
  constructor(props: {}) {
    super(props);
    self = this;
    self.state = generateNewGameSession();
    self.state.logs.push('Welcome to My Othello demo');
  }

  onNewGame() {
    self.setState(() => {
      return generateNewGameSession();
    });
    self.addLog('A new game begins...');
  }

  onSkipTurn() {
    self.setState((state: GameSession) => {
      const newState = deepCopy(state);
      const currentHistory = deepCopy(newState.gameHistory[newState.gameHistoryIndex]);
      if (self.currentPlayer() === 1) {
        self.addLog(`${currentHistory.turn}: White skips his turn`);
      } else if (self.currentPlayer() === -1) {
        self.addLog(`${currentHistory.turn}: Black skips his turn`);
      }

      currentHistory.turn += 1;
      self.saveNextGameHistory(currentHistory);
    });
  }

  onUndoMove() {
    self.setState((state: GameSession) => {
      const newState = deepCopy(state);
      if (newState.gameHistoryIndex > 0) {
        newState.gameHistoryIndex -= 1;
        newState.gameHistory.pop();
        newState.logs.push(`Undoing turn ${newState.gameHistory[newState.gameHistoryIndex].turn}`);
      }
      return newState;
    });
  }

  onTileClicked(x: number, y: number) {
    const clonedGameState = deepCopy(self.currentGame());
    let logMessage;
    if (!clonedGameState.board_tiles[x][y]) {
      const captured = Actions.captureTile(clonedGameState.board_tiles, x, y, self.currentPlayer());
      if (captured > 0) {
        if (self.currentPlayer() === 1) {
          clonedGameState.board_tiles[x][y] = 1;
          clonedGameState.whiteScore += captured + 1;
          clonedGameState.blackScore -= captured;
          logMessage = `${clonedGameState.turn}: White occupies ${x}:${y}`;
        } else {
          clonedGameState.board_tiles[x][y] = -1;
          clonedGameState.whiteScore -= captured;
          clonedGameState.blackScore += captured + 1;
          logMessage = `${clonedGameState.turn}: Black occupies ${x}:${y}`;
        }
        clonedGameState.turn += 1;
        self.saveNextGameHistory(clonedGameState);
      } else {
        logMessage = `Invalid Move at ${x}:${y}`;
      }
      self.addLog(logMessage);
    }
  }

  currentPlayer() {
    return self.currentGame().turn % 2 === 0 ? -1 : 1;
  }

  currentGame() {
    return self.state.gameHistory[self.state.gameHistoryIndex];
  }

  addLog(message: string) {
    self.setState((state: GameSession) => {
      const newState = deepCopy(state);
      newState.logs.push(message);
      return newState;
    });
  }

  saveNextGameHistory(currentState: SavedState) {
    self.setState((state: GameSession) => {
      const newState = deepCopy(state);
      if (!newState.gameHistory) {
        newState.gameHistory = [];
      }
      newState.gameHistory.push({ ...currentState });
      if (newState.gameHistory.length > 5) {
        newState.gameHistory.shift();
      }
      newState.gameHistoryIndex = newState.gameHistory.length - 1;
      return newState;
    });
  }

  render() {
    return (
      <div id="game" className='flex flex-wrap'>
        <div className='m-4 w-60'>
          <InfoPanel
            currentPlayer={self.currentPlayer()}
            logs={self.state.logs}
            whiteScore={self.currentGame().whiteScore}
            blackScore={self.currentGame().blackScore}
            newGame={self.onNewGame}
          />
        </div>
        <div className='m-4 w-60'>
          <div>
            <Board
              boardTiles={self.currentGame().board_tiles}
              gameHistoryIndex={self.state.gameHistoryIndex}
              currentPlayer={self.currentPlayer()}
              onTileClicked={self.onTileClicked}
              skipTurn={self.onSkipTurn}
              undoTurn={self.onUndoMove}
            />
          </div>
        </div>
        <div className='m-4 w-80'>
          <p>
            The goal is to capture as many areas as possible. You can capture by selecting an area wherein you can flip your opponent&quot;s discs. This is valid only if they will be surrounded by your colored disc. For the full instructions, please see
            <a target="new" href="https://en.wikipedia.org/wiki/Reversi"> the Wikipedia guide on Reversi </a>.
            Note this game is meant to be played between 2 players on hotseat.
          </p>
        </div>
      </div>
    );
  }
}
