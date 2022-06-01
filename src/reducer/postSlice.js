import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    AddPost: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { AddPost } = postSlice.actions;

export default postSlice.reducer;
