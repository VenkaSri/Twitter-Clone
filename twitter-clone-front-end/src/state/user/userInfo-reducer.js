import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "venka",
  email: "venka@gmail.com",
  isAuthenticated: false,
  isUsernameSet: true,
  hasOneFollowing: false,
  followers: [],
  following: [],
  tweets: [],
  followingCount: 0,
  followersCount: 0,
  userId: 269,
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setUsername(state, action) {
      state.username = action.payload;
    },
    setAuthentication(state, action) {
      state.isAuthenticated = action.payload;
    },
    setUsernameValidity(state, action) {
      state.isUsernameSet = action.payload;
    },
    setOneFollowingValidity(state, action) {
      state.hasOneFollowing = action.payload;
    },
    setFollowers(state, action) {
      state.followers = action.payload;
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setFollowingCount(state, action) {
      state.followingCount = action.payload;
    },
    setFollowersCount(state, action) {
      state.followersCount = action.payload;
    },
  },
});

export const userInfoActions = userInfoSlice.actions;
export default userInfoSlice.reducer;
