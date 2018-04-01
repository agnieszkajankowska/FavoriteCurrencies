import React, {Component} from 'react';
import './App.css';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import CurrenciesList from '../CurrenciesList/CurrenciesList';
import FavoritesList from '../FavoritesList/FavoritesList';

const currencies = ["USD", "AUD", "CAD", "EUR", "HUF", "CHF", "GBP", "JPY", "CZK", "DKK", "NOK", "SEK", "XDR"];
class App extends Component {
    render() {
        return (
            <div className="App">
                <Jumbotron>
                    <h1 className="intro-title">Currency App</h1>
                    <Grid>
                        <p>
                            Welcome to Currency App! Here you are able to follow the currencies that you are interested
                            in. Please choose
                            one or more currencies from the list on the left hand side. By clicking "Add to favorites"
                            button you will be able
                            to follow chosen currency exchange rate.
                        </p>
                    </Grid>
                </Jumbotron>
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <CurrenciesList currencies={currencies}/>
                        </Col>
                        <Col xs={12} md={6}>
                            <FavoritesList/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;
