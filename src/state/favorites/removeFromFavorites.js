import {
    DELETE_USER_FAVORITE,
    DELETE_USER_FAVORITES
}
    from './actionTypes'

export const deleteUserFavoriteItem = (currencySymbol) => {
    return (dispatch) =>
        dispatch({
            type: DELETE_USER_FAVORITE,
            currencySymbol: currencySymbol
        })
}

export const deleteUserFavorites = () => {
    return (dispatch) =>
        dispatch({
            type: DELETE_USER_FAVORITES
        })
}
