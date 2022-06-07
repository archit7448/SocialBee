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
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
