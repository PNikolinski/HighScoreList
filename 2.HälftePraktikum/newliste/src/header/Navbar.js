import React, { Component } from 'react';
/*import NavElements from "./NavElements" */
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>SomeNiceLogo</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavDropdown eventKey={1} title='Game' id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1} componentClass={Link} to='/games' href='/games' >All Games</MenuItem>
                        <MenuItem eventKey={1.2} componentClass={Link} to='/game' href='/game' >Specific Game</MenuItem>
                        <MenuItem eventKey={1.3} componentClass={Link} to='/addgame' href='/addgame' >Add Game</MenuItem>
                        <MenuItem eventKey={1.4} componentClass={Link} to='/delgame' href='/delgames' >Delete Game</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={2} title='Player' id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1} componentClass={Link} to='/players' href='/players' >All Players</MenuItem>
                        <MenuItem eventKey={2.2} componentClass={Link} to='/player' href='/player' >Specific Player</MenuItem>
                        <MenuItem eventKey={2.3} componentClass={Link} to='/addplayer' href='/addplayer' >Add Player</MenuItem>
                        <MenuItem eventKey={2.4} componentClass={Link} to='/delplayer' href='/delplayer' >Delete Player</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;