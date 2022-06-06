import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const token = localStorage.getItem("token");

export const getPost = createAsyncThunk("/api/posts", async () => {
  try {
    const response = await axios.get("/api/posts");
    return response.data;
  } catch (error) {
    return error;
  }
});

/*Add PostData to User*/

export const addPostToDataBase = createAsyncThunk(
  "/api/posts",
  async (postData, { rejectWithValue }) => {
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
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
