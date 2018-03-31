import {
    FETCH_USER_FAVORITE__BEGIN,
    FETCH_USER_FAVORITE__SUCCESS,
    FETCH_USER_FAVORITE__FAILURE,
    DELETE_USER_FAVORITE
}
    from './actionTypes'


const initialState = {
    favoriteCurrencies: []
}


export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USER_FAVORITE__SUCCESS:
            return {
                ...state,
                favoriteCurrencies: state.favoriteCurrencies.concat(action.exchangeRate)
            }
        case DELETE_USER_FAVORITE:
            return {
                ...state,
                favoriteCurrencies: state.favoriteCurrencies.filter(currency => currency.code !== action.currencySymbol)
            }
        default : return state
    }
}