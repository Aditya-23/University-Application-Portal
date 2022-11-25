import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./alert";
import authReducer from "./authReducer";

export default combineReducers({
    authReducer,
    alertReducer,
})