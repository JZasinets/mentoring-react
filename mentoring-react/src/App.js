import React from 'react';
import './styles/index.scss';
import Game from './components/Game/game';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Weather from './components/Weather/weather';
import Todo from './components/Todo/todo';
import Spinner from './spinner';

class App extends React.Component {
    state = {
        loading: true
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({loading: false})
        }, 3000);
    }

    render = () => {
        return (
            <>
                {this.state.loading ?
                    <div className="spinner">
                        <Spinner />
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
