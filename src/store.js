import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducer/postSlice";
import userReducer from "./reducer/userSlice";

export const store = configureStore({
  reducer: { posts: postsReducer, users: userReducer },
});
