import React from "react";
import { useUserData } from "../../../hooks/user-data";

const FinalStepFooter = () => {
  const { hasOneFollowing } = useUserData();
  const buttonClass = hasOneFollowing
    ? "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#000] hover:bg-[#272c30]"
    : "w-[440px] h-[52px] font-cBold text-[#fff] rounded-full bg-[#86888b]";

  return (
    <div className="w-full h-[6.25rem] max:h-[6.25rem] flex justify-center items-center">
      <button className={buttonClass} disabled={!hasOneFollowing}>
        Next
      </button>
    </div>
  );
};

export default FinalStepFooter;
