import React from "react";
import { DialogContentHeading } from "../../../DialogContentHeading";

export const UsernameStep = () => {
  return (
    <>
      <DialogContentHeading
        text="What should we call you"
        subtext={"Your @username is unique. You can always change it later."}
      />
    </>
  );
};
