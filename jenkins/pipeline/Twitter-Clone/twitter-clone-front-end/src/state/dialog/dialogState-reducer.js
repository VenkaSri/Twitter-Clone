import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-test-renderer";

const initialState = {
  isCancelled: false,
  isFormDialogOpen: false,
  isUnfollowed: false,
  selectUser: "",
  follow: false,
};

const unfollowDialogSlice = createSlice({
  name: "unfollowDialog",
  initialState,
  reducers: {
    cancelDialog(state, action) {
      state.isCancelled = action.payload;
    },
    setFormDialogOpen(state, action) {
      state.isFormDialogOpen = action.payload;
    },
    setSelectedUser(state, action) {
      state.selectUser = action.payload;
    },
    setIsUnfollowed(state, action) {
      state.isUnfollowed = action.payload;
    },
    setFollow(state, action) {
      state.follow = action.payload;
    },
  },
});

export const unfollowDialogActions = unfollowDialogSlice.actions;
export default unfollowDialogSlice.reducer;
