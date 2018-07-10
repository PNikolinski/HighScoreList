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
            name: [],   
            score: [],
            id: []
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    deleteElement(id) {
        fetch("http://localhost:4000/", {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                id : id,
            })
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
        if (elements.length > this.state.name.length) {
            for (let i = 0; i < elements.length; i++) {
                this.setState({
                    name: (this.addName(elements[i].list_user_name)),
                    score: (this.addScore(elements[i].list_user_score)),
                    id: (this.addID(elements[i].id))
                })
            }
        }
    }
    addName(name) { 
            const tempArray = this.state.name
            tempArray.push(name)
            return tempArray  
    }
    addScore(score) {
        const tempArray = this.state.score
        tempArray.push(score)
        return tempArray
    }
    addID(id) {
        const tempArray = this.state.id
        tempArray.push(id)
        return tempArray
    }

    setListElements() {
        const elementArray = []
        for (let i = 0; i < this.state.name.length; i++) {
            elementArray.push(<ListElement name={this.state.name[i]} score={this.state.score[i]} id={this.state.id[i]} platz={i + 1} key={i} delElement={(id) => this.deleteElement(id)} />)
        }
        return elementArray
    }
    render() {
        //Return array to show all elements 
        return this.setListElements()
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