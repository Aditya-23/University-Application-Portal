import axios from "axios";
import {
    LOADING_STARTED,
    LOADING_DONE,
    USER_AUTHENTICATED,
    USER_AUTHENTICATION_FAILED,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_USER,
    CLEAR_PROFILE
} from "./types";

const loadUser = () => async dispatch => {
    const token = localStorage.getItem('token');
    if(token){
        setAuthToken(token);
    }
    
    try {
        dispatch({
            type:LOADING_STARTED
        })
        const response = await axios.get("api/auth/");
        if(response.status == 200){
            dispatch({
                type: USER_AUTHENTICATED,
                payload: response.data.user
            });
        } else {
            
            dispatch({
                type: USER_AUTHENTICATION_FAILED,
                payload: null
            });
            
        }
        dispatch({
            type:LOADING_DONE
       })
    } catch (error) {
        
        dispatch({
            type: USER_AUTHENTICATION_FAILED,
            payload: null
        })
    }
}

//Login a user
const loginUser = (userObj) => async dispatch => {
    const { email, password } = userObj;
    const config = {
        headers: {
            'Content-Type' : "application/json"
        }
    };

    try {
        const response = await axios.post("api/auth", userObj, config);
        if(response.status == 200){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
            dispatch({
                type: USER_AUTHENTICATED,
                payload: response.data
            });
        }
    } catch (AxiosError) {
        dispatch({
            type: LOGIN_FAIL,
            payload: null
        });
        dispatch({
            type: SET_ALERT,
            payload: {
                msg: "Incorrect email or password!",
                alertType: "danger"
            }
        })
    }
}

const logoutUser = () => async dispatch => {
    dispatch({
        type: CLEAR_PROFILE
    })
    dispatch({
        type: LOGOUT_USER
    })
}

export {
    loginUser,
    loadUser,
    logoutUser,
}