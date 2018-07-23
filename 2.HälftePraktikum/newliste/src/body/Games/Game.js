import React, { Component } from 'react';

class Game extends Component {
componentDidMount(){
    this.fillState()
}
fillState(){
    console.log(this.props.gameElement)
}
    render() {
        return (
            <React.Fragment>
                <form>
                    <table border='1'>
                        <thead>
                            <tr>
                                <td>
                                    Name
                            </td>
                                <td>
                                    {this.props.gameName}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Beschreibung
                            </td>
                                <td>
                                    {this.props.gameDescr}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={() => this.props.changeGame()}>Search new Game</button>
                                </td>
                                <td>
                                    <button onClick={() => this.fillState()}>Show Players</button>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </form>


            </React.Fragment>
        );
    }
}

export default Game;