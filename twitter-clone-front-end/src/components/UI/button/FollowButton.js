import React from "react";

const FollowButton = ({ onClick }) => {
  return (
    <button
      className="h-[2rem] w-[4.875rem] rounded-full bg-[#000] hover:bg-[#272c30] text-[#fff] text-[0.938rem] font-cBold"
      onClick={onClick}
    >
      Follow
    </button>
  );
};

export default FollowButton;
