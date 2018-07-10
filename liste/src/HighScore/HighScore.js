import React, { Component } from 'react';
import HighScoreHeader from './HighScoreHeader'
import HighScoreEintrag from './HighScoreEintrag';
import HighScoreElement from './HighScoreElement'

class HighScore extends Component {
    constructor(props) {
        super(props)
        this.state = props
    }

    render() {
        return (
            <table >
                <HighScoreHeader />
                <tbody>
                    {getElements(this.state.value)}
                    <tr>
                        <td colSpan="3">
                            <HighScoreEintrag addPlayer={(newName, newScore) => addPlayer(this.state, newName, newScore)} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

function addPlayer(state, newName, newScore) {
    const playerArray = state.value;
    playerArray.push({
        name: newName ,
        score: newScore
    })
    getElements(playerArray)
    console.log(playerArray)
        
}

function getElements(element) {
    var elements = []
    element.sort(function (a, b) {
        if (a.score < b.score) { return 1; }
        if (a.score > b.score) { return -1; }
        return 0;
    })
    for (let i = 0; i < element.length; i++) {
        elements[i] = <HighScoreElement key={i} platz={i + 1} name={element[i].name} score={element[i].score} />
    }

    return elements
}
/*TO DO:
* - Eigene Eingaben machen
* - In externe Datenbank schreiben
*/
export default HighScore;