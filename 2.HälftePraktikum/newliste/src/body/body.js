import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home'
import Games from './AllPlayers/games'
import GamesForm from './Player/form'

class Body extends Component {
    state = {}
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/games' component={Games}/>
                    <Route path='/gameform' component={GamesForm}/>
                </Switch>
            </main>
        );
    }
}

export default Body;