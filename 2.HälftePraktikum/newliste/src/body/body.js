import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home'
import Games from './AllGames/games'
import Game from './Games/SelectOneGame'
import AddGame from './AddGame/addGame'
import DeleteGame from './DeleteGame/deleteGame'

import Players from './Players/Players'
import Player from './Player/Player'
import AddPlayer from './AddPlayer/AddPlayer'
import DeletePlayer from './DeletePlayer/DeletePlayer'

class Body extends Component {
    render() {
        return (
            <main>
                <Switch>
                    {/* HOME ROUTE */}
                    <Route exact path='/'  component={Home}/>
                    {/* ALL GAME ROUTES */}
                    <Route path='/games'   component={Games}/>
                    <Route path='/game'    component={Game}/>
                    <Route path='/addgame' component={AddGame} />
                    <Route path='/delgame' component={DeleteGame} />
                    {/* ALL PLAYER ROUTES */}
                    <Route path='/players'     component={Players}/>
                    <Route path='/player'      component={Player}/>
                    <Route path='/addplayer'   component={AddPlayer}/>
                    <Route path='/delplayer'   component={DeletePlayer}/>
                </Switch>
            </main>
        );
    }
}

export default Body;