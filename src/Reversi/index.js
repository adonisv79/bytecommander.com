"use strict";

import React, {Component} from 'react';
import Board from './Board';
import InfoPanel from './InfoPanel';
import Actions from './actions';
import './index.css';

let self;

function generateNewGameState() {
  const new_state = {
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

  new_state.gameHistory.push({
    turn: 1,
    whiteScore: 2,
    blackScore: 2,
    board_tiles: newBoard,
  });

  return new_state;
}

function deepCopy(obj) {
  const str = JSON.stringify(obj);
  return JSON.parse(str);
}

export default class Reversi extends Component {
  constructor(props) {
    super(props);
    self = this;
    self.state = generateNewGameState();
    self.state.logs.push('Welcome to My Othello demo');
  }

  currentPlayer() {
    return self.currentGame().turn % 2 === 0 ? -1 : 1;
  }

  currentGame() {
    return self.state.gameHistory[self.state.gameHistoryIndex];
  }

  onNewGame() {
    self.setState(() => {
      return generateNewGameState();
    });
    self.addLog('A new game begins...');
  }

  onSkipTurn() {
    self.setState((state) => {
      const new_state = deepCopy(state);
      const current_history = deepCopy(new_state.gameHistory[new_state.gameHistoryIndex]);
      if (self.currentPlayer() === 1) {
        self.addLog(current_history.turn + ': White skips his turn');
      } else if (self.currentPlayer() === -1) {
        self.addLog(current_history.turn + ': Black skips his turn');
      }

      current_history.turn += 1;
      self.saveNextGameHistory(current_history);
    });
  }

  onUndoMove() {
    self.setState((state) => {
      const new_state = deepCopy(state);
      if (new_state.gameHistoryIndex > 0) {
        new_state.gameHistoryIndex -= 1;
        new_state.gameHistory.pop();
        new_state.logs.push('Undoing turn ' + new_state.gameHistory[new_state.gameHistoryIndex].turn);
      }
      return new_state;
    });
  }

  onTileClicked(x, y) {
    const clonedGameState = deepCopy(self.currentGame());
    let log_message;
    if (!clonedGameState.board_tiles[x][y]) {
      const captured = Actions.captureTile(clonedGameState.board_tiles, x, y, self.currentPlayer());
      if (captured > 0) {
        if (self.currentPlayer() === 1) {
          clonedGameState.board_tiles[x][y] = 1;
          clonedGameState.whiteScore += captured + 1;
          clonedGameState.blackScore -= captured;
          log_message = clonedGameState.turn + ': White occupies ' + x + ':' + y;
        } else {
          clonedGameState.board_tiles[x][y] = -1;
          clonedGameState.whiteScore -= captured;
          clonedGameState.blackScore += captured + 1;
          log_message = clonedGameState.turn + ': Black occupies ' + x + ':' + y;
        }
        clonedGameState.turn += 1;
        self.saveNextGameHistory(clonedGameState);
      } else {
        self.addLog('Invalid Move at ' + x + ':' + y);
      }
      self.addLog(log_message);
    }
  }

  addLog(message) {
    self.setState((state) => {
      const new_state = deepCopy(state);
      new_state.logs.push(message);
      return new_state;
    });
  }

  saveNextGameHistory(game) {
    self.setState((state) => {
      const new_state = deepCopy(state);
      if (!new_state.gameHistory) {
        new_state.gameHistory = [];
      }
      new_state.gameHistory.push({...game});
      if (new_state.gameHistory.length > 5) {
        new_state.gameHistory.shift();
      }
      new_state.gameHistoryIndex = new_state.gameHistory.length - 1;
      return new_state;
    });
  }

  render() {
    return (
      <div id="game">
        <InfoPanel currentPlayer={ self.currentPlayer()} turn={self.currentGame().turn} logs={self.state.logs}
                   whiteScore={self.currentGame().whiteScore} blackScore={self.currentGame().blackScore}
         newGame = { self.onNewGame } />
        <div id="game-board">
          <Board boardTiles={self.currentGame().board_tiles} gameHistoryIndex={self.state.gameHistoryIndex }
                 currentPlayer={ self.currentPlayer()} onTileClicked={ self.onTileClicked }
                 skipTurn={self.onSkipTurn} undoTurn={self.onUndoMove} />
        </div>
      </div>
    );
  }
}