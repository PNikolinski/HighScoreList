import React, { Component } from 'react';
import PlayerHead from "./PlayerHead";
import Players from "./Players";

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