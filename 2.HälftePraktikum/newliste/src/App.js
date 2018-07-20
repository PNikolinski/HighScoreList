import React, { Component } from 'react';
import './App.css';
import Header from "./header/header";
import Body from "./body/body";
import Footer from "./footer/footer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
