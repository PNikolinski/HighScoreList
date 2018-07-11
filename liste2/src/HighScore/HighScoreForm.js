import React, { Component } from 'react';

const minimumNameLength = 4
const maximumNameLength = 15

class HighScoreForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            score: ''
        }

        this.fillInForm = this.fillInForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    fillInForm(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    resetForm(){
        document.getElementById("name").focus()
        this.setState({
            name: '',
            score: ''
        })
        
    }

    validateInputs = (event) => {
        event.preventDefault()
        var scoreIsValid = this.validateScore()
        var nameIsValid = this.validateName()

        if (nameIsValid && !scoreIsValid) {
            alert("Enter a score greater than 0")
        } else if (!nameIsValid && scoreIsValid) {
            alert("Enter a name which is between 5 and 15 characters long")
        } else if (!nameIsValid && !scoreIsValid) {
            alert("Please enter a valid name and score")
        } else {
            this.newElement(this.state.name, this.state.score)
        }
    }

    validateScore() {
        return (this.state.score >= 0 && this.state.score !== "") ? true : false
    }

    validateName() {
        return (this.state.name.length >= minimumNameLength && this.state.name.length <= maximumNameLength) ? true : false
    }
    newElement(name, score) {
        fetch("http://localhost:4000/",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                user : name,
                score: score
            })
        })
        
    }

    render() {
        return (
            <React.Fragment>
                {/*Complete form to get new Elements*/}
                <form onSubmit={this.resetForm}>
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan="3">
                                    <label>
                                        {/*Input Field for name*/}
                                        Name <input type="text" name="name" value={this.state.name} onChange={this.fillInForm} id="name" />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <label>
                                        {/*Input Field for score*/}
                                        Score <input type="number" name="score" value={this.state.score} onChange={this.fillInForm} id="score" />
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {/*Submit button for submitting form*/}
                                    <button onClick={this.validateInputs}>Einfügen</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </React.Fragment>
        );
    }
}

export default HighScoreForm;