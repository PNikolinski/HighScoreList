
export function newElement(newName, newScore) {

    var nameTaken = false

    for (let i = 0; i < this.state.elements.length; i++) {
        //Check if newName is already as a name in state.elements
        if (this.state.elements[i].name === newName) {
            alert("Your username is already taken")
            nameTaken = true
            break;
        }
    }
    //If nameTaken is false then push newName and newScore into array
    if (!nameTaken) {

        var newMember = []
        //Loop through state.elements to put elements into newMember Array
        for (let i = 0; i < this.state.elements.length; i++) {
            newMember[i] = { name: this.state.elements[i].name, score: this.state.elements[i].score }
        }

        newMember.push({
            name: newName,
            score: parseInt(newScore, 10)
        })

        this.setState({
            elements: newMember
        })
    }
}

export function deleteElement(key) {

    var Member = []
    //Loop through state elements array to get Member array filled
    for (let i = 0; i < this.state.elements.length; i++) {
        Member[i] = { name: this.state.elements[i].name, score: this.state.elements[i].score }
    }
    //Splice = delete on array[key] and only the next element
    Member.splice(key, 1)

    this.setState({
        elements: Member
    })
}