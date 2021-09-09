const MovesButtons = (props) => {
    return (
        <li key={props.move}>
            <button
                onClick={() => {props.jumpTo(props.move)}}
                className={(props.stepNumber === props.move) ? "activeButton" : "inactiveButton" }
            >
                {props.desc}
            </button>
        </li>
    );
};

export default MovesButtons;