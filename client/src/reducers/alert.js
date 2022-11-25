
const initialState = {
    msg: null
}

// This is where the state variables are updated
const alertReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case 'SET_ALERT' :
            return {
                ...state,
                msg: payload.msg,
                alertType: payload.alertType
            };
        case 'REMOVE_ALERT' :
            return {
                msg: null
            }
        default : 
            return state;
    }
};

export default alertReducer;