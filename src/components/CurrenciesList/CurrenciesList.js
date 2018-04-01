import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchUserFavorite} from "../../state/favorites/fetchUserFavorite";
import './CurrenciesList.css'

const mapStateToProps = state =>({
    chosenCurrencies: state.favoritesData.favoriteCurrencies
});

const mapDispatchToProps = dispatch => ({
    fetchUserFavorite: (currencySymbol) => dispatch(fetchUserFavorite(currencySymbol))
})

const currencies = ["USD", "AUD", "CAD", "EUR", "HUF", "CHF", "GBP", "JPY", "CZK", "DKK", "NOK", "SEK", "XDR"];
class CurrenciesList extends Component {
    constructor() {
        super()

        this.state = {
            currencySymbols: [currencies[0]]
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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="currenciesList">
                    <ControlLabel className="currency-list-title">Currencies list:</ControlLabel>
                    <FormControl componentClass="select" size={13} multiple defaultValue={[currencies[0]]} onChange={this.handleChange}
                                 className="currency-list">
                        {currencies.map(
                            currency =>   <option value={currency} key={currency}>{currency}</option>
                        )}
                    </FormControl>
                </FormGroup>
                <Button type="submit" bsStyle="primary" bsSize="large">Add to favorites</Button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesList);