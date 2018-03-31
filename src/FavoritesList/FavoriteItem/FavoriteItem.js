import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class FavoriteItem extends Component {
    render() {
        return (
            <Panel eventKey="1">
                <Panel.Heading>
                    <Panel.Title toggle>USD</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>Buy: 3,40 Sell: 3,43</Panel.Body>
            </Panel>
        )
    }
}

export default FavoriteItem;