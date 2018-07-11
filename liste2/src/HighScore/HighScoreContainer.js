import React, { Component } from 'react';
import HighScoreHeader from './HighScoreHeader'
import HighScoreBody from './HighScoreBody'
import HighScoreForm from './HighScoreForm'


class HighScoreContainer extends Component {
    constructor() {
        super()
        this.state = {
            user: []
        }
    }
    componentDidMount() {
        this.fetchData()
    }
    //+++++++++++++++++++++++++++++
    //Get Data from Database
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
        tempArray.sort(function(a, b) {
            if (a.score > b.score) {
              return -1;
            }
            if (a.score < b.score) {
              return 1;
            }
            return 0;
          });
        return tempArray
    }
    //+++++++++++++++++++++++++++++++++++++++
    //Delete from Database
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
    delUser(index) {
        const tempArray = this.state.user
        tempArray.splice(index, 1)
        return tempArray
    }


    //+++++++++++++++++++++++++++++
    //Insert into Database
    newElement(name, score) {
        fetch("http://localhost:4000/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: name,
                score: score
            })
        })
        .then(response => {
            if (response.status === 200) {
                if(this.state.user.length === 0){
                    this.setState({
                        user: (this.addUser(name, score *1, 1)),
                    })
                } else {
                    this.setState({
                        user: (this.addUser(name, score*1, this.state.user[this.state.user.length-1].id +1)),
                    })
                   
                }
                
                console.log("Successfully inserted User")
            } else {
                console.log("Error")
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                {/*Show List in table*/}
                <table border="1">
                    {/*Show Header in first row*/}
                    <HighScoreHeader />
                    {/*Show complete List under HighScoreHeader*/}
                    <HighScoreBody users={this.state.user} deleteElement={(id) => this.deleteElement(id)} />
                </table>
                <HighScoreForm insertIntoDatabase={(newName, newScore) => this.newElement(newName, newScore)}/>
            </React.Fragment>
        );
    }
}





export default HighScoreContainer;