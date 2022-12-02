import * as types from "../actions/types";

const initialState = {
    createdBy: null,
    createByEmail: null,
    gender: null,
    dateOfBirth: null,
    applyingTo: null,
    semIntake: null,
    programName: null,
    specialization: null,
    lor1: null,
    lor2: null,
    lor3: null,
    sop: null,
    resume: null
}

const applicationReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case "1":

            break;
    
        default:
            break;
    }

    return state;
}

export default applicationReducer;
