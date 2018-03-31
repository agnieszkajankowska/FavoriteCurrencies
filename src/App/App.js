import React, {Component} from 'react';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import CurrenciesList from '../CurrenciesList/CurrenciesList'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <CurrenciesList/>
                        </Col>
                        <Col xs={12} md={6}>
                            Favorites list
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
