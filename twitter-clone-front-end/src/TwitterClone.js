import React, { useEffect } from "react";

import { Dialog } from "./components/Dialog";
import { DialogLayout } from "./components/DialogLayout";
import DialogHeader from "./components/dialog/DialogHeader";
import { DialogBody } from "./components/dialog/DialogBody";
import { useSelector } from "react-redux";
import { PopupErrorMessage } from "./components/PopupErrorMessage";
import { DialogFooter } from "./components/dialog/DialogFooter";

export const TwitterClone = () => {
  const doesUserExist = useSelector(
    (state) => state.rootReducer.loginState.doesUserExist
  );
  const error = useSelector((state) => state.rootReducer.dialogState.error);

  return (
    <>
      <Dialog
        type={"LOGIN"}
        content={
          <DialogLayout
            header={<DialogHeader type="SIGNUP" />}
            body={
              <DialogBody
                type={doesUserExist ? "LOGIN_PASSWORD_INPUT" : "LOGIN_HOME"}
              />
            }
            footer={
              doesUserExist && <DialogFooter type="LOGIN_PASSWORD_INPUT" />
            }
          />
        }
      />
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
