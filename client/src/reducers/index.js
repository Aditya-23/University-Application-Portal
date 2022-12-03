import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./alert";
import applicationReducer from "./Application";
import authReducer from "./authReducer";
import universityReducer from "./universityReducer";
import { uniApiSlice } from "../api/uniTemp.js";

export default combineReducers({
  [uniApiSlice.reducerPath]: uniApiSlice.reducer,
  authReducer,
  alertReducer,
  universityReducer,
});
