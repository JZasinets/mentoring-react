import React from 'react';

const Square = React.memo(({ winner, onClick, value }) => {
    return (
        <button
            className={`square ${(winner) ? "square-win" : ""}` }
            onClick={onClick}
        >
            {value}
        </button>
    );
})

export default Square;
