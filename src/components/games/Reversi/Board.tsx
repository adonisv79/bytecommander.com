import React from 'react';
import Image from 'next/image'
import styles from './Board.module.css'
import Button from '../../ui/Button'

interface BoardTileProps {
  value: number,
  onTileClicked : Function,
  x: number,
  y: number,
}

function BoardTile(props: BoardTileProps) {
  let token;
  const { value, onTileClicked } = props;
  if (value) {
    if (value === 1) {
      token = <Image width={25} height={25} alt="disc white side up" className={styles.discimage} src="/images/games/reversi/disc-white.svg" />;
    } else {
      token = <Image width={25} height={25} alt="disc black side up" className={styles.discimage} src="/images/games/reversi/disc-black.svg" />;
    }
  }

  return (
    <td
      className={styles.boardtile}
      onClick={() => {
        onTileClicked(props.x, props.y);
      }}
    >
      {token}
    </td>
  );
}

interface BoardProps {
  undoTurn: Function,
  skipTurn: Function,
  currentPlayer: number,
  gameHistoryIndex: number,
  boardTiles: number[][],
  onTileClicked: Function,
}

export default function Board(props: BoardProps) {
  const {
    gameHistoryIndex, boardTiles, currentPlayer, onTileClicked, undoTurn, skipTurn,
  } = props;
  const rows = [];
  for (let y = 0; y < 8; y += 1) {
    const columns = [];
    for (let x = 0; x < 8; x += 1) {
      columns.push(
        <BoardTile
          key={'tile=' + x + ':' + y}
          x={x}
          y={y}
          value={boardTiles[x][y]}
          onTileClicked={onTileClicked}
        />,
      );
    }
    rows.push(<tr key={'row=' + y}>{columns}</tr>);
  }

  let className = 'reversi-board';
  if (currentPlayer === 1) {
    className += ' white-turn';
  } else if (currentPlayer === -1) {
    className += ' black-turn';
  }

  return (
    <div>
      <div>
        <table className={styles.gameviewport}>
          <tbody className={styles.boardtable}>
            {rows}
          </tbody>
        </table>
      </div>
      <div>
        <Button
          onClick={()=>{undoTurn();}}
          disabled={gameHistoryIndex <= 0}
        >
          Undo
        </Button>
        &nbsp;
        <Button
          onClick={()=>{skipTurn();}}
        >
          Skip {currentPlayer === 1? 'white' : 'black'}'s turn
        </Button>
      </div>
    </div>
  );
}
