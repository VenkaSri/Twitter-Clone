import DialogBodyHeading from "@components/dialog/body/DialogBodyHeading";
import UserCard from "@components/app/UserCard";

export const FinalStep = () => {
  return (
    <>
      <DialogBodyHeading
        text="Don't miss out"
        subtext="When you follow someone, you'll see their Posts in your Timeline. You'll also get more relevan
t recommendations."
      />
      <div className="px-3 py-4 min-h-[497px]">
        <span className="text-[20px] leading-5 font-cBold dark:text-white">
          Follow 1 or more accounts
        </span>
        <UserCard />

        {/* <SuggestFriends /> */}
      </div>
    </>
  );
};

export default FinalStep;
