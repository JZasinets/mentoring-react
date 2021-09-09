import React from 'react';

let Square = React.memo((props) => {
    return (
        <button
            className={`square ${(props.winner) ? "square-win" : ""}` }
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
})

export default Square;
