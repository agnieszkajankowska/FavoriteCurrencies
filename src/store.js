import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import favoritesReducer from './state/favorites/reducer'

const reducer = combineReducers({
    favoritesData: favoritesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunkMiddleware // lets us dispatch() functions (thunks) in addition to objects with 'type' attribute
    )
);

const store = createStore(reducer, enhancer);

export default store