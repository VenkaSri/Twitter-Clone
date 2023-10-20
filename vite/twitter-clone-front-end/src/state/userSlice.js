import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "hello",
  email: "",
  userId: "",
  profilePicture: "",
  likedPosts: [],
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    // ... (other actions)
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
