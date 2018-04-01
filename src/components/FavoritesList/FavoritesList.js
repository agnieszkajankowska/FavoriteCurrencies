import React, { Component } from 'react';
import { PanelGroup, Button } from 'react-bootstrap';
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
            <div>
                <span>Favorites List:</span>
                <Button onClick={this.handleDeleteAll}>Delete All</Button>
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