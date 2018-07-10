import React, { Component } from 'react';
import './Hex.css'

class HexClock extends Component {
    constructor() {
        super()
        this.state = {
            h: '',
            m: '',
            s: ''
        }
        this.canvas = React.createRef()
    }
    setTime(s, m, h) {
        this.setState({
            h: h < 10 ? '0' + h : h,
            m: m < 10 ? '0' + m : m,
            s: s < 10 ? '0' + s : s
        })

        var r = Math.floor(0.5*this.state.h / Math.random(50)) 
        var g = Math.floor(0.9*this.state.m / Math.random(40)) 
        var b = Math.floor(0.2*this.state.s / Math.random(10)) 

        document.body.style.backgroundColor = "rgb(" + r + ","+ g  +","+ b +")"
    }
    componentDidUpdate(){
        var canvasContext = this.state.h +':'+ this.state.m +':'+ this.state.s
        var canvas = this.canvas.current;
        var ctx = canvas.getContext("2d")
        ctx.clearRect(0,0,canvas.width, canvas.height)
        ctx.font = "40px Roboto"
        ctx.fillStyle ="white"
        ctx.fillText(canvasContext,40,50)
    }
    printTime() {
        try {
            var time = new Date()
            setTimeout(() => this.setTime(time.getSeconds(), time.getMinutes(), time.getHours()), 1000)
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <React.Fragment>
                <canvas ref={this.canvas} width={200} height={200} ></canvas>
                <div onLoad={this.printTime()}/>
                
            </React.Fragment>
        );
    }
}

export default HexClock;