import React from 'react';
import Square from './square';

class Board extends React.Component {
    renderBoard() {
        let boardSquares = [];
        for (let row = 0; row < 3; row++) {
            boardSquares = [...boardSquares, (
                <div className="board-row" key={row}>
                    {this.renderRow(row)}
                </div>
            )];
        }

        return boardSquares;
    }

    renderRow(row) {
        let boardRow = [];
        for (let column = 0; column < 3; column++) {
            boardRow = [...boardRow, this.renderSquare((row * 3) + column)];
        }

        return boardRow;
    }

    renderSquare(i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                winner={this.props.winner && this.props.winner.includes(i)}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderBoard()}
            </div>
        );
    }
}

export default Board;
