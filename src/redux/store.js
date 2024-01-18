import { configureStore } from "@reduxjs/toolkit";
import searchDataReducer from "./slices/searchDataSlice";

const store = configureStore({
  reducer: {
    searchData: searchDataReducer,
  },
});

export default store;
