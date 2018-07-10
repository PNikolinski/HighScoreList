import React, { Component } from 'react';
import './list.css';

class HighScoreHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Platz</th>
                    <th className="left">Name</th>
                    <th>Score</th>
                </tr>
            </thead>
        );
    }
}

export default HighScoreHeader;