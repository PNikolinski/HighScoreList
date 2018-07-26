import React, { Component } from 'react';
import { Grid, Row, Col } from "react-bootstrap";

class Game extends Component {
    comingSoon() {
        alert("Coming Soon™")
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col  className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                    </Col>
                    <Col  className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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
                                        <button onClick={() => this.comingSoon()}>Show Players</button>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </form>
                    </Col>
                    <Col  className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                    </Col>
                </Row>

            </Grid>
        );
    }
}

export default Game;