import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    AddPost: (state, action) => {
      console.log(state.posts);
      console.log(action.payload);
      state.posts = action.payload;
    },
  },
});

export const { AddPost } = postSlice.actions;

export default postSlice.reducer;
