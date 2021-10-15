import React from 'react';
import './styles/index.scss';
import store from '../src/components/Todo/store';
import Game from './components/Game/game';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Weather from './components/Weather/weather';
import Todo from './components/Todo/todo';
import BounceLoader from "react-spinners/BounceLoader";

class App extends React.Component {
    componentDidMount = () => {
        store.getLoadingDelay();
    }

    render = () => {
        return (
            <>
                {store.loading ?
                    <div className="spinner">
                        <BounceLoader />
                    </div>
                    :
                    <BrowserRouter>
                        <Navbar />
                        <div className="app-wrapper">
                            <Route path='/weather' component={Weather}/>
                            <Route path='/game' component={Game}/>
                            <Route path='/todo' component={Todo}/>
                        </div>
                    </BrowserRouter>
                }
            </>
        )
    }
}

export default App;
