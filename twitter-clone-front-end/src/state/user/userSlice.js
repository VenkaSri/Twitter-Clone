import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../../services/auth/getData";

const initialState = {
  name: "",
  username: "test1",
  email: "",
  userId: "",
  profilePicture: "",
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
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;

export const fetchUserDetails = () => async (dispatch) => {
  const response = await getData("/api/user_details");
  dispatch(userSliceActions.setEmail(response.email));
  dispatch(userSliceActions.setName(response.name));
  dispatch(userSliceActions.setUserId(response.id));
  dispatch(userSliceActions.setUsername(response.username));
};
