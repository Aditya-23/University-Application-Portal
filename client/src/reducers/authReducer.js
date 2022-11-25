import * as types from "../actions/types";

const initialState = {
    isAuthenticated: false,
    loading: true,
    user: null,
    token: null,
}

const authReducer = (state = initialState, action) => {
    const {type, payload} = action;
    // Define all your types here
    switch (type) {
        case types.LOADING_STARTED:
            return {
                ...state,
                loading: true
            };
        case types.LOADING_DONE:
            return {
                ...state,
                loading: false
            }
        default:
            break;
    }
    return state;
}

export default authReducer;