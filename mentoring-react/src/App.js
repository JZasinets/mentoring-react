import React from 'react';
import './styles/index.scss';
import Game from './components/Game/game';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Weather from './components/Weather/weather';
import Todo from './components/Todo/todo';
import Spinner from './spinner';
import store from "./components/Todo/store";
import { observer } from "mobx-react";

class App extends React.Component {
    // state = {
    //     loading: true
    // }
    //
    // componentDidMount = () => {
    //     this.timer = setTimeout(() => {
    //         this.setState({loading: false})
    //     }, 3000);
    // }
    //
    // componentWillUnmount() {
    //     clearInterval(this.timer);
    // }
    componentDidMount() {
        store.startApplication();
    }

    render = () => {
        return (
            <>
                {/*поиск  __DEV__ (react dev flag)*/}
                {store.loading && (process.env.NODE_ENV !== "production") ?
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

export default observer(App);
