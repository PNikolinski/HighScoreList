import React, { Component } from 'react';
import Rows from './playerRows'

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
        fetch('http://localhost:4000/players', {
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
            temp.push(<Rows playerID={element.playerID} userName={element.userName} key={i++} />)
        });
        this.setState({
            rowElements: temp
        })
    }
    render() {
        return (
            <table border="1">
            <thead>
                <tr>
                    <td>PlayerID</td>
                    <td>PlayerName</td>
                </tr>
            </thead>
                <tbody>
                    {this.state.rowElements}
                </tbody>
            </table>
        );
    }
}

export default AllGames;