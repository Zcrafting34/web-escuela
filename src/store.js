import {createStore} from 'redux'

import rootReducer from './redux/reducers/reducers'


const initialState = {};



const store = createStore(
    rootReducer,
    initialState,
);

export default store;