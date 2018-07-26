import React, { Component } from 'react';
import { Grid, Row, Col, Table } from "react-bootstrap"

class PlayerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectList: [],
            selectedItem: ''
        }
        this.action="#"
        this.fillInForm = this.fillInForm.bind(this);
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        fetch('http://localhost:4000/users', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(parsedJSON => this.getListData(parsedJSON))
            .catch(err => console.log(err))
    }

    getListData(listData) {
        var list = []
        list.push(<option key={0} value=''>Bitte wähle einen Spieler aus</option>)
        listData.forEach(element => {
            list.push(<option key={element.playerID} value={element.playerID}>{element.userName}</option>)
        });
        this.setState({
            selectList: list
        })
    }
    fillInForm() {
        var temp = document.getElementById('playerList').value;
        this.setState({
            selectedItem: temp
        })
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                    </Col>
                    <Col className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                    <form action="/user" method="post">
                        <Table bordered>
                            <thead>
                                <tr>
                                    <td colSpan="2">
                                        Please select the name of the player
                            </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <select id='playerList' onChange={this.fillInForm}>
                                            {this.state.selectList}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><button onClick={() => this.props.selectPlayer(this.state.selectedItem)} >Submit</button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </form>
                    </Col>  
                    <Col  className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default PlayerForm;