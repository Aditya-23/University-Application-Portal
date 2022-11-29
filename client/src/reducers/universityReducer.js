import * as types from "../actions/types";

const initialState = {
    university:{},
    imgURL: null
}

const universityReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case types.UNIVERSITY_LOADED:
            return{
                ...state,
                university: payload
            }
        case types.UNIVERSITY_LOADED_FAILED:
        case types.CLEAR_UNIVERSITY:
            return{
                ...state,
                university: null
            }
        case types.IMG_RECEIVED:
            return{
                ...state,
                imgURL: payload
            }
        case types.IMG_RECEIVED_FAILED:
            return {
                ...state,
                imgURL: null
            }
        default:
            break;
        
    }
    return state;
}

export default universityReducer;