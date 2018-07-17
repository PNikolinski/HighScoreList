import React, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <React.Fragment>
                <p>{this.props.count}</p>
            </React.Fragment>
        );
    }
}

export default Display;