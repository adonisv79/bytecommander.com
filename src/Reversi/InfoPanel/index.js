import React, {Component} from 'react'

function showActivePlayer(currentPlayer) {
    if (currentPlayer === 1) {
        return "White"
    } else {
        return "Black"
    }
}

function showLogs(logs) {
    let text = ''
    const start_index = logs.length>= 10? logs.length -10: 0
    for (let i = start_index; i< logs.length; i++) {
        text += logs[i] + '\n'
    }
    return <textarea className="logs-list" value={text}/>
}

export default class InfoPanel extends Component {
    render () {
        let white_player_class = 'player-bar', black_player_class = 'player-bar'
        if (this.props.currentPlayer === 1) {
            white_player_class += ' current-player'
        } else if (this.props.currentPlayer === -1) {
            black_player_class += ' current-player'
        }
        return (
            <div className="info-panel">
                <div>
                    <h2>REVERSI</h2>
                    <p>the goal is to capture as many areas as possible. For the full instructions, please see <a target="new" href="https://en.wikipedia.org/wiki/Reversi">the Wikipedia guide on Reversi</a></p>
                </div>
                <div className="info-panel-status">It is { showActivePlayer(this.props.currentPlayer)}'s turn</div>
                <div className={white_player_class}>
                    <svg className="player-icon" height="13" width="13">
                        <circle cx="6" cy="6" r="6" stroke="black" strokeWidth="1" fill="white" />
                    </svg>
                    White Player: { this.props.whiteScore }
                </div>
                <div className={black_player_class}>
                    <svg className="player-icon" height="13" width="13">
                        <circle cx="6" cy="6" r="6" stroke="black" strokeWidth="1" fill="black" />
                    </svg>
                    Black Player: { this.props.blackScore }
                </div>

                {showLogs(this.props.logs)}
                <button onClick={this.props.newGame}>New Game</button>
            </div>
        )
    }
}