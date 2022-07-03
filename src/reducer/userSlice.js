import { createSlice } from "@reduxjs/toolkit";
import { EditUser, followUser, getUserData, unfollowUser } from "./user";

const initialState = {
  users: [],
  status: "idle",
  EditState: true,
  token: localStorage.getItem("token"),
  userData: JSON.parse(localStorage.getItem("user")),
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    ToggleEdit: (state) => {
      state.EditState = !state.EditState;
    },
    updateUserData: (state) => {
      state.userData = JSON.parse(localStorage.getItem("user"));
    },
    updateToken: (state) => {
      state.token = localStorage.getItem("token");
    },
    updateUsersData: (state) => {
      state.users = [...state.users, JSON.parse(localStorage.getItem("user"))];
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
      state.users = state.users.map((data) =>
        action.payload.user.username === data.username
          ? action.payload.user
          : data
      );
    },
    [EditUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { ToggleEdit, updateUserData, updateToken, updateUsersData } =
  userSlice.actions;

export default userSlice.reducer;
