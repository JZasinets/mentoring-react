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
            status = 'Выиграл: ' + winner;
        } else if (!current.squares.includes(null)) {
            status = 'Игра окончилась вничью';
        } else {
            status = 'Следующий код: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares = {current.squares}
                        onClick = {(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <ol>{ moves }</ol>
                </div>
            </div>
        );
    }
}

export default Game;
