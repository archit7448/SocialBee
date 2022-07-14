import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");

export const addCommentToDatabase = createAsyncThunk(
  "/api/comments/add/:postId",
  async (data, { rejectWithValue }) => {
    const { postId, commentData, token } = data;
    try {
      const response = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
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

export const CommentToDatabase = createAsyncThunk(
  "/api/comments/add/:postId",
  async (data, { rejectWithValue }) => {
    const { postId, commentData, token } = data;
    try {
      const response = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
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
export const editCommentToDatabase = createAsyncThunk(
  "/api/comments/edit/:postId/:commentId",
  async (data, { rejectWithValue }) => {
    const { postId, commentData, commentId, token } = data;
    try {
      const response = await axios.post(
        `/api/comments/edit/${postId}/${commentId}/`,
        { commentData },
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
export const deleteCommentToDatabase = createAsyncThunk(
  "/api/comments/delete/:postId/:commentId",
  async (data, { rejectWithValue }) => {
    const { postId, commentId, token } = data;
    try {
      const response = await axios.delete(
        `/api/comments/delete/${postId}/${commentId}/`,
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
