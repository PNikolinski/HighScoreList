import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import NavBar from './Nav/NavBar'
import Footer from './Footer/Footer'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <NavBar />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
