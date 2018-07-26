import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home'
import Games from './AllGames/games'
import Game from './Game/SelectOneGame'
import AddGame from './AddGame/addGame'
import DeleteGame from './DeleteGame/deleteGame'

import Players from './Players/Players'
import Player from './Player/SelectOnePlayer'
import AddPlayer from './AddPlayer/AddPlayer'
import DeletePlayer from './DeletePlayer/DeletePlayer'
import { Grid } from 'react-bootstrap';

class Body extends Component {
    render() {
        return (
            <Grid>
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
            </Grid>
        );
    }
}

export default Body;