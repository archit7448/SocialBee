import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notifyInfo, notifySuccess } from "../utility/Notification/toast";

export const getPost = createAsyncThunk("/api/posts", async () => {
  try {
    const response = await axios.get("/api/posts");
    return response.data;
  } catch (error) {
    return error;
  }
});

export const getBookMark = createAsyncThunk(
  "/api/users/bookmark",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/users/bookmark", {
        headers: {
          authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/*Add PostData to User*/

export const addPostToDataBase = createAsyncThunk(
  "/api/posts",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const likePost = createAsyncThunk(
  "/api/posts/like/:postId",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      notifySuccess("Liked!");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "/api/posts/ dislike/:postId",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      notifySuccess("Like Removed");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const bookMarkPost = createAsyncThunk(
  "/api/users/bookmark/:postId",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      notifySuccess("Bookmarked!");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const removeBookMarkPost = createAsyncThunk(
  "/api/users/remove-bookmark/:postId",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      notifySuccess("Bookmark Removed");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const editPost = createAsyncThunk(
  "/api/posts/edit/:postId",
  async (data, { rejectWithValue }) => {
    const { postData, postId, token } = data;
    try {
      const response = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData },
        {
          headers: {
            authorization: token,
          },
        }
      );
      notifySuccess("Edited!");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "/api/posts/:postId",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: token,
        },
      });
      notifySuccess("Deleted!");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
