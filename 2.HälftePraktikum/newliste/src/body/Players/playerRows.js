import React, { Component } from 'react';

class Rows extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.playerID}</td>
                <td>{this.props.userName}</td>
            </tr>
        );
    }
}

export default Rows;