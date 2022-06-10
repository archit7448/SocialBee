import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = localStorage.getItem("token");

export const getUserData = createAsyncThunk("/api/users", async () => {
  try {
    const response = await axios.get("/api/users");
    return response.data;
  } catch (error) {
    return error;
  }
});

export const followUser = createAsyncThunk(
  "/api/users/follow/:followUserId",
  async (followUserId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
export const unfollowUser = createAsyncThunk(
  "/api/users/unfollow/:followUserId",
  async (followUserId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const EditUser = createAsyncThunk(
  "/api/users/edit",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/edit`,
        { userData },
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
