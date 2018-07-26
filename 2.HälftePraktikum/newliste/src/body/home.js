import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <Grid>
                <Row className='show-grid'>
                    <Col sm={8} md={3}>
                        Occaecat duis voluptate ipsum esse. Irure sint esse Lorem eiusmod esse laborum reprehenderit minim excepteur non do qui esse. Mollit nostrud eu eiusmod sunt exercitation ad. Aliqua et ad in excepteur nostrud.
                    </Col>
                    <Col sm={6} md={3}>
                        Occaecat duis voluptate ipsum esse. Irure sint esse Lorem eiusmod esse laborum reprehenderit minim excepteur non do qui esse. Mollit nostrud eu eiusmod sunt exercitation ad. Aliqua et ad in excepteur nostrud.
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;