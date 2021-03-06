import React, { Component } from 'react';
import { Grid, Col, Table } from "react-bootstrap"
class Player extends Component {
    comingSoon() {
        alert("Coming Soon™")
    }
    render() {
        return (
            <Grid>
                <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                </Col>
                <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                    <form>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <td>
                                        ID
                            </td>
                                    <td>
                                        {this.props.playerID}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Name
                            </td>
                                    <td>
                                        {this.props.playerName}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button onClick={() => this.props.changePlayer()}>Search new Player</button>
                                    </td>
                                    <td>
                                        <button onClick={() => this.comingSoon()}>Show Games</button>
                                    </td>
                                </tr>
                            </thead>
                        </Table>
                    </form>
                </Col>
                <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                </Col>

            </Grid>
        );
    }
}

export default Player;