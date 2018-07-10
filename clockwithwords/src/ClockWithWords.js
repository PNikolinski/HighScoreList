import React, { Component } from 'react';
import ClockDisplay from './ClockDisplay';


class ClockWithWords extends Component {
    constructor(){
        super()
        // Instanz of state
        this.state = {
            h: 'Clock',
            m: 'not',
            s: 'Updated'
        }
    }
    // Set state items on values
    setTime(s, m ,h){
        this.setState({
            // If value under 10 then put a 0 infront of it, otherwise set value
            h: h < 10 ? '0' + h : h,
            m: m < 10 ? '0' + m : m,
            s: s < 10 ? '0' + s : s
        })
        // Log the current state onto the console
        console.log(this.state.h+':'+this.state.m+':'+this.state.s)
    }
    // Set a new Date (hour, minute, second) every second and trigger setTime
    printTime() {
        try {
            var time = new Date()
            setTimeout(() => this.setTime(time.getSeconds(), time.getMinutes(), time.getHours()), 1000)
        } catch (error) {
            //Log error when occur
            console.log(error)
        }
    } 
    render() {
        return (
            <React.Fragment>
                <ClockDisplay hour={this.state.h} minute={this.state.m} onLoad={this.printTime()}/>
            </React.Fragment>
        );
    }
}

export default ClockWithWords;