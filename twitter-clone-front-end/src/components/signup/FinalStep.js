import React from "react";

import { DialogContentHeading } from "../DialogContentHeading";
import { DialogBodyContainer } from "../dialog/DialogBodyContainer";

export const FinalStep = () => {
  return (
    <DialogBodyContainer>
      <DialogContentHeading
        text="What should be call you?"
        subtext="Your @username is unique. You can always change it later."
      />
    </DialogBodyContainer>
  );
};

export default FinalStep;
