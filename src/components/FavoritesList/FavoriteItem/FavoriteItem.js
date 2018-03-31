import React, {Component} from 'react';
import {Panel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {deleteUserFavoriteItem} from "../../../state/favorites/removeFromFavorites";

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
            <Panel eventKey={this.props.order} key={this.props.order}>
                <Panel.Heading>
                    <Panel.Title>{this.props.currency.code}</Panel.Title>
                    <Button onClick={this.handleDelete}>Delete</Button>
                </Panel.Heading>
                <Panel.Body>Buy: {this.props.currency.rates[0].ask} Sell: {this.props.currency.rates[0].bid}
                </Panel.Body>
            </Panel>
        )
    }
}

export default connect(null, mapDispatchToProps)(FavoriteItem);