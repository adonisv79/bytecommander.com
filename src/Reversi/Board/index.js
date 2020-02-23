import React, { Component } from 'react'

function BoardTile(props) {
    let token;
    if (props.value) {
        let fill_color
        if (props.value === 1) {
            token = <img className="disc" src="/images/disc-white.svg" />
        } else {
            token = <img className="disc" src="/images/disc-black.svg" />
        }
    }

    return (
        <td className="game-board-tile"
                onClick={() => {
                    props.onTileClicked(props.x, props.y)
                }}>
            { token }
        </td>
    )
}

export default class Board extends Component {
    render() {
        let rows = []
        for (let y = 0; y < 8; y++) {
            let columns = []
            for (let x = 0; x < 8; x++){
                columns.push(
                    <BoardTile key={'tile_' + x + '_' + y} x={x} y={y} value={this.props.boardTiles[x][y]}
                       onTileClicked={this.props.onTileClicked} />
                   )
            }
            rows.push(<tr key={'row_' + y}>{columns}</tr>)
        }

        let class_name = 'othello-board'
        if (this.props.currentPlayer === 1) {
            class_name += ' white-turn'
        } else if (this.props.currentPlayer === -1) {
            class_name += ' black-turn'
        }

        return (
            <div className="game-area">
                <table className={class_name}>
                    <tbody>
                    { rows }
                    </tbody>
                </table>
                <div>
                    <button onClick={this.props.skipTurn}>Skip turn</button>
                </div>
            </div>
        )
    }
}