import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { apiSlice } from "./api/apiSlice";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export default store;
