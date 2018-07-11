import React, { Component } from 'react';
import recipes from './store/Recipes'
import Home from './pages/home'
import RecipeIndex from './pages/RecipeIndex'
import RecipeDetail from './pages/RecipeDetail'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <div>
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/index" component={RecipeIndex} />
                    <Route exact path="/details" component={RecipeDetail} />
                </div>
            </Router
            </div>
        );
    }
}

export default App;
