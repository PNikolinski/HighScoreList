import React, { Component } from 'react';
import PlayerHead from "./GamesHead";
import Players from "./AllGames";
import { Grid, Table } from "react-bootstrap"

class Games extends Component {
    render() {
        return (
            <Grid>
                <Table bordered hovered>
                    <PlayerHead />
                    <Players />
                </Table>
            </Grid>
        );
    }
}

export default Games;