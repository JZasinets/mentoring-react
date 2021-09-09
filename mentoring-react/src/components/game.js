import React from 'react';
import calculateWinner from './calculateWinner';
import Board from './board';
import MovesButtons from './movesButtons';

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

    handleClick(square) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const positionColumn = (square % 3) + 1;
        const positionRow = Math.floor(square / 3) + 1;

        if (calculateWinner(squares) || squares[square]) {
            return;
        }
        squares[square] = this.state.xIsNext ? 'X' : 'O';
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

    getSortHistory(moves) {
        return this.state.sortHistory ? moves : moves.reverse();
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                `Перейти к ходу # ${move}. Позиция [${step.positionColumn}, ${step.positionRow}].` :
                'К началу игры';
            return <MovesButtons stepNumber={this.state.stepNumber} desc={desc} move={move} jumpTo={this.jumpTo}/>;
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
                        onClick = {(event) => this.handleClick(event)}
                        winner={winner && winner.winLine}
                    />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <button onClick={() => this.sortHandleClick()}>{ sortButton }</button>
                    <ol>{this.getSortHistory(moves)}</ol>
                </div>
            </div>
        );
    }
}

export default Game;
