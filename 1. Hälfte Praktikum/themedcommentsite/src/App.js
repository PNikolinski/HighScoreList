import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
      super()
      this.state ={
        theme: themes.light
      }
    }

    changeTheme(){
      this.setState({
        theme: 
          this.state.theme === themes.dark
          ? themes.light
          : themes.dark
      })
    }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.changeTheme()}>Change Theme</button>
        <div className={this.state.theme}>
          <p>Veniam amet in reprehenderit nisi est tempor eu mollit dolore ullamco ea.</p>
        </div>
      </React.Fragment>
    );
  }
}

const themes = {
light: 'light',
dark: 'dark'
}



export default App;
