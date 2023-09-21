import { createSlice } from "@reduxjs/toolkit";
import { UploadProfilePictureStep } from "../../components/dialog/signup/steps/profile_picture/UploadProfilePictureStep";
import { StepThreeFooter } from "../../components/dialog/signup/steps/3/StepThreeFooter";
import { dialogStepsConfig } from "../../config/dialogConfig";
import { DialogFooterContent } from "../../components/dialog/footer/DialogFooterContent";
import { UsernameStep } from "../../components/dialog/signup/steps/username/UsernameStep";
import { DialogHeaderContent } from "../../components/dialog/header/DialogHeaderContent";
import { StepOneBody } from "../../components/dialog/signup/steps/1/StepOneBody";
import { DialogHeaderLogo } from "../../components/dialog/header/DialogHeaderLogo";

import { DialogHeaderHeading } from "../../components/dialog/header/DialogHeaderHeading";

const initialState = {
  dialogHeaderContent: <DialogHeaderContent content={<DialogHeaderLogo />} />,
  dialogBodyContent: <UsernameStep />,
  dialogFooterContent: <DialogFooterContent profileStep={2} />,
  isDialogOpen: false,
  isACutomBody: false,
  dialogBodyOverFlowing: false,
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
  },
});

export const dialogSliceActions = dialogSlice.actions;
export default dialogSlice.reducer;
