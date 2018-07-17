import React, { Component } from 'react';

class HighScoreEintrag extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            score: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit(event) {
            event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Name <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></p>
                <p>Score <input type="number" name="score" value={this.state.score} onChange={this.handleChange} /></p>
                <button type="submit" onClick={() => this.props.addPlayer(this.state.name, this.state.score)}>Eintragen </button>
            </form>
        );
    }
}

export default HighScoreEintrag;