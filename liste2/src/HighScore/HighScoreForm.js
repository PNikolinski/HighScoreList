import React, { Component } from 'react';

const minimumNameLength = 4
const maximumNameLength = 15

class HighScoreForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            score: ''
        }
        this.names = this.props.checkName

        this.fillInForm = this.fillInForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
//Set state when an event is happening
//Change in name or score field
    fillInForm(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
//If the form ist submitted, clear fields and set focus onto name field
    resetForm = () => {
        
        this.setState({
            name: '',
            score: ''
        })
        document.getElementById("name").focus()
    }

    validateInputs = (event) => {
        event.preventDefault()
        var scoreIsValid = this.validateScore()
        var nameIsValid = this.validateNameLength()
        var nameIsInDatabase = this.validateIsNameInDatabase()

        if (nameIsValid && !scoreIsValid && nameIsInDatabase) {
            alert("Enter a score greater than 0")
        } else if (!nameIsValid && scoreIsValid && nameIsInDatabase) {
            alert("Enter a name which is between 5 and 15 characters long, don't enter a name that is already in the list")
        } else if (!nameIsValid && !scoreIsValid && nameIsInDatabase) {
            alert("Please enter a valid name and score")
        } else {
            this.props.insertIntoDatabase(this.state.name, this.state.score)
        }
    }

    validateScore() {
        return (this.state.score >= 0 && this.state.score !== "") ? true : false
    }

    validateNameLength() {
        return (this.state.name.length >= minimumNameLength && this.state.name.length <= maximumNameLength) ? true : false
    }
    validateIsNameInDatabase(){
        var statement = false
        for (let i = 0; i < this.names.length; i++) {
            if(this.names[i].name === this.state.name){
                console.log("In Database" + i)
                statement = true
                break;
            }
        }
        return statement
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