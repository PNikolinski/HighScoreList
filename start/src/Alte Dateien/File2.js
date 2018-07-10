import React, { Component } from 'react';


class File2 extends Component{

    constructor(props){
        super(props)
        this.state={
            name: '',
            car: 'Tesla Model S P100D'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        var value = target.type === 'name' ? target.value : target.value;
        const name = target.name
        this.setState({[name]: value})
        value = target.type === 'car' ? target.value : target.value;
        const car = target.name
        this.setState({[car]: value})
    }

    handleSubmit(event){
        alert("New Name: " + this.state.name + "\n New Car: " + this.state.car);
        event.preventDefault();
    }

    render(){
        return (
            <center>
            <table>
                <form onSubmit={this.handleSubmit}>
                <tr>
                     <td>   Name</td>
                     <td>   <input type="text" name="name" onChange={this.handleChange}/></td>
                </tr>
                <tr>
                    <td>Auto</td>
                    <td>
                    <select value={this.state.car} onChange={this.handleChange} name="car"> 
                        <option value="Mercedes Benz C63 AMG">Mercedes Benz C63 AMG</option>
                        <option value="Tesla Model S P100D">Tesla Model S P100D</option>
                        <option value="Tesla Model X P100D">Tesla Model X P100D</option>
                        <option value="Tesla Model 3 P">Tesla Model 3 P</option>
                    </select>
                    </td>
                </tr>
                    <center><input type="submit" value="Submit"/></center>
                </form>
            </table>
            </center>
        )
    }
}
export default File2