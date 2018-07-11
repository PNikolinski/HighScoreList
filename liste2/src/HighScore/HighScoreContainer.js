import React, { Component } from 'react';
import HighScoreHeader from './HighScoreHeader'
import HighScoreBody from './HighScoreBody'
import HighScoreForm from './HighScoreForm'


class HighScoreContainer extends Component {
    render() {
        return (
            <React.Fragment>
                {/*Show List in table*/}
                <table border="1">
                    {/*Show Header in first row*/}
                    <HighScoreHeader />
                    {/*Show complete List under HighScoreHeader*/}
                    <HighScoreBody />
                </table>
                <HighScoreForm />
            </React.Fragment>
        );
    }
}





export default HighScoreContainer;