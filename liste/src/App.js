import React, { Component } from 'react';
import './App.css';
import HighScore from "./HighScore/HighScore.js";
import Faker from 'faker';

class App extends Component {
  render() {
    return (
      <h1>HighscoreListe</h1> ,
      <center>
        <HighScore value={createPlayers(20)} />
      </center>
    );
  }
}



export function createPlayers(count) {
  var players = [];
  for (let i = 0; i < count; i++) {
    players.push({
      name: Faker.name.findName(),
      score: Faker.random.number(100)
    });
  }
  return players;
}


export default App;
