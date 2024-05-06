// reducers.js
import { combineReducers } from 'redux';
import { LOGIN_SUCCESS } from '../actions';

const initialState = {
    isLoggedIn: false
};
console.log({"state":initialState})
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;
