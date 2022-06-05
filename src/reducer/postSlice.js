import { createSlice } from "@reduxjs/toolkit";
import { addPostToDataBase, getPost } from "./post";

const initialState = {
  posts: [],
  modal: false,
  status: "idle",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    ToggleModal: (state, action) => {
      state.modal = action.payload;
    },
  },
  extraReducers: {
    [getPost.pending]: (state) => {
      state.status = "pending";
    },
    [getPost.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.posts = action.payload.posts;
    },
    [getPost.rejected]: (state, action) => {
      state.status = "rejcted";
      state.posts = action.payload;
    },
    [addPostToDataBase.pending]: (state) => {
      state.status = "pending";
    },
    [addPostToDataBase.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.posts = action.payload.posts;
    },
    [addPostToDataBase.rejected]: (state, action) => {
      state.status = "rejcted";
      state.posts = action.payload;
    },
  },
});

export const { AddPost, ToggleModal } = postSlice.actions;

export default postSlice.reducer;
