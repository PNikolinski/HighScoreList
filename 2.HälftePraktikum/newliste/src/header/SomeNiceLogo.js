import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SomeNiceLogo extends Component {
    state = {  }
    render() {
        return (
            <div className="logo"><Link to='/' className='linkclass'>SomeNiceLogo</Link></div>
        );
    }
}

export default SomeNiceLogo;