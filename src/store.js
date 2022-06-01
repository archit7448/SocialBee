import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducer/postSlice";

export const store = configureStore({
  reducer:{posts:postsReducer}
})
