import React from "react";

import SignInButtonList from "../../UI/explore/sign-in-links/SignInButtonList";
import Card from "../../UI/Card";

const RightSideBar = () => {
  return (
    <div className="h-full w-97 flex justify-center pt-4 sticky top-0">
      <Card>
        <div className="flex flex-col ml-4 mt-2 gap-1">
          <h2 className="text-xl font-cHeavy">New to Twitter?</h2>
          <p className=" text-3xs font-custom2 text-gray-900">Sign up now to get your own personalized timeline!</p>
        </div>
        <SignInButtonList />
        <div className="ml-4 mt-4">
          <p className="text-3xs font-custom2 text-gray-900">
            By signing up, you agree to the <span className="text-[#1D9BF0]">Terms of Service</span> and <span className="text-[#1D9BF0]">Privacy Policy</span>, including <span className="text-[#1D9BF0]">Cookie Use.</span></p>
        </div>
      </Card>
    </div>
  );
};

export default RightSideBar;
