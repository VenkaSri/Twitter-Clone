import React from "react";
import DarkModeWatcher from "./hooks/DarkModeWatcher";
import { CustomDialog } from "./components/Dialog";
import { DialogContent } from "./components/DialogContent";
import { Dialog } from "./components/Dialog";
import SignUpStep from "./components/SignUpStep";
import { DialogLayout } from "./components/DialogLayout";
import DialogHeader from "./components/dialog/DialogHeader";
import { StepOneBody } from "./components/dialog/signup/steps/1/StepOneBody";
import { ContentBody } from "./components/signup/dialog/ContentBody";

export const TwitterClone = () => {
  return (
    <Dialog
      type={"LOGIN"}
      content={
        <DialogLayout
          header={<DialogHeader type="LOGIN" />}
          body={<ContentBody currentStep={2} />}
        />
      }
    />
  );
};
