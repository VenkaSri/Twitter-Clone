import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCancelled: false,
  isFormDialogOpen: false,
  isUnfollowed: false,
  selectUser: "",
}

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
    }
  }
})


export const unfollowDialogActions = unfollowDialogSlice.actions;
export default unfollowDialogSlice.reducer;