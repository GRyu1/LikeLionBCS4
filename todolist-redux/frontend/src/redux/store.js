const { configureStore } = require("@reduxjs/toolkit");
const { default: appSlice } = require("./appSlice");

const store = configureStore({
  reducer: {
    appReducer: appSlice.reducer,
  },
});

export default store;
