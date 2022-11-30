import axios from "axios";
import { setAuthToken } from "../utils";
import {
    LOADING_STARTED,
    LOADING_DONE,
    USER_AUTHENTICATED,
    USER_AUTHENTICATION_FAILED,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_USER,
    SET_ALERT,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    CLEAR_UNIVERSITY
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
        const response = await axios.get("students/");
        console.log(response);
        if(response.status == 200){
            dispatch({
                type: USER_AUTHENTICATED,
                payload: response.data
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
        const response = await axios.post("students/login", userObj, config);
        console.log(response);
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
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: null
        });
        dispatch({
            type: SET_ALERT,
            payload: {
                msg: error.response.data.msg
            }
        })
    }
}

const logoutUser = () => async dispatch => {
    dispatch({
        type: LOGOUT_USER
    });
    dispatch({
        type: CLEAR_UNIVERSITY
    })
}

//register a user
const registerUser = (userObj) => async dispatch => {
    const { name, email, password } = userObj;

    const config = {
        headers: {
            'Content-Type' : "application/json"
        }
    };

    try {
        const response = await axios.post("students/signup", userObj, config);
        console.log(response);
        if(response.status == 200){
            dispatch({
                type: REGISTER_SUCCESS,
                payload: {
                    token: response.data.token,
                    user: userObj
                }
            })
        }
        else{
            dispatch({
                type: REGISTER_FAIL,
                payload: null
            })
        }
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: REGISTER_FAIL,
            payload: null
        });
        dispatch({
            type: SET_ALERT,
            payload: {
                msg: error.response.data.msg
            }
        })
    }
}

export {
    loginUser,
    loadUser,
    logoutUser,
    registerUser,
}