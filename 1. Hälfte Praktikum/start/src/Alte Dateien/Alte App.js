import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import File2 from './File2';


function Test() { 

  return 'test';
}

//1. Properties Ausgabe
class Test1 extends Component{
  render(){
    return (
      <p>Bisschen Text{this.props.stateValue} {this.props.stateName}</p>
    );
  }
}
//2. Properties Ausgabe
function Test2(props){
  return (
    <p>Bisschen Text{props.stateValue} {props.stateName}</p>
  ); 
}
//3. Properties Ausgabe
const Test3 = ({stateName, stateValue})=>{
  return (
    <p>Bisschen Text{stateValue} {stateName}</p>
  );
}


const Ausgabe = Test();

const Anders = function(){ 

  return 'Hallo';
 }


class App extends Component { 
  constructor() {
    super()
    this.state = {
      count: 0,
      name: "Pascal"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          
        </header>
        <File2 />
        <Ausgabe />
        <Test1
        stateValue={this.state.count}
        stateName={this.state.name} />
        <Test2 
        stateValue={this.state.count}
        stateName={this.state.name} />
        <Test3 
        stateValue={this.state.count}
        stateName={this.state.name} />
        <Anders/>
        
        
        
      </div>
    );
  }
}