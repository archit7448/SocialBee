import { createSlice } from "@reduxjs/toolkit";
import {
  addCommentToDatabase,
  deleteCommentToDatabase,
  editCommentToDatabase,
} from "./comment";
import {
  addPostToDataBase,
  bookMarkPost,
  deletePost,
  dislikePost,
  editPost,
  getBookMark,
  getPost,
  likePost,
  removeBookMarkPost,
} from "./post";

const initialState = {
  posts: [],
  modal: false,
  bookMark: [],
  status: "idle",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.modal = action.payload;
    },
    toggleDisable: (state, action) => {
      state.posts = state.posts.map((postsData) =>
        postsData._id === action.payload
          ? { ...postsData, disabledState: !postsData.disabledState }
          : postsData
      );
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
    [getPost.rejected]: (state) => {
      state.status = "rejected";
    },
    [getBookMark.pending]: (state) => {
      state.status = "pending";
    },
    [getBookMark.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.bookMark = action.payload.bookmarks;
    },
    [getBookMark.rejected]: (state) => {
      state.status = "rejected";
    },
    [addPostToDataBase.pending]: (state) => {
      state.status = "pending";
    },
    [addPostToDataBase.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.posts = action.payload.posts;
    },
    [addPostToDataBase.rejected]: (state) => {
      state.status = "rejected";
    },
    [likePost.pending]: (state) => {
      state.status = "pending";
    },
    [likePost.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.posts = action.payload.posts;
    },
    [likePost.rejected]: (state) => {
      state.status = "rejected";
    },
    [dislikePost.pending]: (state) => {
      state.status = "pending";
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.posts = action.payload.posts;
    },
    [dislikePost.rejected]: (state) => {
      state.status = "rejected";
    },
    [bookMarkPost.pending]: (state) => {
      state.status = "pending";
    },
    [bookMarkPost.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.bookMark = action.payload.bookmarks;
    },
    [bookMarkPost.rejected]: (state) => {
      state.status = "rejected";
    },
    [removeBookMarkPost.pending]: (state) => {
      state.status = "pending";
    },
    [removeBookMarkPost.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.bookMark = action.payload.bookmarks;
    },
    [removeBookMarkPost.rejected]: (state) => {
      state.status = "rejected";
    },
    [editPost.pending]: (state) => {
      state.status = "pending";
    },
    [editPost.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.posts = action.payload.posts;
    },
    [editPost.rejected]: (state) => {
      state.status = "rejected";
    },
    [deletePost.pending]: (state) => {
      state.status = "pending";
    },
    [deletePost.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.posts = action.payload.posts;
    },
    [deletePost.rejected]: (state) => {
      state.status = "rejected";
    },
    [addCommentToDatabase.pending]: (state) => {
      state.status = "pending";
    },
    [addCommentToDatabase.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.posts = action.payload.posts;
    },
    [addCommentToDatabase.rejected]: (state) => {
      state.status = "rejected";
    },
    [editCommentToDatabase.pending]: (state) => {
      state.status = "pending";
    },
    [editCommentToDatabase.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.posts = action.payload.posts;
    },
    [editCommentToDatabase.rejected]: (state) => {
      state.status = "rejected";
    },
    [deleteCommentToDatabase.pending]: (state) => {
      state.status = "pending";
    },
    [deleteCommentToDatabase.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.posts = action.payload.posts;
    },
    [deleteCommentToDatabase.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export const { AddPost, toggleModal, toggleDisable, ToggleComment } =
  postSlice.actions;

export default postSlice.reducer;
