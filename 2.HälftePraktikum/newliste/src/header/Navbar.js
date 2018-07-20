import React, { Component } from 'react';
import SomeNiceLogo from "./SomeNiceLogo"
import NavElements from "./NavElements"

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="containerNav">
                    <SomeNiceLogo />
                    <br/>
                    <NavElements />
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default NavBar;