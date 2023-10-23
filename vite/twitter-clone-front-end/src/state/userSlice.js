import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  email: "",
  userId: "",
  profilePicture:
    "https://twitter-clone-2023-test.s3.amazonaws.com/profile-pictures/esafd/photo-1493612276216-ee3925520721.jpg",
  likedPosts: [],
  followedIds: [],
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
    addFollowedUser(state, action) {
      const userId = action.payload;
      if (!state.followedIds.includes(userId)) {
        state.followedIds.push(userId);
      }
    },
    removeFollowedUser(state, action) {
      const userId = action.payload;
      state.followedIds = state.followedIds.filter((id) => id !== userId);
    },
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
