import React, { Component } from 'react';
import { Grid, Col, Table } from "react-bootstrap"

class AddPlayer extends Component {
    constructor() {
        super()
        this.state = {
            playerName: ''
        }
        this.handleFormChange = this.handleFormChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    handleFormChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitForm() {
        fetch('http://localhost:4000/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                playerName: this.state.playerName
            })
        })
            .then(this.resetForm())
            .catch(err => console.log(err))
    }
    resetForm() {
        this.setState({
            playerName: ''
        })
    }
    render() {
        return (
            <Grid>
                <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                </Col>
                <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                    <form action='/players'>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        Name
                                </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <input type="text" name="playerName" placeholder="Please enter your player name" value={this.state.playerName} onChange={this.handleFormChange} />
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
                        </Table>
                    </form>
                </Col>
                <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                </Col>
            </Grid>
        );
    }
}

export default AddPlayer;