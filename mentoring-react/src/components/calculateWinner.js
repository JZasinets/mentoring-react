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
        const [first, second, third] = lines[square];
        if (squares[first] && squares[first] === squares[second] && squares[first] === squares[third]) {
            return {
                winner: squares[first],
                winLine: lines[square],
            };
        }
    }
    return null;
}

export default calculateWinner;
