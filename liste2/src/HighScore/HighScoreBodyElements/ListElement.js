import React, { Component } from 'react';

class ListElement extends Component {
    render() {
        return (
            //List row elements
            <tbody>
                <tr>
                    <td>{this.props.platz}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.score}</td>
                    {/*Click on button to delete current row element*/}
                    <td><button onClick={() => this.props.delElement(this.props.id)}>X</button></td>
                </tr>
            </tbody>
        );
    }
}
export default ListElement