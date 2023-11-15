import React from "react";

import DialogContentHeading from "../UI/dialog/DialogContentHeading";
import DialogContentBody from "../UI/dialog/DialogContenBody";
import DialogFooter from "../UI/dialog/DialogFooter";
import DialogFooterContent from "../UI/dialog/DialogFooterContent";

export const FinalStep = () => {
  return (
    <>
      <DialogContentHeading
        title="Don't miss out"
        subheading="When you follow someone, you'll see thier Tweets in your Timeline. You'll ask get more relevant recommendations."
      />
      <DialogContentBody />
      
    </>
  );
};

export default FinalStep;
