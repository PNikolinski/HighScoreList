import React, { Component } from 'react';
import "./CalcDisplay.css"


//Display of the calulator
class CalcDisplay extends Component {
    render() {
        return (
            <table>
                <tbody>
                    {/*First Row alias Display*/}
                    <tr>
                        <td className="topline" colSpan="4">{this.props.display}</td>
                    </tr>
                    {/*Secod Row alias First Row of Digits*/}
                    <tr>
                        <td className="innercell" onClick={() => this.props.onclick("AC")}>AC</td>
                        <td className="innercell" onClick={() => this.props.onclick("+ -")}>+/-</td>
                        <td className="innercell" onClick={() => this.props.onclick("%")}>%</td>
                        <td className="outercell" onClick={() => this.props.onclick("/")}>÷</td>
                    </tr>
                    {/*Third Row alias Second Row of Digits*/}
                    <tr>
                        <td className="innercell" onClick={() => this.props.onclick(7)}>7</td>
                        <td className="innercell" onClick={() => this.props.onclick(8)}>8</td>
                        <td className="innercell" onClick={() => this.props.onclick(9)}>9</td>
                        <td className="outercell" onClick={() => this.props.onclick("X")}>X</td>
                    </tr>
                    {/*Fourth Row alias Third Row of Digits*/}
                    <tr>
                        <td className="innercell" onClick={() => this.props.onclick(4)}>4</td>
                        <td className="innercell" onClick={() => this.props.onclick(5)}>5</td>
                        <td className="innercell" onClick={() => this.props.onclick(6)}>6</td>
                        <td className="outercell" onClick={() => this.props.onclick("-")}>-</td>
                    </tr>
                    {/*Fived Row alias Fourth Row of Digits*/}
                    <tr>
                        <td className="innercell" onClick={() => this.props.onclick(1)}>1</td>
                        <td className="innercell" onClick={() => this.props.onclick(2)}>2</td>
                        <td className="innercell" onClick={() => this.props.onclick(3)}>3</td>
                        <td className="outercell" onClick={() => this.props.onclick("+")}>+</td>
                    </tr>
                    {/*Sixth Row alias Fived Row of Digits*/}
                    <tr>
                        <td className="innercell" colSpan="2" onClick={() => this.props.onclick(0)}>0</td>
                        <td className="innercell" onClick={() => this.props.onclick(".")}>.</td>
                        <td className="outercell" onClick={() => this.props.onclick("=")}>=</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default CalcDisplay;