import React from 'react';
import calculateWinner from './calculateWinner';
import Board from './board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            sortHistory: true,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const positionColumn = (i % 3) + 1;
        const positionRow = Math.floor(i / 3) + 1;

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                positionColumn: positionColumn,
                positionRow: positionRow,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    sortHandleClick() {
        this.setState({
            sortHistory: !this.state.sortHistory,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                `Перейти к ходу # ${move}. Позиция [${step.positionColumn}, ${step.positionRow}].` :
                'К началу игры';
            return (
                <li key={move}>
                    <button
                        onClick={() => {this.jumpTo(move)}}
                        className={(this.state.stepNumber === move) ? "activeButton" : "inactiveButton" }
                    >
                        {desc}
                    </button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Выиграл: ' + winner.winner;
        } else if (!current.squares.includes(null)) {
            status = 'Игра окончилась вничью';
        } else {
            status = 'Следующий код: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        let sortButton;
        if (this.state.sortHistory) {
            sortButton = 'По убыванию';
        } else {
            sortButton = 'По возрастанию';
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares = {current.squares}
                        onClick = {(i) => this.handleClick(i)}
                        winner={winner && winner.winLine}
                    />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <button onClick={() => this.sortHandleClick()}>{ sortButton }</button>
                    <ol>{ this.state.sortHistory ? moves : moves.reverse() }</ol>
                </div>
            </div>
        );
    }
}

export default Game;
