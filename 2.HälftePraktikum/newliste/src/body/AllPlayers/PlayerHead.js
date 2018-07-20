import React, { Component } from 'react';

class PlayerHead extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Spiel</td>
                    <td>Score</td>
                </tr>
            </thead>
        );
    }
}

export default PlayerHead;