import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      name: ["Admin"]
    }
  }

  componentDidMount() {
    this.fetchData()
  }
  fetchData() {
    fetch("http://localhost:4000/getusers")
      .then(response => response.json())
      .then(parsedJSON =>
        this.getElements(parsedJSON)
      )

      .catch(err => console.log("Failed to fetch: " + err))
  }
  getElements(elements) {
    for (let i = 0; i < elements.length; i++) {
      this.setState({
        name: (this.addName(elements[i].list_user_name))
      })
    }
  }
  addName(name) {
    const tempArray = this.state.name
    tempArray.push(name)
    return tempArray
  }
  render() {
    return (
      <React.Fragment>
        <h1>Testing API </h1>
        <div>
          {this.state.name}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
