import React, { Component } from 'react';
import Rows from './playerRows'
import { Table, Grid, Row } from "react-bootstrap"

class AllGames extends Component {
    constructor() {
        super()
        this.state = {
            rowElements: []
        }
    }

    componentDidMount() {
        this.getElements()
    }

    getElements() {
        fetch('http://localhost:4000/users', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(parsedJSON => this.setElements(parsedJSON))
            .catch(err => console.log(err))
    }
    setElements(elements) {
        var temp = []
        var i = 0
        elements.forEach(element => {
            temp.push(<Rows playerID={element.playerID} userName={element.userName} key={i++} />)
        });
        this.setState({
            rowElements: temp
        })
    }
    render() {
        return (
            <Grid>
                <Row className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                </Row>
                <Row className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                <Table striped condensed hover bordered >
                        <thead>
                            <tr>
                                <th>PlayerID</th>
                                <th>PlayerName </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.rowElements}
                        </tbody>
                    </Table>
                </Row>
                <Row className="col-xs-3 col-sm-3 col-md-3 col-lg-3 ">
                </Row>
            </Grid>
        );
    }
}

export default AllGames;