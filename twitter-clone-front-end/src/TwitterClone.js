import React, { useEffect } from "react";

import { Dialog } from "./components/Dialog";
import { DialogLayout } from "./components/DialogLayout";
import DialogHeader from "./components/dialog/DialogHeader";
import { DialogBody } from "./components/dialog/DialogBody";
import { useSelector } from "react-redux";
import { DialogFooter } from "./components/dialog/DialogFooter";

export const TwitterClone = () => {
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
