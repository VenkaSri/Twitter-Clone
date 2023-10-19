import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../../services/auth/getData";

const initialState = {
  name: "",
  username: "",
  email: "",
  userId: "",
  profilePicture: "",
  likedPosts: [],
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setUsername(state, action) {
      state.username = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setProfilePicture(state, action) {
      state.profilePicture = action.payload;
    },
    setLikedPosts(state, action) {
      state.likedPosts = action.payload;
    },
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;

export const fetchUserDetails = () => async (dispatch) => {
  const result = await getData("/api/v1/users");
  const response = await result.json();
  console.log(response);
  dispatch(userSliceActions.setEmail(response.email));
  dispatch(userSliceActions.setName(response.name));
  dispatch(userSliceActions.setUserId(response.id));
  dispatch(userSliceActions.setUsername(response.username));
  dispatch(userSliceActions.setProfilePicture(response.profile_image_url));
};
