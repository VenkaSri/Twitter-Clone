import { Suspense, lazy } from "react";
import DialogBodyHeading from "@components/dialog/body/DialogBodyHeading";
import { OverlayLoader } from "../../OverlayLoader";

const FollowSuggestionCard = lazy(() =>
  import("@/components/home/FollowSuggestionCard")
);

export const FinalStep = () => {
  return (
    <>
      <DialogBodyHeading
        text="Don't miss out"
        subtext="When you follow someone, you'll see their Posts in your Timeline. You'll also get more relevan
t recommendations."
      />
      <div className="flex flex-col w-full px-3 py-4 max-w-[497px]">
        <span className="text-[20px] leading-5 font-cBold dark:text-white">
          Follow 1 or more accounts
        </span>
        <div className="flex flex-col grow w-full max-w-full">
          <Suspense fallback={<OverlayLoader />}>
            <FollowSuggestionCard />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default FinalStep;
