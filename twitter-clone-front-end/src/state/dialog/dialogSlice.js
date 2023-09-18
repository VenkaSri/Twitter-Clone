import { createSlice } from "@reduxjs/toolkit";
import { UploadProfilePictureStep } from "../../components/dialog/signup/steps/profile_picture/UploadProfilePictureStep";
import { StepThreeFooter } from "../../components/dialog/signup/steps/3/StepThreeFooter";
import dialogConfig from "../../config/dialogConfig";
import { DialogFooterContent } from "../../components/dialog/footer/DialogFooterContent";
import { UsernameStep } from "../../components/dialog/signup/steps/username/UsernameStep";
import { DialogHeaderContent } from "../../components/dialog/header/DialogHeaderContent";
import { StepOneBody } from "../../components/dialog/signup/steps/1/StepOneBody";
import { DialogHeaderHeading } from "../../components/dialog/header/DialogHeaderHeading";

const initialState = {
  dialogHeaderContent: (
    <DialogHeaderContent
      icon={true}
      content={<DialogHeaderHeading heading="Step" />}
    />
  ),
  dialogBodyContent: <StepOneBody />,
  dialogFooterContent: <DialogFooterContent text="Next" />,
  isDialogOpen: true,
  isACutomBody: false,
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
    setDialogFooterContent(state, action) {
      state.dialogFooterContent = action.payload;
    },
    setIsDialogOpen(state, action) {
      state.isDialogOpen = action.payload;
    },
  },
});

export const dialogSliceActions = dialogSlice.actions;
export default dialogSlice.reducer;

export const setDialogContent = (stepKey) => (dispatch) => {
  const { header, body, footer } = dialogConfig[stepKey];
  dispatch(dialogSliceActions.setDialogHeaderContent(header));
  dispatch(dialogSliceActions.setDialogBodyContent(body));
  dispatch(dialogSliceActions.setDialogFooterContent(footer));
};
