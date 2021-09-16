import React from 'react';

const Navbar = React.memo(() => {
    return (
        <div className="navbar">
            <div>
                <a href="/weather">Погода</a>
            </div>
            <div>
                <a href="/game">Игра</a>
            </div>
            <div>
                <a href="/todo">Todos</a>
            </div>
        </div>
    )
});

export default Navbar;
