import React, {Component} from 'react';
import {Panel, Button} from 'react-bootstrap';

class FavoriteItem extends Component {
    render() {
        return (
            <Panel eventKey={this.props.order}>
                <Panel.Heading>
                    <Panel.Title toggle>{this.props.currency.code}<Button>Delete</Button></Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>Buy: {this.props.currency.rates[0].ask} Sell: {this.props.currency.rates[0].bid}</Panel.Body>
            </Panel>
        )
    }
}

export default FavoriteItem;