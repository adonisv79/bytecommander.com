import React from 'react';
import PropTypes from 'prop-types';


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
    <div className="game-area">
      <table className={className}>
        <tbody>
          {rows}
        </tbody>
      </table>
      <div>
        <button type="button" onClick={undoTurn} disabled={gameHistoryIndex <= 0}>
          Undo previous turn
        </button>
        <button type="button" onClick={skipTurn}>Skip turn</button>
      </div>
    </div>
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
