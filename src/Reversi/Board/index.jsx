import React from 'react';
import PropTypes from 'prop-types';

function BoardTile(props) {
  let token;
  if (props.value) {
    if (props.value === 1) {
      token = <img alt="disc white side up" className="disc" src="/images/disc-white.svg" />;
    } else {
      token = <img alt="disc black side up" className="disc" src="/images/disc-black.svg" />;
    }
  }

  return (
    <td
      className="game-board-tile"
      onClick={() => {
          props.onTileClicked(props.x, props.y);
        }}>
      {token}
    </td>
  );
}

export default function Board(props) {
  const rows = [];
  for (let y = 0; y < 8; y++) {
    const columns = [];
    for (let x = 0; x < 8; x++) {
      columns.push(
        <BoardTile
          x={x}
          y={y}
          value={props.boardTiles[x][y]}
          onTileClicked={props.onTileClicked}
        />,
      );
    }
    rows.push(<tr>{columns}</tr>);
  }

  let className = 'othello-board';
  if (props.currentPlayer === 1) {
    className += ' white-turn';
  } else if (props.currentPlayer === -1) {
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
        <button onClick={props.undoTurn} disabled={props.gameHistoryIndex <= 0}>
          Undo previous turn
        </button>
        <button onClick={props.skipTurn}>Skip turn</button>
      </div>
    </div>
  );
}

Board.propTypes = {
  'undoTurn': PropTypes.func,
  'skipTurn': PropTypes.func,
  onTileClicked: PropTypes.func,
  currentPlayer: PropTypes.number,
  'gameHistoryIndex': PropTypes.number,
  'boardTiles': PropTypes.array,
}


BoardTile.propTypes = {
  'value': PropTypes.number,
  'x': PropTypes.number,
  'y': PropTypes.number,
}