import React, { useEffect } from "react";

import { Dialog } from "./components/Dialog";
import { DialogLayout } from "./components/DialogLayout";
import DialogHeader from "./components/dialog/DialogHeader";
import { DialogBody } from "./components/dialog/DialogBody";
import { useSelector } from "react-redux";
import { PopupErrorMessage } from "./components/PopupErrorMessage";
import { DialogFooter } from "./components/dialog/DialogFooter";
import { DialogLoading } from "./components/dialog/DialogLoading";
import { UploadPicture } from "./components/dialog/signup/steps/profile_picture/UploadPicture";
import { UploadProfilePictureStep } from "./components/dialog/signup/steps/profile_picture/UploadProfilePictureStep";

export const TwitterClone = () => {
  const doesUserExist = useSelector(
    (state) => state.rootReducer.loginState.doesUserExist
  );
  const error = useSelector((state) => state.rootReducer.dialogState.error);
  const isDialogLoading = useSelector(
    (state) => state.rootReducer.loadingSlice.isDialogLoading
  );

  const dialogHeaderContent = useSelector(
    (state) => state.rootReducer.dialogSlice.dialogHeaderContent
  );

  const dialogBodyContent = useSelector(
    (state) => state.rootReducer.dialogSlice.dialogBodyContent
  );

  const dialogFooterContent = useSelector(
    (state) => state.rootReducer.dialogSlice.dialogFooterContent
  );

  const isACutomBody = useSelector(
    (state) => state.rootReducer.dialogSlice.isACutomBody
  );

  const content = isDialogLoading ? (
    <DialogLoading />
  ) : (
    <DialogLayout
      header={<DialogHeader content={dialogHeaderContent} />}
      body={<DialogBody content={dialogBodyContent} />}
      footer={<DialogFooter content={dialogFooterContent} />}
    />
  );

  return (
    <>
      <Dialog type={"LOGIN"} content={content} />
      {error && (
        <Dialog
          type="ERROR"
          content={
            <DialogLayout
              body={
                <PopupErrorMessage message="Sorry, we're not able to find your account." />
              }
            />
          }
        />
      )}
    </>
  );
};
