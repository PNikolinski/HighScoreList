import React, { Component } from 'react';

class Controls extends Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.props.increaseCount()} >+</button>
                <button onClick={this.props.decreaseCount} >-</button>
            </React.Fragment>
        );
    }
}

export default Controls;