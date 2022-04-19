import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./../features/slices/UserSlice";

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
