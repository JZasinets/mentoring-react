import React from 'react';
import './styles/index.scss';
import Game from './components/Game/game';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Weather from './components/Weather/weather';
import Todo from './components/Todo/todo';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="app-wrapper">
                <Route path='/weather' component={Weather}/>
                <Route path='/game' component={Game}/>
                <Route path='/todo' component={Todo}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
