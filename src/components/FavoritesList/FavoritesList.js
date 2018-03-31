import React, { Component } from 'react';
import { PanelGroup, Button } from 'react-bootstrap';
import FavoriteItem from './FavoriteItem/FavoriteItem';
import {connect} from 'react-redux';
import {deleteUserFavorites } from '../../state/favorites/removeFromFavorites';

const mapStateToProps = state =>({
    chosenCurrencies: state.favoritesData.favoriteCurrencies
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
                    {this.props.chosenCurrencies.map( (currency, index) =>
                        <FavoriteItem currency={currency} order={index} key={index} />
                    )}
                </PanelGroup>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);