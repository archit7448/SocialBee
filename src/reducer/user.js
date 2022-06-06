import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk("/api/users", async () => {
  try {
    const response = await axios.get("/api/users");
    return response.data;
  } catch (error) {
    return error;
  }
});
