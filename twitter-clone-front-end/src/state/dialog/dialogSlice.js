import { createSlice } from "@reduxjs/toolkit";
import { dialogStepsConfig } from "../../config/dialogConfig";
import { UsernameStep } from "../../components/dialog/signup/steps/username/UsernameStep";
import { DialogFooterContent } from "../../components/dialog/DialogFooterContent";
import { DialogHeaderContent } from "../../components/dialog/signup/header/DialogHeaderContent";
import { DialogHeaderLogo } from "../../components/dialog/signup/header/DialogHeaderLogo";

const initialState = {
  // dialogHeaderContent: null,
  // dialogBodyContent: null,
  // dialogFooterContent: null,
  // dialogHeaderContent: <DialogHeaderContent content={<DialogHeaderLogo />} />,
  // dialogBodyContent: <UsernameStep />,
  // dialogFooterContent: <DialogFooterContent profileStep={2} />,
  // isDialogOpen: false,
  // isACutomBody: false,
  dialogBodyOverFlowing: false,
  isDialogContentLoaded: false,
  endOfScroll: false,
  isDialogOpen: false,
};

const dialogSlice = createSlice({
  name: "dialogSlice",
  initialState,
  reducers: {
    setDialogContent(state, action) {
      const { header, body, footer } = dialogStepsConfig[action.payload];
      state.dialogHeaderContent = header;
      state.dialogBodyContent = body;
      state.dialogFooterContent = footer;
    },
    setIsDialogOpen(state, action) {
      state.isDialogOpen = action.payload;
    },
    setDialogBodyOverFlowing(state, action) {
      state.dialogBodyOverFlowing = action.payload;
    },
    setIsDialogContentLoaded(state, action) {
      state.isDialogContentLoaded = action.payload;
    },
    setEndOfScroll(state, action) {
      state.endOfScroll = action.payload;
    },
  },
});

export const dialogSliceActions = dialogSlice.actions;
export default dialogSlice.reducer;
