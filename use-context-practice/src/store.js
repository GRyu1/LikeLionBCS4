import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./CountSlice";


const store = configureStore({
  reducer: {
    countReducer: countSlice.reducer,
  },
});

export default store;