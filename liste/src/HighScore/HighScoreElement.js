import React, { Component } from 'react';
import './list.css'

class ListInhalt extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: this.props.name,
            score: this.props.score,    
            platz: this.props.platz
        }
    }
    render() {
        return (
            <tr className="align">
                <td className="right">{this.state.platz + "."}</td>
                <td className="center">{this.state.name}</td>
                <td className="right">{this.state.score}</td>
            </tr>
        );
    }
}

export default ListInhalt;