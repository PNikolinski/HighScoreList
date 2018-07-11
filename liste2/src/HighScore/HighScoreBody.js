import React, { Component } from 'react';

class HighScoreBody extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                {/*Show all list elements*/}
                <List users={this.props.users} deleteElement={(id) => this.props.deleteElement(id)}/>
            </React.Fragment>
        );
    }
}
class List extends Component {
    constructor(props){
        super(props)
        this.state ={
            user: this.props.users
        }
    }
    render() {
        return (
             this.state.user.map((user, index) => (
                 <ListElement
                     name={user.name}
                     score={user.score}
                     id={user.id}
                     platz={index + 1}
                     key={index}
                     delElement={(id) => this.props.deleteElement(id)}
                 />
             ))
            
        )
    }
}
//Body for each row of output
class ListElement extends Component {
    render() {
        return (
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






export default HighScoreBody;