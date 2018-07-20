import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavElements extends Component {
      render() {
        return (
            <nav>
                <ul>
                    <div>
                        <li><Link to="/games">ALL GAMES</Link></li>
                        <li><Link to="/gameform">SPECIFIC GAME</Link></li>
                        <li><Link to="/addgame">ADD GAME</Link></li>
                        <li><Link to="/delgame">DELETE GAME</Link></li>
                    </div>
                    <br />
                    <div>
                        <li><Link to="/players">ALL PLAYERS</Link></li>
                        <li><Link to="/playerform">SPECIFIC PLAYER</Link></li>
                        <li><Link to="/addplayer">ADD PLAYER</Link></li>
                        <li><Link to="/delplayer">DELETE PLAYER</Link></li>
                    </div>
                </ul>
            </nav>
        );
    }
}

export default NavElements;