import React, { Component } from 'react';
import PlayerHead from "./GamesHead";
import Players from "./AllGames";

class Games extends Component {
    render() {
        return (
            <table>
                <PlayerHead />
                <Players />
            </table>
        );
    }
}

export default Games;