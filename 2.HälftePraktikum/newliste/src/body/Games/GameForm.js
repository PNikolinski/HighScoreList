import React, { Component } from 'react';

class GameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectList: [],
            selectedItem: ''
        }
        this.fillInForm = this.fillInForm.bind(this);
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        fetch('http://localhost:4000/games', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(parsedJSON => this.getListData(parsedJSON))
            .catch(err => console.log(err))
    }

    getListData(listData) {
        var list = []
        list.push(<option key={0} value=''>Bitte wähle ein Spiel aus</option>)
        listData.forEach(element => {
            list.push(<option key={element.gameID} value={element.gameID}>{element.gameName}</option>)
        });
        this.setState({
            selectList: list
        })
    }
    fillInForm() {
        var temp = document.getElementById('gameList').value;
        this.setState({
            selectedItem: temp
        })
    }
    render() {
        return (
            <form action="" method="post">
                <table>
                    <thead>
                        <tr>
                            <td colSpan="2">
                                Please select the name of the game
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select id='gameList' onChange={this.fillInForm}>
                                    {this.state.selectList}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><button>Reset</button></td>
                            <td><button onClick={() => this.props.selectGame(this.state.selectedItem)}>Submit</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default GameForm;