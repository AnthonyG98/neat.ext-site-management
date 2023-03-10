import { configureStore, createSlice } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import taskSlice from "./task-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    task: taskSlice.reducer,
  },
});
export default store;
