import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authType: null,
  isCancelled: false,
  isFormDialogOpen: false,
  isUnfollowed: false,
  selectUser: "",
  follow: false,
  isDialogOpen: false,
  manualNavigation: false,
  trigger: "",
  error: false,
  dialogBodyOverFlowing: false,
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
    setDialogState(state, action) {
      state.isDialogOpen = action.payload;
    },
    setManualNavigation(state, action) {
      state.manualNavigation = action.payload;
    },
    setTrigger(state, action) {
      state.trigger = action.payload;
    },
    setAuthType(state, action) {
      state.authType = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setDialogBodyOverFlowing(state, action) {
      state.dialogBodyOverFlowing = action.payload;
    },
  },
});

export const unfollowDialogActions = unfollowDialogSlice.actions;
export default unfollowDialogSlice.reducer;
