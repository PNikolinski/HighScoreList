import React, { Component } from 'react';

class DeleteGame extends Component {
    constructor(){
        super()
        this.state ={
            games: []
        }
    }
    componentDidMount(){
        this.fillArray()
    }
    fillArray(){
        fetch('http://localhost:4000/games', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(parsedJSON => this.putIntoArray(parsedJSON))
        .catch(err => console.log(err))
    }
    putIntoArray(elements){
        var temp = []
        temp.push(<option key='0'>Bitte wähle dein Spiel aus</option>)
        elements.forEach(element => {
            temp.push(<option value={element.gameID} key={element.gameID}>{element.gameName}</option>)
        });
        this.setState({
            games: temp
        })
    }
    submitForm(){
        var temp = document.getElementById('gameList').value
        fetch('http://localhost:4000/games/' + temp, {
            method: 'DELETE'
        })
        .then(console.log("Deleting user..."))
        .catch(err => console.log(err))
    }
    render() {
        return (    
            <React.Fragment>
                <form action="/games">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    <select id='gameList'>
                                        {this.state.games}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={() => this.resetForm}>Reset</button>
                                </td>
                                <td>
                                    <button onClick={() => this.submitForm()}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </React.Fragment>
        );
    }
}

export default DeleteGame;