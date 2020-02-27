import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Container, Box } from '@material-ui/core';
import UndoIcon from '@material-ui/icons/Undo';
import SkipNextIcon from '@material-ui/icons/SkipNext';

function BoardTile(props) {
  let token;
  const { value, onTileClicked } = props;
  if (value) {
    if (value === 1) {
      token = <img alt="disc white side up" className="disc" src="/images/disc-white.svg" />;
    } else {
      token = <img alt="disc black side up" className="disc" src="/images/disc-black.svg" />;
    }
  }

  return (
    <td
      className="game-board-tile"
      onClick={() => {
        onTileClicked(props.x, props.y);
      }}
    >
      {token}
    </td>
  );
}

BoardTile.propTypes = {
  onTileClicked: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default function Board(props) {
  const {
    gameHistoryIndex, boardTiles, currentPlayer, onTileClicked, undoTurn, skipTurn,
  } = props;
  const rows = [];
  for (let y = 0; y < 8; y += 1) {
    const columns = [];
    for (let x = 0; x < 8; x += 1) {
      columns.push(
        <BoardTile
          x={x}
          y={y}
          value={boardTiles[x][y]}
          onTileClicked={onTileClicked}
        />,
      );
    }
    rows.push(<tr>{columns}</tr>);
  }

  let className = 'othello-board';
  if (currentPlayer === 1) {
    className += ' white-turn';
  } else if (currentPlayer === -1) {
    className += ' black-turn';
  }

  return (
    <Container align="center" spacing={3}>
      <Box spacing={3}>
        <table className={className}>
          <tbody>
            {rows}
          </tbody>
        </table>
      </Box>
      <Box spacing={3}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<UndoIcon />}
          onClick={undoTurn}
          disabled={gameHistoryIndex <= 0}
        >
          Undo previous turn
        </Button>
        &nbsp;
        <Button
          variant="contained"
          color="primary"
          startIcon={<SkipNextIcon />}
          onClick={skipTurn}
        >
          Skip turn
        </Button>
      </Box>
    </Container>
  );
}

Board.propTypes = {
  undoTurn: PropTypes.func.isRequired,
  skipTurn: PropTypes.func.isRequired,
  currentPlayer: PropTypes.number.isRequired,
  gameHistoryIndex: PropTypes.number.isRequired,
  boardTiles: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  onTileClicked: PropTypes.func.isRequired,
};
