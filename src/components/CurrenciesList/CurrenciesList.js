import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, Button, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchUserFavorite} from "../../state/favorites/fetchUserFavorite";
import './CurrenciesList.css'

const mapStateToProps = state =>({
    chosenCurrencies: state.favoritesData.favoriteCurrencies
});

const mapDispatchToProps = dispatch => ({
    fetchUserFavorite: (currencySymbol) => dispatch(fetchUserFavorite(currencySymbol))
})

export class CurrenciesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currencySymbols: [props.currencies[0]]
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
                {
                    this.props.currencies.length < 1 ?
                    <Alert bsStyle="danger">
                        There are no currencies available to follow.
                    </Alert> :
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="currenciesList">
                            <ControlLabel className="currency-list-title">Currencies list:</ControlLabel>
                            <FormControl componentClass="select" size={13} multiple defaultValue={[this.props.currencies[0]]}
                                         onChange={this.handleChange}
                                         className="currency-list">
                                {this.props.currencies.map(
                                    currency => <option value={currency} key={currency}>{currency}</option>
                                )}
                            </FormControl>
                        </FormGroup>
                        <Button type="submit" bsStyle="primary" bsSize="large">Add to favorites</Button>
                    </form>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesList);