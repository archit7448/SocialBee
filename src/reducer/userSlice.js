import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "./user";

const initialState = {
  users: [],
  status: "idle",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getUserData.pending]: (state) => {
      state.status = "pendindg";
    },
    [getUserData.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.users = action.payload.users;
    },
    [getUserData.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
