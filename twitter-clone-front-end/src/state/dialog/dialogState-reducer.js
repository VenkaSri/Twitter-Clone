import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCancelled: false,
}

const unfollowDialogSlice = createSlice({
  name: "unfollowDialog",
  initialState,
  reducers: {
    cancelDialog(state, action) {
      state.name = action.payload;
    }
  }
})


export const unfollowDialogActions = unfollowDialogSlice.actions;
export default unfollowDialogSlice.reducer;