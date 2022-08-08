import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notifyMessage, notifySuccess } from "../utility/Notification/toast";
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
  async ({ followUserId, token }, { rejectWithValue }) => {
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
      notifySuccess("User Followed!");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
export const unfollowUser = createAsyncThunk(
  "/api/users/unfollow/:followUserId",
  async ({ followUserId, token }, { rejectWithValue }) => {
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
      notifySuccess("User Unfollowed!");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const EditUser = createAsyncThunk(
  "/api/users/edit",
  async ({ userData, token }, { rejectWithValue }) => {
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
      notifySuccess("Profile Edited");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
