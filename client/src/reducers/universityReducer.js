import * as types from "../actions/types";

const initialState = {
    university:{},
    imgURL1: null,
    imgURL2: null,
    imgURL3: null,
    id: null
}

const universityReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case types.UNIVERSITY_LOAD_START:
            return {
                ...state,
                id: payload
            }
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
        case types.IMG1_RECEIVED:
            return{
                ...state,
                imgURL1: payload
            }
        case types.IMG2_RECEIVED:
            return{
                ...state,
                imgURL2: payload
            }
        
        case types.IMG3_RECEIVED:
            return{
                ...state,
                imgURL3: payload
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