import React, { Component } from 'react';

const rangKey = "Platz"
const nameKey = "Name"
const scoreKey = "Punkte" 

class HighScoreHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <thead>
                    <tr>
                        <th>{rangKey}</th>
                        <th>{nameKey}</th>
                        <th>{scoreKey}</th>
                    </tr>
                </thead>
            </React.Fragment>
        );
    }
}

export default HighScoreHeader;