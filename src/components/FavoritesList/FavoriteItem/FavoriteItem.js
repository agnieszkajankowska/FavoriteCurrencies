import React, {Component} from 'react';
import {Panel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {deleteUserFavoriteItem} from "../../../state/favorites/removeFromFavorites";
import './FavoriteItem.css'


const mapDispatchToProps = dispatch => ({
    deleteUserFavoriteItem: (currencySymbol) => dispatch(deleteUserFavoriteItem(currencySymbol))
})

class FavoriteItem extends Component {
    constructor() {
        super()

        this.handleDelete = () => {
            this.props.deleteUserFavoriteItem(this.props.currency.code);
        }
    }

    render() {
        return (
            <Panel eventKey={this.props.order} key={this.props.order} bsStyle="primary" className="favorite-item">
                <Panel.Heading>
                    <Panel.Title>{this.props.currency.code}</Panel.Title>
                    <Button onClick={this.handleDelete} bsStyle="link">X</Button>
                </Panel.Heading>
                <Panel.Body><span className="buy-rate">Buy: {this.props.currency.rates[0].ask}</span>
                    <span className="sell-rate">Sell: {this.props.currency.rates[0].bid}</span>
                </Panel.Body>
            </Panel>
        )
    }
}

export default connect(null, mapDispatchToProps)(FavoriteItem);