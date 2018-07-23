import React, { Component } from 'react';

class Rows extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.gameID}</td>
                <td>{this.props.gameName}</td>
                <td>{this.props.gameDescr}</td>
            </tr>
        );
    }
}

export default Rows;