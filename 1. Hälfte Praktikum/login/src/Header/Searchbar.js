import React, { Component } from 'react';

class Searchbar extends Component {
    render() {
        return (
            <div style={{ display: 'inline' }} className={this.props.className}>
                <input type='text' />
                <i className="fa fa-search" />
            </div>
        );
    }
}

export default Searchbar;