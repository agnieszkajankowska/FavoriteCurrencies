import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchUserFavorite} from "../../state/favorites/fetchUserFavorite";

const mapStateToProps = state =>({
    chosenCurrencies: state.favoritesData.favoriteCurrencies
});

const mapDispatchToProps = dispatch => ({
    fetchUserFavorite: (currencySymbol) => dispatch(fetchUserFavorite(currencySymbol))
})

class CurrenciesList extends Component {
    constructor() {
        super()

        this.state = {
            currencySymbol: ''
        }

        this.handleSubmit = (event) => {
            event.preventDefault();
            this.state.currencySymbols.forEach(currencySymbol => {
                    this.props.fetchUserFavorite(currencySymbol)
                }
            )
        }

        this.handleChange = () => {
            let element = document.querySelector('#currenciesList');
            let selectedValues = [...element.options].filter(option => option.selected).map(option => option.value);
            this.setState({
                currencySymbols: selectedValues
            })
        }
    }
    render() {
        const currencies = ["USD", "AUD", "CAD", "EUR", "HUF", "CHF", "GBP", "JPY", "CZK", "DKK", "NOK", "SEK", "XDR"];

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="currenciesList">
                    <ControlLabel>Currencies list:</ControlLabel>
                    <FormControl componentClass="select" multiple onChange={this.handleChange}>
                        {currencies.map(
                            currency =>   <option value={currency} key={currency}>{currency}</option>
                        )}
                    </FormControl>
                </FormGroup>
                <Button type="submit">Add to favorites</Button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesList);

/*event =>
                        this.setState({
                        currencySymbol: event.target.value
                    })*/