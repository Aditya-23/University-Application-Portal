import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./alert";
import authReducer from "./authReducer";
import universityReducer from "./universityReducer";
import { uniApiSlice } from "../api/uniTemp.js";

export default combineReducers({
  uniApi: uniApiSlice.reducer,
  authReducer,
  alertReducer,
  universityReducer,
});
