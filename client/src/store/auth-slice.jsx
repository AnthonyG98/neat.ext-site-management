import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    fullName: "",
    username: "",
    password: "",
    profilePic: "",
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    inputFullName(state, fullNameInput) {
      state.fullName = fullNameInput;
    },
    inputUsername(state, usernameInput) {
      state.username = usernameInput;
    },
    inputPassword(state, passwordInput) {
      state.password = passwordInput;
    },
    profileImg(state, profilePicture) {
      state.profilePic = profilePicture;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
