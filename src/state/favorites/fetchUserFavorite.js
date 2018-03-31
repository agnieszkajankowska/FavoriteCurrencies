import {
    FETCH_USER_FAVORITE__BEGIN,
    FETCH_USER_FAVORITE__SUCCESS,
    FETCH_USER_FAVORITE__FAILURE
}
    from './actionTypes'

export const fetchUserFavorite = (currencySymbol) => {
    return (dispatch) => {
        dispatch({
            type: FETCH_USER_FAVORITE__BEGIN
        })
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'http://api.nbp.pl/api/exchangerates/rates/C/';
        fetch( proxyUrl + targetUrl + currencySymbol + '?format=json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(
            response => {
                return response.json().then(
                    exchangeRate => {
                        dispatch({
                            type: FETCH_USER_FAVORITE__SUCCESS,
                            exchangeRate: exchangeRate
                        })
                    }
                )
            }
        )
    }
}