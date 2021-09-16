import React from 'react';
import './styles/index.scss';
import Game from './components/Game/game';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Weather from './components/Weather/weather'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="app-wrapper">
                <Route path='/weather' component={Weather}/>
                <Route path='/game' component={Game}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
