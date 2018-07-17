import React, { Component } from 'react';
import Display from './Display'
import Controls from './Controls'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 43
        }
    }
    increase() {
        this.setState({
            count: (++this.state.count)
        })
    }
    decrease() {
        this.setState({
            count: (--this.state.count)
        })
        console.log("DECREASE");
    }
    render() {
        return (
            <React.Fragment>
                <center>
                    <Display count={this.state.count} />
                    <Controls increaseCount={(test) => this.increase(test)} decreaseCount={() => this.decrease()} />
                </center>
            </React.Fragment>
        );
    }
}

export default Counter;