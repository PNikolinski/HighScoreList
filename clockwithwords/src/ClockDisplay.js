import React, { Component } from 'react';
import './Clock.css'

class ClockDisplay extends Component {
    checkTime() {
        // Set hr on current hour
        var hr = this.props.hour
        // Set min on current minutes
        var min = this.props.minute

        //instanz of many variables for next operations
        var selectOClock;
        var selectMinute;
        var selectMinutes
        var selectQuarter;
        var selectMinute1;
        var selectMinute2;
        var selectHalf;
        var selectPast;
        var selectTwenty;
        var selectTo;
        var selectHour;

        //Check which Minute elements should be highlighted
        switch (true) {
            //If min < 5 then highlight "o'clock"
            case min < 5:
                //Set class to active to highlight "o'clock"
                selectOClock = document.getElementById(20)
                selectOClock.classList.add("active")
                //Remove class to not highlight past Highlights ("To", "Minutes", "Five")
                selectMinute = document.getElementById(4)
                selectTo = document.getElementById(6)
                selectMinutes = document.getElementById(5)
                selectMinute.classList.remove("active")
                selectTo.classList.remove("active")
                selectMinutes.classList.remove("active")
                break;
            //If min > 5 and <10 then highlight "Five", "Minutes","Past"
            case min < 10:
                //Remove class from Past highlight "o'clock"
                selectOClock = document.getElementById(20)
                selectOClock.classList.remove("active")
                //Set Highlight on "Five", "Past", "Minutes"
                selectMinute = document.getElementById(4)
                selectMinutes = document.getElementById(5)
                selectPast = document.getElementById(7)
                selectPast.classList.add("active")
                selectMinutes.classList.add("active")
                selectMinute.classList.add("active")
                break;
            // If min >10 and <15 then highlight "Ten"
            case min < 15:
                //Remove class from past highlight "Five"
                selectMinute = document.getElementById(4)
                selectMinute.classList.remove("active")
                //Set class onto current highlights "Ten","Minutes", "Past"
                selectMinute = document.getElementById(1)
                selectPast = document.getElementById(7)
                selectMinutes = document.getElementById(5)
                selectMinutes.classList.add("active")
                selectMinute.classList.add("active")
                selectPast.classList.add("active")
                break;
            //If min >15 and < 20 then highlight "Quarter"
            case min < 20:
                //Remove class of past highlight "Ten", "Minutes"
                selectMinute = document.getElementById(1)
                selectMinutes = document.getElementById(5)
                selectMinute.classList.remove("active")
                selectMinutes.classList.remove("active")
                //Set current Highlights "Quarter","Past"
                selectQuarter = document.getElementById(2)
                selectPast = document.getElementById(7)
                selectQuarter.classList.add("active")
                selectPast.classList.add("active")
                break;
            //If min > 20 and < 25 then highlight "Twenty", "Minutes"
            case min < 25:
                //Remove class of past highlight "Quarter"
                selectQuarter = document.getElementById(2)
                selectQuarter.classList.remove("active")
                //Set class on current highlights "Twenty", "Minutes", "Past"
                selectMinutes = document.getElementById(5)
                selectMinute = document.getElementById(3)
                selectPast = document.getElementById(7)
                selectMinutes.classList.add("active")
                selectMinute.classList.add("active")
                selectPast.classList.add("active")
                break;
            //If min > 25 and < 30 then highlight "Twenty", "Five", "Minutes", "Past"
            case min < 30:
                //Remove class of past highlight "Twenty"
                selectMinute = document.getElementById(3)
                selectMinute.classList.remove("active")
                // Set class on current highlights "Twenty", "Five", "Minutes", "Past"
                selectMinute1 = document.getElementById(3)
                selectMinute2 = document.getElementById(4)
                selectMinutes = document.getElementById(5)
                selectPast = document.getElementById(7)
                selectMinute1.classList.add("active")
                selectMinute2.classList.add("active")
                selectMinutes.classList.add("active")
                selectPast.classList.add("active")
                break;
            //If min >30 and < 35 then Highlight "Half", "Past"
            case (min < 35):
                //Remove class on past highlights "Twenty", "Five", "Minutes"
                selectMinute1 = document.getElementById(3)
                selectMinute2 = document.getElementById(4)
                selectMinutes = document.getElementById(5)
                selectMinutes.classList.remove("active")
                selectMinute1.classList.remove("active")
                selectMinute2.classList.remove("active")
                //Set current hihlights on "Half", "Past"
                selectHalf = document.getElementById(0)
                selectPast = document.getElementById(7)
                selectHalf.classList.add("active")
                selectPast.classList.add("active")
                break;
            //If min >35 and <40 then highlight "Twenty", "Five", "Minutes", "To"
            case min < 40:
                //Remove class on past highlights "Half", "Past"
                selectPast = document.getElementById(7)
                selectPast.classList.remove("active")
                //Set class on current Highlights "Twenty", "Five", "Minutes", "To"
                selectTwenty = document.getElementById(3)
                selectMinute = document.getElementById(4)
                selectTo = document.getElementById(6)
                selectMinutes = document.getElementById('5')
                selectTwenty.classList.add("active")
                selectMinute.classList.add("active")
                selectTo.classList.add("active")
                selectMinutes.classList.add("active")
                break;
            //If min > 40 and <45 then Highlight "Twenty", "Minutes", "To"
            case min < 45:
                //Remove class on past highlight "Five"
                selectMinute = document.getElementById(4)
                selectMinute.classList.remove("active")
                //Set class onto current highlights "Twenty", "Minutes", "To"
                selectTwenty = document.getElementById(3)
                selectMinutes = document.getElementById(5)
                selectTo = document.getElementById(6)
                selectTo.classList.add("active")
                selectTwenty.classList.add("active")
                selectMinutes.classList.add("active")
                break;
            //If min > 45 and <50 then highlight "Quarter", "To"
            case min < 50:
                //Remove class on past highlights "Twenty", "Minutes", "To"
                selectTwenty = document.getElementById(3)
                selectMinutes = document.getElementById(5)
                selectMinute = document.getElementById(4)
                selectTwenty.classList.remove("active")
                selectMinute.classList.remove("active")
                selectMinutes.classList.remove("active")
                //Set class on current highlights "Quarter", "To"
                selectQuarter = document.getElementById(2)
                selectTo = document.getElementById(6)
                selectQuarter.classList.add("active")
                selectTo.classList.add("active")
                break;
            //If min >50 and < 55 then highlight "Ten", "Minutes", "To"
            case min < 55:
                //Remove class on past highlight
                selectQuarter = document.getElementById(2)
                selectQuarter.classList.remove("active")
                //Set class on current highlights "Ten", "Minutes", "To"
                selectMinute = document.getElementById(1)
                selectTo = document.getElementById(6)
                selectMinutes = document.getElementById(5)
                selectTo.classList.add("active")
                selectMinute.classList.add("active")
                selectMinutes.classList.add("active")
                break;
            //If min > 55 and <60 then highlight "Five", "Minutes", "To"
            case min < 60:
                //Remove class on past highlight "Ten"
                selectMinute = document.getElementById(1)
                selectMinute.classList.remove("active")
                //Set class on current highlights "Five", "Minutes", "To"
                selectMinute = document.getElementById(4)
                selectTo = document.getElementById(6)
                selectMinutes = document.getElementById(5)
                selectMinute.classList.add("active")
                selectTo.classList.add("active")
                selectMinutes.classList.add("active")
                break;

            default: console.log("Kein Wert")
                break;
        }
        //Check which Hour element shuld be highlighted
        switch (true) {
            //If hour = 0
            case (hr === '00' ||  hr === 12):
                //If min <34 set class on "Twelve"
                if (min < 34) {
                    //Set Hour on current hour "Twelve"
                    selectHour = document.getElementById(19)
                    selectHour.classList.add("active")
                }
                //If min >34 and < 60 then highlight next hour
                else {
                    //Remove class on past hour "Twelve"
                    selectHour = document.getElementById(19)
                    selectHour.classList.remove("active")
                    //Set class on next hour "One"
                    selectHour = document.getElementById(8)
                    selectHour.classList.add("active")
                }
                break;
            //If hour = 1 or 13
            case (hr === '01' || hr === 13):
                //If min <34 set class on "One"
                if (min < 34) {
                    //Set class on current hour "One"
                    selectHour = document.getElementById(8)
                    selectHour.classList.add("active")
                }
                else {
                    //Remove class on past hour "One"
                    selectHour = document.getElementById(8)
                    selectHour.classList.remove("active")
                    //Set class on next hour "Two"
                    selectHour = document.getElementById(9)
                    selectHour.classList.add("active")
                }
                break;
            //If hour = 2 or 14
            case (hr === '02' || hr === 14):
                //If min <34 set class on "Two"
                if (min < 34) {
                    //Set class on current hour "Two"
                    selectHour = document.getElementById(9)
                    selectHour.classList.add("active")
                }
                else {
                    //Remove class on past hour "Two"
                    selectHour = document.getElementById(9)
                    selectHour.classList.remove("active")
                    //Set class on next hour "Three"
                    selectHour = document.getElementById(10)
                    selectHour.classList.add("active")
                }
                break;
            //If hour = 3 or 15
            case (hr === '03' || hr === 15):
                //If min <34 set class on "Three"
                if (min < 34) {
                    //Set class on current hour "Three"
                    selectHour = document.getElementById(10)
                    selectHour.classList.add("active")
                }
                else {
                    //Remove class on past hour "Three"
                    selectHour = document.getElementById(10)
                    selectHour.classList.remove("active")
                    //Set class on next hour "Four"
                    selectHour = document.getElementById(11)
                    selectHour.classList.add("active")
                }
                break;
            //If hour = 4 or 16
            case (hr === '04' || hr === 16):
                //If min <34 set class on "Four"
                if (min < 34) {
                    //Set class on current hour "Four"
                    selectHour = document.getElementById(11)
                    selectHour.classList.add("active")
                }
                else {
                    //Remove class on past hour "Four"
                    selectHour = document.getElementById(11)
                    selectHour.classList.remove("active")
                    //Set class on next hour "Five"
                    selectHour = document.getElementById(12)
                    selectHour.classList.add("active")
                }
                break;
            //If hour = 5 or 17
            case (hr === '05' || hr === 17):
                //If min <34 set class on "Five"
                if (min < 34) {
                    //Set class on current hour "Five"
                    selectHour = document.getElementById(12)
                    selectHour.classList.add("active")
                }
                else {
                    //Remove class on past hour "Five"
                    selectHour = document.getElementById(12)
                    selectHour.classList.remove("active")
                    //Set class on next hour "Six"
                    selectHour = document.getElementById(13)
                    selectHour.classList.add("active")
                }
                break;
            //If hour = 6 or 18
            case (hr === '06' || hr === 18):
                //If min <34 set class on "Six"
                if (min < 34) {
                    //Set class on current hour "Six"
                    selectHour = document.getElementById(13)
                    selectHour.classList.add("active")
                }
                else {
                    //Remove class on past hour "Six"
                    selectHour = document.getElementById(13)
                    selectHour.classList.remove("active")
                    //Set class on next hour "Seven"
                    selectHour = document.getElementById(14)
                    selectHour.classList.add("active")
                }
                break;
            //If hour = 7 or 19
            case (hr === '07' || hr === 19):
                //If min <34 set class on "Seven"
                if (min < 34) {
                    //Set class on current hour "Seven"
                    selectHour = document.getElementById(14)
                    selectHour.classList.add("active")
                }
                else {
                    //Remove class on past hour "Seven"
                    selectHour = document.getElementById(14)
                    selectHour.classList.remove("active")
                    //Set class on next hour "Eight"
                    selectHour = document.getElementById(15)
                    selectHour.classList.add("active")
                }
                break;
            //If hour = 8 or 20
            case (hr === ('08') || hr === 20):
                //If min <34 set class on "Eight"
                if (min < 34) {
                    //Set class on current hour "Eight"
                    selectHour = document.getElementById(15)
                    selectHour.classList.add("active")
                }
                else {
                    //Remove class on past hour "Eight"
                    selectHour = document.getElementById(15)
                    selectHour.classList.remove("active")
                    //Set class on next hour "Nine"
                    selectHour = document.getElementById(16)
                    selectHour.classList.add("active")
                }
                break;
            //If hour = 9 or 21
            case (hr === '09' || hr === 21):
                //If min <34 set class on "Nine"
                if (min < 34) {
                    //Set class on current hour "Nine"
                    selectHour = document.getElementById(16)
                    selectHour.classList.add("active")
                }
                else {
                    //Remove class on past hour "Nine"
                    selectHour = document.getElementById(16)
                    selectHour.classList.remove("active")
                    //Set class on next hour "Ten"
                    selectHour = document.getElementById(17)
                    selectHour.classList.add("active")
                }

                break;
            //If hour = 10 or 22
            case (hr === 10 || hr === 22):
                //If min <34 set class on "Ten"
                if (min < 34) {
                    //Set class on current hour "Ten"
                    selectHour = document.getElementById(17)
                    selectHour.classList.add("active")
                }
                else {
                    //Remove class on past hour "Ten"
                    selectHour = document.getElementById(17)
                    selectHour.classList.remove("active")
                    //Set class on next hour "Eleven"
                    selectHour = document.getElementById(18)
                    selectHour.classList.add("active")
                }
                break;
            //If hour = 11 or 23
            case (hr === 11 || hr === 23):
                //If min <34 set class on "Eleven"
                if (min < 34) {
                    //Set class on current hour "Eleven"
                    selectHour = document.getElementById(18)
                    selectHour.classList.add("active")
                }
                else {
                    //Remove class on past hour "Eleven"
                    selectHour = document.getElementById(18)
                    selectHour.classList.remove("active")
                    //Set class on next hour "Twelve"
                    selectHour = document.getElementById(19)
                    selectHour.classList.add("active")
                }
                break;

            default: console.log("Kein Stunde ")
                break;
        }

    }
    render() {
        return (
            <React.Fragment>
                <div className="clockbody" onLoad={this.checkTime()}>
                    <table>
                        <tbody>
                            <tr>
                                <td className="active">it</td>
                                <td className="active">is</td>
                                <td id={0}>half</td>
                                <td id={1}>ten</td>
                            </tr>
                            <tr>
                                <td colSpan="2" id={2}>quarter </td>
                                <td id={3} colSpan="2">Twenty </td>
                            </tr>
                            <tr>
                                <td id={4}>five </td>
                                <td id={5} colSpan="2">minutes </td>
                                <td id={6}>to </td>
                            </tr>
                            <tr>
                                <td id={7}>past </td>
                                <td id={8}>One </td>
                                <td id={9}>two </td>
                            </tr>
                            <tr>
                                <td id={10}>three </td>
                                <td id={11}>four </td>
                                <td id={12}>five </td>
                            </tr>
                            <tr>
                                <td id={13}>six </td>
                                <td id={14}>seven </td>
                                <td id={15}>eight </td>
                            </tr>
                            <tr>
                                <td id={16}>nine </td>
                                <td id={17}>ten </td>
                                <td id={18}>eleven </td>
                            </tr>
                            <tr>
                                <td id={19}>twelve </td>
                                <td id={20} colSpan="2">o'clock </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default ClockDisplay;