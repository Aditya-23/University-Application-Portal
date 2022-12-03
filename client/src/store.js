import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { uniApiSlice } from "./api/uniTemp.js";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(uniApiSlice.middleware);
  },
});

export default store;
