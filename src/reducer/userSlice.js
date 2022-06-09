import { createSlice } from "@reduxjs/toolkit";
import { EditUser, followUser, getUserData, unfollowUser } from "./user";

const initialState = {
  users: [],
  status: "idle",
  EditState: true,
  userData: JSON.parse(localStorage.getItem("user")),
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    ToggleEdit: (state) => {
      state.EditState = !state.EditState;
    },
  },
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
    [followUser.pending]: (state) => {
      state.status = "pendindg";
    },
    [followUser.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.users = state.users.map((data) =>
        action.payload.followUser._id === data._id
          ? action.payload.followUser
          : data
      );
      state.userData = action.payload.user;
    },
    [followUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [unfollowUser.pending]: (state) => {
      state.status = "pendindg";
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.users = state.users.map((data) =>
        action.payload.followUser._id === data._id
          ? action.payload.followUser
          : data
      );
      state.userData = action.payload.user;
    },
    [unfollowUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [EditUser.pending]: (state) => {
      state.status = "pendindg";
    },
    [EditUser.fulfilled]: (state, action) => {
      state.status = "fullfilled";
      state.userData = action.payload.user;
    },
    [EditUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { ToggleEdit } = userSlice.actions;

export default userSlice.reducer;
