import React, { Component } from 'react';
import ListElement from './ListElement';

class List extends Component {
    constructor(props){
        super(props)
        this.state ={
            user: this.props.users
        }
    }
    render() {
        return (
            //Create an Array to store list row elements
             this.state.user.map((user, index) => (
                 <ListElement
                     name={user.name}
                     score={user.score}
                     id={user.id}
                     platz={index + 1}
                     key={index}
                     delElement={(id) => this.props.deleteElement(id)}
                     updateUser={(id) => this.props.updateUser(id)}
                 />
             ))
            
        )
    }
}

export default List;