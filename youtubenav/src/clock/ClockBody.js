import React, { Component } from 'react';
import './css/ClockBody.css'


class ClockBody extends Component {
    constructor(){
        super()
        this.myRef = React.createRef();
        this.min=0, this.sec=0, this.hr=0, this.ms=0, this.amOrPm = 'AM';
        this.radH=0, this.radM=0, this.radS=0;
        this.threePIByTwo = (3 * Math.PI) / 2  
    }
    init() {
        this.myRef.width = document.documentElement.clientWidth /2     
        this.myRef.height = document.documentElement.clientHeight - 45;
        window.requestAnimationFrame(this.draw())
    }

    
    draw() {
        var centerX = this.myRef.height / 2,
            centerY = this.myRef.width / 2,
            date = new Date();

        this.hr = date.getHours();
        this.min = date.getMinutes();
        this.sec = date.getSeconds();
        this.ms = date.getMilliseconds();

        if (this.hr > 12) {
            this.amOrPm = 'PM';
            this.hr -= 12;
        }
        this.radH = 0.00000833 * ((this.hr * 60 * 60 * 1000) + (this.min * 60 * 1000) + (this.sec * 1000) + this.ms);
        console.log(this.radH)
        this.radM = 0.0001 * ((this.min * 60 * 1000) + (this.sec * 1000) + this.ms);
        this.radS = 0.006 * ((this.sec * 1000) + this.ms);

        this.init()
        this.drawRect(0, 0, this.myRef.width, this.myRef.height, '#202833');
        this.drawCircle(centerX, centerY, 220, 0, 30);
        this.drawCircle(centerX, centerY, 220, this.threePIByTwo, this.rad(this.radS) + this.threePIByTwo, false, '#DC543E', 'stroke', 30);

        this.drawCircle(centerX, centerY, 180, 0, Math.PI * 2, false, '#455A64', 'stroke', 50);
        this.drawCircle(centerX, centerY, 180, this.threePIByTwo, this.rad(this.radM) + this.threePIByTwo, false, '#FEB737', 'stroke', 50);

        this.drawCircle(centerX, centerY, 110, 0, Math.PI * 2, false, '#37474F', 'stroke', 90); //hourgrey
        this.drawCircle(centerX, centerY, 110, this.threePIByTwo, this.rad(this.radH) + this.threePIByTwo, false, '#27AE61', 'stroke', 90);

        this.drawCircle(centerX, centerY, 95, 0, Math.PI * 2, false, '#263238', 'fill', '50'); //inner
        this.drawText(`${this.hr.toString().length === 1 ? '0' + this.hr : this.hr}:${this.min.toString().length === 1 ? '0' + this.min : this.min}:${this.sec.toString().length === 1 ? '0' + this.sec : this.sec}`, this.myRef.width / 2 - 63, this.myRef.height / 2 + 15, '#ffffff', '40px');

        this.drawText(this.amOrPm, this.myRef.width / 2 - 15, this.myRef.height / 2 + 50, '#ffffff', '25px');
        window.requestAnimationFrame(this.draw);
    }
    rad(deg) {
        return (Math.PI / 180) * deg;
    }
    drawText(text, x, y, color, size) {
        this.ctx.font = `${size} "Passion One`;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
    }
    drawRect(x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    drawArc(x, y, radius, start, end, clockwise) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, start, end, clockwise);
    }

    drawCircle(x, y, radius, start, end, clockwise, color, type, thickness) {
        if (type === 'fill') {
            this.ctx.fillStyle = color;
            this.drawArc(x, y, radius, start, end, clockwise)
            this.ctx.fill();
        }
        else if (type === 'stroke') {
            this.ctx.strokeStyle = color;
            this.ctx.lineWidth = thickness;
            this.drawArc(x, y, radius, start, end, clockwise)
            this.ctx.stroke();
        }
    }
    componentDidMount(){
        var ctx = this.myRef.current.getContext("2d");
        console.log(ctx)  
    }



    render() {
        return (
            <React.Fragment>
                <canvas ref={this.myRef}></canvas>
            </React.Fragment>
        );
    }
    
}

export default ClockBody;