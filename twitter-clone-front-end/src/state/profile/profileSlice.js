import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProfileSetup: false,
  didUserAddProfilePicture: false,
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setDidUserAddProfilePicture(state, action) {
      state.didUserAddProfilePicture = action.payload;
    },
  },
});

export const profileSliceActions = profileSlice.actions;
export default profileSlice.reducer;
