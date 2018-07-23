import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home'
import Games from './AllGames/games'
import Game from './Games/SelectOneGame'

class Body extends Component {
    state = {}
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/games' component={Games}/>
                    <Route path='/game' component={Game}/>
                </Switch>
            </main>
        );
    }
}

export default Body;