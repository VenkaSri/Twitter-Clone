import { createSlice } from "@reduxjs/toolkit";
import { UploadProfilePictureStep } from "../../components/dialog/signup/steps/profile_picture/UploadProfilePictureStep";

const initialState = {
  dialogHeaderContent: null,
  dialogBodyContent: <UploadProfilePictureStep />,
  isDialogOpen: false,
};

const dialogSlice = createSlice({
  name: "dialogSlice",
  initialState,
  reducers: {
    setDialogHeaderContent(state, action) {
      state.dialogHeaderContent = action.payload;
    },
    setDialogBodyContent(state, action) {
      state.dialogBodyContent = action.payload;
    },
    setIsDialogOpen(state, action) {
      state.isDialogOpen = action.payload;
    },
  },
});

export const dialogSliceActions = dialogSlice.actions;
export default dialogSlice.reducer;
