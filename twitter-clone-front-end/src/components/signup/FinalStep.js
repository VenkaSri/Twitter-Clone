import React from "react";

import { DialogContentHeading } from "../DialogContentHeading";
import { DialogBodyContainer } from "../dialog/DialogBodyContainer";
import { SuggestFriends } from "../SuggestFriends";

export const FinalStep = () => {
  return (
    <DialogBodyContainer>
      <DialogContentHeading
        text="Don't miss out"
        subtext="When you follow someone, you'll see their Posts in your Timeline. You'll also get more relevan
t recommendations."
      />
      <div className="px-3 py-4 min-h-[497px]">
        <span className="text-[20px] leading-5 font-cBold ">
          Follow 1 or more accounts
        </span>
        <SuggestFriends />
      </div>
    </DialogBodyContainer>
  );
};

export default FinalStep;
