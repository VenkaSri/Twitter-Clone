import { Suspense, lazy } from "react";

import DialogBodyHeading from "@components/dialog/body/DialogBodyHeading";
import { OverlayLoader } from "../../OverlayLoader";

const FollowSuggestionCard = lazy(() =>
  import("@/components/app/FollowSuggestionCard")
);

export const FinalStep = () => {
  return (
    <>
      <DialogBodyHeading
        text="Don't miss out"
        subtext="When you follow someone, you'll see their Posts in your Timeline. You'll also get more relevan
t recommendations."
      />
      <div className="px-3 py-4 max-w-[497px] bg">
        <span className="text-[20px] leading-5 font-cBold dark:text-white">
          Follow 1 or more accounts
        </span>
        <div className="w-full max-w-full">
          <Suspense fallback={<OverlayLoader />}>
            <FollowSuggestionCard />
          </Suspense>
        </div>

        {/* <SuggestFriends /> */}
      </div>
    </>
  );
};

export default FinalStep;
