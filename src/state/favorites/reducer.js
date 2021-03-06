import { uniqBy } from 'lodash'
import {
    FETCH_USER_FAVORITE__BEGIN,
    FETCH_USER_FAVORITE__SUCCESS,
    FETCH_USER_FAVORITE__FAILURE,
    DELETE_USER_FAVORITE,
    DELETE_USER_FAVORITES

}
    from './actionTypes'


const initialState = {
    favoriteCurrencies: [],
    pending: false,
    failure: false
}


export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USER_FAVORITE__BEGIN:
            return {
                ...state,
                pending: action.pending
            }
        case FETCH_USER_FAVORITE__SUCCESS:
            return {
                ...state,
                favoriteCurrencies: uniqBy(state.favoriteCurrencies.concat(action.exchangeRate), 'code'),
                pending: action.pending
            }
        case FETCH_USER_FAVORITE__FAILURE:
            return {
                ...state,
                pending: action.pending,
                failure: action.failure
            }
        case DELETE_USER_FAVORITE:
            return {
                ...state,
                favoriteCurrencies: state.favoriteCurrencies.filter(currency => currency.code !== action.currencySymbol)
            }
        case DELETE_USER_FAVORITES:
            return {
                ...state,
                favoriteCurrencies: []
            }
        default : return state
    }
}