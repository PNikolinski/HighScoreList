import React, { Component } from 'react';

class AddGame extends Component {
    constructor(){
        super()
        this.state ={
            gameName: '',
            gameDescr: ''
        }

        this.handleFormChange = this.handleFormChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }


    handleFormChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitForm(){
        fetch('http://localhost:4000/game', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                gameName: this.state.gameName,
                gameDesc: this.state.gameDescr
            })
        })
        .then(this.resetForm())
        .catch(err => console.log(err))
    }
    resetForm(){
        this.setState({
            gameName: '',
            gameDescr: ''
        })
    }
    render() {
        return (
            <React.Fragment>
                <form action='#'>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Name
                                </td>
                                <td>
                                    <input type="text" name="gameName" placeholder="Please enter the name of the game"  value={this.state.gameName} onChange={this.handleFormChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Description
                                </td>
                                <td>
                                    <textarea 
                                     name="gameDescr" 
                                     placeholder="Please enter some information about the game"
                                     value={this.state.gameDescr} 
                                     onChange={this.handleFormChange}
                                     />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={() => this.resetForm}>Reset</button>
                                </td>
                                <td>
                                    <button onClick={() => this.submitForm()}>Submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </React.Fragment>
        );
    }
}

export default AddGame;