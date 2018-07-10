import React, { Component } from 'react';
import SearchBar from './Searchbar'
import Warenkorb from './Warenkorb'
import './Header.css'

class Header extends Component {
    constructor(){
        super()
        this.state = {
            logo: "Niko24"
        }
    }
    render() {
        return (
            <div className="header">    
                {this.state.logo}
                <SearchBar/>
                <Warenkorb className="right" />
            </div>
        );
    }
}

export default Header;