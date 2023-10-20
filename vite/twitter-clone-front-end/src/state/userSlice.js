import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  email: "",
  userId: "",
  profilePicture:
    "https://twitter-clone-2023-test.s3.amazonaws.com/profile-pictures/esafd/photo-1493612276216-ee3925520721.jpg",
  likedPosts: [],
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      const { name, username, email, userId, profilePicture, likedPosts } =
        action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
      state.userId = userId;
      state.profilePicture = profilePicture;
      state.likedPosts = likedPosts;
    },
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
