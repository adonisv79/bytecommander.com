import React, { Component } from 'react';
import Board from './Board';
import InfoPanel from './InfoPanel';
import Actions from './actions'
import './index.css'

let self;
function createNewBoard() {
    const new_board = new Array(8)
    for (let x = 0; x < 8; x++) { //generate the rows per X-axis
        new_board[x] = new Array(8)
    }
    //set the default starting tiles
    new_board[3][3] = 1
    new_board[4][4] = 1
    new_board[4][3] = -1
    new_board[3][4] = -1

    return new_board
}

const FRESH_STATE = {
    turn: 1,
    white_score : 2,
    black_score : 2,
    board_tiles: createNewBoard(),
    logs: new Array()
}

export default class Reversi extends Component {
    constructor(props) {
        super(props)
        self = this
        this.state = { ...FRESH_STATE }
        this.state.logs.push("Welcome to ALV\'s Othello demo")
    }

    addLog(message) {
        self.setState( state => {
            const new_state = { ...state }
            new_state.logs.push(message);
            return new_state
        } )
    }

    currentPlayer() {
        return self.state.turn % 2 === 0 ? -1 : 1
    }

    onNewGame() {
        self.setState( state => {
            const new_state = { ...FRESH_STATE }
            new_state.board_tiles = createNewBoard()
            new_state.logs.push('A new game begins...')
            return new_state
        })
    }

    onSkipTurn() {
        self.setState( state => {
            const new_state = { ...state }
            new_state.turn++
            if (self.currentPlayer() === 1) {
                self.addLog(self.state.turn + ': White skips their turn');
            } else if (self.currentPlayer() === -1) {
                self.addLog(self.state.turn + ': Black skips their turn');
            }
            return new_state
        })
    }

    onTileClicked = (x, y) => {
        console.log('user clicked ' + x + ':' + y)
        if (!this.state.board_tiles[x][y]) {
            const captured = Actions.captureTile(self.state.board_tiles, x,y,self.currentPlayer())
            if (captured > 0){
                this.setState( state => {
                    const new_state = { ...state }
                    if (this.currentPlayer() === 1) {
                        new_state.board_tiles[x][y] = 1
                        new_state.white_score += captured + 1
                        new_state.black_score -= captured
                        self.addLog(self.state.turn + ': White occupies ' + x + ':' + y);
                    } else {
                        new_state.board_tiles[x][y] = -1
                        new_state.white_score -= captured
                        new_state.black_score += captured + 1
                        self.addLog(self.state.turn + ': Black occupies ' + x + ':' + y);
                    }
                    new_state.turn += 1
                    return new_state
                })
            } else {
                this.setState( state => {
                    const new_state = { ...state }
                    self.addLog('Invalid Move at ' + x + ':' + y);
                    return new_state
                })
            }
        }
    }

    render() {
        return (
            <div id="game">
                <InfoPanel currentPlayer={ this.currentPlayer()} turn={this.state.turn} logs={this.state.logs}
                       whiteScore={this.state.white_score} blackScore={this.state.black_score}
                       newGame = { this.onNewGame } />
                <div id="game-board">
                    <Board boardTiles={this.state.board_tiles} currentPlayer={ this.currentPlayer()}
                           onTileClicked={ this.onTileClicked } skipTurn={this. onSkipTurn} />
                </div>
            </div>
        )
    }
}