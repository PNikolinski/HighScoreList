import React, { Component } from 'react';
import './App.css';
import NavBarBody from './CSGOSTATS.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: "Pascal",
      passwort: "admin1234",
    }
  }
  render() {
    return (
      <React.Fragment>
        <NavBarBody />
      </React.Fragment>
    );
  }
}
/*
class UserOutputUser extends Component{
  constructor(props){
    super()
    this.props = props
  }
  render(){
    return <h1>{this.props.name}</h1>
  }
}
class UserOutputPassword extends Component{
  constructor(props){
    super()
    this.props = props.passwort
  }
  render(){
    return <h1>{this.props.password}</h1>
  }
}

class UserLoginPicture extends Component {
 render = _ =>{
   return( <a href="https://steamcommunity.com/dev/apikey"><img src={logo} alt="Valve Login" /></a>)
 }
}
*/

export default App;
