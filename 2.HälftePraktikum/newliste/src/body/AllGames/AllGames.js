import React, { Component } from 'react';
import Rows from './gameRows'

class AllGames extends Component {
    constructor() {
        super()
        this.state = {
            rowElements: []
        }
    }

    componentDidMount() {
        this.getElements()
    }

    getElements() {
        fetch('http://localhost:4000/games', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(parsedJSON => this.setElements(parsedJSON))
            .catch(err => console.log(err))
    }
    setElements(elements) {
        var temp = []
        var i = 0
        elements.forEach(element => {
            temp.push(<Rows gameID={element.gameID} gameName={element.gameName} gameDescr={element.gameDescr} key={i++}/>)
        });
        this.setState({
            rowElements: temp
        })
    }
    render() {
        return (
            <tbody>
                {this.state.rowElements}
            </tbody>
        );
    }
}

export default AllGames;