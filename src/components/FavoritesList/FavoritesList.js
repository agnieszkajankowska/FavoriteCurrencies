import React, { Component } from 'react';
import { PanelGroup, Button } from 'react-bootstrap';
import FavoriteItem from './FavoriteItem/FavoriteItem';
import {connect} from 'react-redux';

const mapStateToProps = state =>({
    chosenCurrencies: state.favoritesData.favoriteCurrencies
});

class FavoritesList extends Component {

    render() {
        return (
            <div>
                <span>Favorites List:</span>
                <Button>Delete All</Button>
                <PanelGroup
                    accordion
                    id="favoritesList"
                >
                    {this.props.chosenCurrencies.map( (currency, index) =>
                        <FavoriteItem currency={currency} order={index} />
                    )}
                </PanelGroup>
            </div>
        )
    }
}

export default connect(mapStateToProps)(FavoritesList);