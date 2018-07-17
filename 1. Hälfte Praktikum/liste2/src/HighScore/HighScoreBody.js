import React, { Component } from 'react';
import List from './HighScoreBodyElements/List'

class HighScoreBody extends Component {
    render() {
        return (
            <React.Fragment>
                {/*Show all list elements*/}
                <List
                    users={this.props.users} deleteElement={(id) => this.props.deleteElement(id)}
                    updateUser={(id) => this.props.updateUser(id)}
                />
            </React.Fragment>
        );
    }
}

export default HighScoreBody;