import {
    FETCH_USER_FAVORITE__BEGIN,
    FETCH_USER_FAVORITE__SUCCESS,
    FETCH_USER_FAVORITE__FAILURE
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
        default : return state
    }
}