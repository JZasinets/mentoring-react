let calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let square = 0; square < lines.length; square++) {
        const [firstSquare, secondSquare, thirdSquare] = lines[square];
        if (squares[firstSquare] && squares[firstSquare] === squares[secondSquare] && squares[firstSquare] === squares[thirdSquare]) {
            return {
                winner: squares[firstSquare],
                winLine: lines[square],
            };
        }
    }
    return null;
}

export default calculateWinner;
