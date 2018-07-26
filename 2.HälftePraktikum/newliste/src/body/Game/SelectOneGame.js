import React, { Component } from 'react';
import GameForm from "./GameForm";
import Game from './Game';

class SelectOneGame extends Component {
    constructor() {
        super()
        this.state = {
            hasSubmitted: true,
            gameName: '',
            gameDescr: '',
            gameID: ''
        }
    }
    getGame(gameID) {
        if (this.state.hasSubmitted) {
            this.setState({
                hasSubmitted: false
            })
            fetch('http://localhost:4000/games/' + gameID, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(parsedJSON => this.setState({
                    gameName: parsedJSON[0].gameName,
                    gameDescr: parsedJSON[0].gameDescr,
                    gameID: parsedJSON[0].gameID
                }))
                .catch(err => console.log(err))
        }
    }

    changeGameSearch() {
       this.setState({
           hasSubmitted: true
       })
    }

    Game() {
        if (this.state.hasSubmitted) {
            return <GameForm selectGame={(gameID) => this.getGame(gameID)} />
        } else {
            return <Game changeGame={() => this.changeGameSearch()} gameName={this.state.gameName} gameDescr={this.state.gameDescr}/>
        }
    }

    render() {
        return this.Game()
    }
}

export default SelectOneGame;