import React, { Component } from 'react';
import HighScoreHeader from './HighScoreHeader'
import HighScoreBody from './HighScoreBody'
import HighScoreForm from './HighScoreForm'

class HighScoreContainer extends Component {
    render() {
        return (
            <React.Fragment>
                {/*Show List in table*/}
                <table>
                    {/*Show Header in first row*/}
                    <HighScoreHeader />
                    {/*Show complete List under HighScoreHeader*/}
                    <HighScoreBody />


                </table>
                {/*Show form under List*/}
                <HighScoreForm />
            </React.Fragment>
        );
    }
}





export default HighScoreContainer;