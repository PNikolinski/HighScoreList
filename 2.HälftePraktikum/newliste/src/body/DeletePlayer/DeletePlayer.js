import React, { Component } from 'react';
import { Grid, Col, Table } from "react-bootstrap"

class DeletePlayer extends Component {
    constructor() {
        super()
        this.state = {
            player: []
        }
    }
    componentDidMount() {
        this.fillinArray()
    }
    fillinArray() {
        fetch("http://localhost:4000/users", {
            method: "GET"
        })
            .then(response => response.json())
            .then(paresedJSON => this.putInArray(paresedJSON))
            .catch(err => console.log(err))
    }
    putInArray(elements) {
        var temp = []
        temp.push(<option key={0} value={0}>Bitte wähle einen Spieler aus</option>)
        elements.forEach(element => {
            temp.push(<option value={element.playerID} key={element.playerID}>{element.userName}</option>)
        });
        this.setState({
            player: temp
        })
    }
    submitForm() {
        const playerID = document.getElementById('playerList').value
        fetch("http://localhost:4000/user/" + playerID, {
            method: "DELETE",
        })
            .then(console.log("Deleting user..."))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Grid>
                <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                </Col>
                <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                    <form action="/players">
                        <Table>
                            <tbody>
                                    <tr>
                                        <td>
                                            Name
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <select id='playerList'>
                                                {this.state.player}
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
                        </Table>
                    </form>
                </Col>
                <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                </Col>
            </Grid>
        );
    }
}

export default DeletePlayer;