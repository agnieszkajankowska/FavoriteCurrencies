import React, { Component } from 'react';
import { PanelGroup, Button } from 'react-bootstrap';
import FavoriteItem from './FavoriteItem/FavoriteItem';

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
                    <FavoriteItem />
                </PanelGroup>
            </div>
        )
    }
}

export default FavoritesList;