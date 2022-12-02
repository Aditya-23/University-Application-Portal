import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./alert";
import applicationReducer from "./Application";
import authReducer from "./authReducer";
import universityReducer from "./universityReducer";


export default combineReducers({
    authReducer,
    alertReducer,
    universityReducer,
    applicationReducer,
})