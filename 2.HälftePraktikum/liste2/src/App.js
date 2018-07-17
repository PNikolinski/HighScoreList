import React, { Component } from 'react';
import './App.css';
import HighScoreContainer from './HighScore/HighScoreContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Implement HighScoreContainer*/}
        <HighScoreContainer />
      </React.Fragment>
    );
  }
}

export default App;
