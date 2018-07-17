import React, { Component } from 'react';
import CalcControls from './CalcControls';
import CalcDisplay from './CalcDisplay';


class Calculator extends Component {
    constructor() {
        super()
        //Instanz of state
        this.state = {
            number1: 0,
            divider: '',
            number2: 0,
            anzeige: 0
        }
    }
    //If clicked on button then check if it's a number or not
    onclick(key) {
        //Check if number is in range of 0 to 9
        if (key >= 0 || key <= 9) {
            //If anzeige is 0 or '0' replace it with current key
            if (this.state.anzeige === 0 || this.state.anzeige === '0') {
                this.setState({
                    anzeige: key
                })
            }
            //If not then add the number to current anzeige
            else {
                this.setState({
                    anzeige: (this.state.anzeige + "" + key)
                })
            }
        }
        //Check which digit is key
        switch (key) {
            //If key = + then then put anzeige into number 1, put key into divider and clear anzeige
            case "+":
                this.setState({
                    number1: (this.state.anzeige),
                    anzeige: 0,
                    divider: (key)
                })
                break;
            //If key = - then continue
            case "-": console.log("Minus")
                break;
            //If key = X then continue
            case "X": console.log("Multiplizieren")
                break;
            //If key = / then continue
            case "/": console.log("Dividieren")
                break;
            //If key = AC then reset whole calculator
            case "AC": this.setState({
                number1: 0,
                divider: '',
                number2: 0,
                anzeige: 0
            })
                break;
            //If key = "." then check if there is a "."
            case ".": var counter = 0;
                //Check anzeige if there a any "." in it
                for (let i = 0; i < this.state.anzeige.length; i++) {
                    //If there is a "." then increase the counter by one
                    if (this.state.anzeige[i] === ".")
                        counter++;
                }
                //if there are less than one "." then add "." to current anzeige 
                if (counter < 1) {
                    this.setState({
                        anzeige: (this.state.anzeige + "" + key)
                    })
                }
                break;
            //If key = % then divide current anzeige by 100 to put it into a percent
            case "%": this.setState({
                anzeige: (this.state.anzeige / 100)
            })
                break;
            //If key = "+ -" then multiply anzeige by -1
            case "+ -": this.setState({
                anzeige: (this.state.anzeige * (-1))
            })
                break;
            //If key = = then continue
            case "=":
                if (this.state.number1 !== 0 || this.state.numer2 !== 0) {
                    this.setState({
                        number2: (this.state.anzeige),
                        anzeige: (this.calculate(this.state.number1, this.state.divider, this.state.number2))
                    })
                }
                break;
            default: console.log("Ist Nummer")
                break;

        }
    }
    calculate(n1, divider, n2) {
        console.log(n1 + " " + divider + " " + n2)
        if (divider === "+") {
            return n1 * 1 + n2 * 1
        }
    }
    render() {
        return (
            <div>
                <CalcControls />
                <CalcDisplay onclick={(key) => this.onclick(key)} display={this.state.anzeige} />
            </div>
        );
    }
}

export default Calculator;