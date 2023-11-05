import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  email: "",
  userId: "",
  profilePicture: "",
  likedPosts: [],
  followedIds: [],
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      const { name, username, email, id, profile_image_url, likedPostsIds } =
        action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
      state.userId = id;
      state.profilePicture = profile_image_url;
      state.likedPosts = likedPostsIds;
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
    updateLikedPosts(state, action) {
      state.likedPosts = action.payload;
    },
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
