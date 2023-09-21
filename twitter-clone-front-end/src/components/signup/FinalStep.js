import React from "react";

import { DialogContentHeading } from "../DialogContentHeading";
import { DialogBodyContainer } from "../dialog/DialogBodyContainer";
import { SuggestFriends } from "../SuggestFriends";

export const FinalStep = () => {
  return (
    <DialogBodyContainer>
      <DialogContentHeading
        text="Don't miss out"
        subtext="When you follow someone, you'll see their Tweets in your Timeline. You'll also get more relevant recommendations."
      />
      <span
        className={`font-cHeavy text-[20px] leading-[20px]  dark:text-[#fff]  py-3 px-4`}
      >
        Follow 1 or more accounts
      </span>
      <SuggestFriends />
    </DialogBodyContainer>
  );
};

export default FinalStep;
