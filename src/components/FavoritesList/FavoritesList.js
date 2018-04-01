import React, { Component } from 'react';
import { PanelGroup, Button, Alert } from 'react-bootstrap';
import FavoriteItem from './FavoriteItem/FavoriteItem';
import {connect} from 'react-redux';
import {deleteUserFavorites } from '../../state/favorites/removeFromFavorites';
import './FavoritesList.css'

const mapStateToProps = state =>({
    chosenCurrencies: state.favoritesData.favoriteCurrencies,
    pending: state.favoritesData.pending
});

const mapDispatchToProps = dispatch => ({
    deleteUserFavorites: () => dispatch(deleteUserFavorites())
})


class FavoritesList extends Component {
constructor() {
    super()

    this.handleDeleteAll = () => {
        this.props.deleteUserFavorites();
    }
}
    render() {
        return (
            <div className="favorites-list-container">
                <h4 className="favorites-list-title">Favorites List:</h4>
                {this.props.chosenCurrencies.length > 0 ?
                    <Button onClick={this.handleDeleteAll} bsStyle="danger" className="delete-all-btn">Delete All</Button> :
                    <Alert bsStyle="info">
                        <strong>Hey there!</strong> Here, you will see currencies exchange rate, after adding to favorites.
                    </Alert>}
                <PanelGroup
                    id="favoritesList"
                >
                    { this.props.pending ? <div className="loader"></div> :
                        this.props.chosenCurrencies.map( (currency, index) =>
                            <FavoriteItem currency={currency} order={index} key={index} />
                    )}
                </PanelGroup>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);