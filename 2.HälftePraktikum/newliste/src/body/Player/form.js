import React, { Component } from 'react';

class GamesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <form action="" method="post">
                <table>
                    <thead>
                        <tr>
                            <td colSpan="2">
                                Please select or enter the essential info
                        </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" placeholder="Please enter a name ..." /></td>
                        </tr>
                        <tr>
                            <td><button>Reset</button></td>
                            <td><button>Submit</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default GamesForm;