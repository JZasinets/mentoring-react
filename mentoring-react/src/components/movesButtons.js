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

export default moves;