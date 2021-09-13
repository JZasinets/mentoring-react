import React from 'react';
import Square from './square';

class Board extends React.Component {
    renderBoard = () => {
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

    renderRow = (row) => {
        let boardRow = [];
        for (let column = 0; column < 3; column++) {
            boardRow = [...boardRow, this.renderSquare((row * 3) + column)];
        }

        return boardRow;
    }

    renderSquare = (square) => {
        return (
            <Square
                key={square}
                value={this.props.squares[square]}
                onClick={() => this.props.onClick(square)}
                winner={(this.props.winner?.includes(square))}
            />
        );
    }

    render = () => {
        return (
            <div>
                {this.renderBoard()}
            </div>
        );
    }
}

export default Board;
