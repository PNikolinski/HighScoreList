import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="container">
            <h3>Update User Data</h3>
                <form action='#'>
                    <div className="content-container">
                        <label>Username</label>
                        <input type='text' required />
                        <label>Score</label>
                        <input type='number' required />
                        <button onClick={() => this.props.updateUser()} className="btn">Update</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;