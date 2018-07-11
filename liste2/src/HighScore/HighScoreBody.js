import React, { Component } from 'react';

class HighScoreBody extends Component {
    render() {
        return (
            <React.Fragment>
                {/*Show all list elements*/}
                <List />
            </React.Fragment>
        );
    }
}
class List extends Component {
    constructor() {
        super()
        this.state = {
            user: [],
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    deleteElement = (id) => {
        fetch("http://localhost:4000/", {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
            })
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        user: (this.delUser(this.state.user.indexOf(id))),
                    })
                    console.log("Successfully deleted User")
                } else {
                    console.log("Error")
                }
            })


    }
    fetchData() {
        fetch("http://localhost:4000/", {
            method: "GET"
        })
            .then(response => response.json())
            .then(parsedJSON => this.getElements(parsedJSON))
            .catch(err => console.log("Failed to fetch: " + err))
    }
    getElements(elements) {
        for (let i = 0; i < elements.length; i++) {
            this.setState({
                user: (this.addUser(elements[i].list_user_name, elements[i].list_user_score, elements[i].id))
            })
        }
    }
    addUser(name, score, id) {
        const tempArray = this.state.user
        tempArray.push({ name: name, score: score, id: id })
        return tempArray
    }
    delUser(index) {
        const tempArray = this.state.user
        tempArray.splice(index, 1)
        return tempArray
    }
    setListElements() {
        const elementArray = []
        for (let i = 0; i < this.state.user.length; i++) {
            elementArray.push(<ListElement name={this.state.user[i].name} score={this.state.user[i].score} id={this.state.user[i].id} platz={i + 1} key={i} delElement={(id) => this.deleteElement(id)} />)
        }
        return elementArray
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
                    delElement={(id) => this.deleteElement(id)}
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