import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class CurrenciesList extends Component {
    render() {
        const currencies = ["USD", "AUD", "CAD", "EUR", "HUF", "CHF", "GBP", "JPY", "CZK", "DKK", "NOK", "SEK", "XDR"];
        return (
            <div>
                <FormGroup controlId="currenciesList">
                    <ControlLabel>Currencies list:</ControlLabel>
                    <FormControl componentClass="select" multiple>
                        {currencies.map(
                            currency =>   <option value={currency} key={currency}>{currency}</option>
                        )}
                    </FormControl>
                </FormGroup>
            </div>
        )
    }
}

export default CurrenciesList;