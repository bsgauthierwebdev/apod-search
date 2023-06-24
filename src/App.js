import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Today from './Today';
import SingleDate from './SingleDate';
import MultipleDates from './MultipleDates';
import Test from './Test';
import './App.css';



// single query: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-02-21 //

const App = () => {

    return (
        <>
        <Router>
        <div className = 'Nav'>
            <Header />
        </div>
        <div className = 'app'>
            <Switch>
                <Route path = '/' exact>
                    <Home />
                </Route>
                <Route path = '/today'>
                    <Today />
                </Route>
                <Route path = '/single'>
                    <SingleDate />
                </Route>
                <Route path = '/range'>
                    <MultipleDates />
                </Route>
                <Route path = '/test'>
                    <Test />
                </Route>
            </Switch>
        </div>
        </Router>
        </>
    );
}

export default App;