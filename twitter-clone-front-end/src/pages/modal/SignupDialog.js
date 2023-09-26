import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Dialog } from "../../components/Dialog";
import { DialogLayout } from "../../components/DialogLayout";
import DialogHeader from "../../components/dialog/DialogHeader";
import { DialogFooter } from "../../components/dialog/DialogFooter";
import { DialogBody } from "../../components/dialog/DialogBody";
import { dialogSliceActions } from "../../state/dialog/dialogSlice";

export const SignupDialog = ({ fromStepOne }) => {
  const dispatch = useDispatch();
  const { dialogHeaderContent, dialogBodyContent, dialogFooterContent } =
    useSelector((state) => state.rootReducer.dialogSlice);

  const open = useSelector(
    (state) => state.rootReducer.dialogSlice.isDialogOpen
  );

  // if (isOpen) {
  //   dispatch(dialogSliceActions.setDialogContent("auth_home"));
  //   dispatch(dialogSliceActions.setIsDialogOpen(true));
  // }

  useEffect(() => {
    if (!fromStepOne)
      dispatch(dialogSliceActions.setDialogContent("auth_home"));
    dispatch(dialogSliceActions.setIsDialogOpen(true));
  }, []);

  const content = (
    <DialogLayout
      header={<DialogHeader content={dialogHeaderContent} />}
      body={<DialogBody content={dialogBodyContent} />}
      footer={<DialogFooter content={dialogFooterContent} />}
    />
  );

  return (
    <>
      <Dialog type={"LOGIN"} content={content} />
    </>
  );
};
