import {createStore, combineReducers} from 'redux';

import placeReducer from './reducers/places';

var reducer = combineReducers({
    places: placeReducer
});


const configureStore = () => {
    return createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

export default configureStore;