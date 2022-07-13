import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import SingleDate from './SingleDate';
import MultipleDates from './MultipleDates';
import './App.css';



// single query: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-02-21 //

const App = () => {

    return (
        <Router>
        <div className = 'app'>
            <h1>Welcome to APOD Search!</h1>
            <h2>Search for a <Link to = '/single'>single</Link> image, or search for a <Link to = 'range'>date range</Link>.</h2>
            <Switch>
                <Route path = '/' exact>
                    <Home />
                </Route>
                <Route path = '/single'>
                    <SingleDate />
                </Route>
                <Route path = '/range'>
                    <MultipleDates />
                </Route>
            </Switch>
        </div>
        </Router>
    );
}

export default App;