import {
    DELETE_USER_FAVORITE
}
    from './actionTypes'

export const deleteUserFavoriteItem = (currencySymbol) => {
    return (dispatch) => {
        console.log(currencySymbol);
        dispatch({
            type: DELETE_USER_FAVORITE,
            currencySymbol: currencySymbol
        })
    }
}