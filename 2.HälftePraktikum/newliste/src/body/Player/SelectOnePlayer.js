import React, { Component } from 'react';
import PlayerForm from "./PlayerForm";
import Player from './Player';

class SelectOnePlayer extends Component {
    constructor() {
        super()
        this.state = {
            hasSubmitted: true,
            userName: '',
            userID: ''
        }
    }
    getPlayer(playerID) {
        if (this.state.hasSubmitted) {
            this.setState({
                hasSubmitted: false
            })
            fetch('http://localhost:4000/user/' + playerID, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(parsedJSON =>  this.setState({
                userID: parsedJSON[0].playerID,
                userName: parsedJSON[0].userName
            })) 
            .catch(err => console.log(err))
        }
    }

    changePlayerSearch() {
       this.setState({
           hasSubmitted: true
       })
    }

    Player() {
        if (this.state.hasSubmitted) {
            return <PlayerForm selectPlayer={(playerID) => this.getPlayer(playerID)} />
        } else {
            return <Player playerName={this.state.userName} playerID={this.state.userID} changePlayer={() => this.changePlayerSearch()} />
        }
    }

    render() {
        return this.Player()
    }
}

export default SelectOnePlayer;