import React, { Component } from 'react';
import logo from './images/valve_logo.png';
//import './NavBar.css';

class NavBarBody extends Component {
    render = _ => {
        return (
            <React.Fragment>
                <NavBarChilds />
                <NavBarLogin />
            </React.Fragment>
        );
    }
}

export default NavBarBody

class NavBarLogin extends Component {
    render() {
        return (
            <a href="https://steamcommunity.com/dev/apikey"><img src={logo} alt="Valve Login" /></a>
        );
    }
}

class NavBarChilds extends Component {
    render() {
        return (
            <h1>Hallo Welt</h1>
        );
    }
}



