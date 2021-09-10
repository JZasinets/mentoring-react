import React from 'react';
import {useMemo} from 'react';

const MovesButtons = React.memo(({ move, stepNumber, desc, jumpTo }) => {
    const chooseClassButton = useMemo(() => (stepNumber === move) ? "activeButton" : "inactiveButton", [stepNumber, move]);

    return (
        <li key={move}>
            <button
                onClick={() => {jumpTo(move)}}
                className={chooseClassButton}
            >
                {desc}
            </button>
        </li>
    );
});

export default MovesButtons;