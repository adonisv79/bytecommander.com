import React, { Component } from 'react';
import { Container, Grid, Hidden } from '@material-ui/core';
import Board from './Board';
import InfoPanel from './InfoPanel';
import Actions from './actions';
import './index.css';

let self;

function generateNewGameState() {
  const newState = {
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

  newState.gameHistory.push({
    turn: 1,
    whiteScore: 2,
    blackScore: 2,
    board_tiles: newBoard,
  });

  return newState;
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

  onNewGame() {
    self.setState(() => {
      return generateNewGameState();
    });
    self.addLog('A new game begins...');
  }

  onSkipTurn() {
    self.setState((state) => {
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
    self.setState((state) => {
      const newState = deepCopy(state);
      if (newState.gameHistoryIndex > 0) {
        newState.gameHistoryIndex -= 1;
        newState.gameHistory.pop();
        newState.logs.push(`Undoing turn ${newState.gameHistory[newState.gameHistoryIndex].turn}`);
      }
      return newState;
    });
  }

  onTileClicked(x, y) {
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

  addLog(message) {
    self.setState((state) => {
      const newState = deepCopy(state);
      newState.logs.push(message);
      return newState;
    });
  }

  saveNextGameHistory(game) {
    self.setState((state) => {
      const newState = deepCopy(state);
      if (!newState.gameHistory) {
        newState.gameHistory = [];
      }
      newState.gameHistory.push({ ...game });
      if (newState.gameHistory.length > 5) {
        newState.gameHistory.shift();
      }
      newState.gameHistoryIndex = newState.gameHistory.length - 1;
      return newState;
    });
  }

  render() {
    return (
      <Grid container id="game" spacing={3}>
        <Hidden smDown>
          <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
            <InfoPanel
              currentPlayer={self.currentPlayer()}
              turn={self.currentGame().turn}
              logs={self.state.logs}
              whiteScore={self.currentGame().whiteScore}
              blackScore={self.currentGame().blackScore}
              newGame={self.onNewGame}
            />
          </Grid>
        </Hidden>
        <Grid item xs={8} sm={9} md={9} lg={9} xl={9}>
          <Container align="center">
            <Board
              boardTiles={self.currentGame().board_tiles}
              gameHistoryIndex={self.state.gameHistoryIndex}
              currentPlayer={self.currentPlayer()}
              onTileClicked={self.onTileClicked}
              skipTurn={self.onSkipTurn}
              undoTurn={self.onUndoMove}
            />
          </Container>
        </Grid>
      </Grid>
    );
  }
}
