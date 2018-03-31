import React, { Component } from 'react';
import { PanelGroup } from 'react-bootstrap';
import FavoriteItem from './FavoriteItem/FavoriteItem';

class FavoritesList extends Component {

    render() {
        return (
            <div>
                <span>Favorites List:</span>
                <PanelGroup
                    accordion
                    id="favoritesList"
                >
                    <FavoriteItem />
                </PanelGroup>
            </div>
        )
    }
}

export default FavoritesList;