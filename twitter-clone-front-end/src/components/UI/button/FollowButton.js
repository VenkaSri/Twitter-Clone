import React, { useState, useEffect } from "react";

const FollowButton = ({ onClick, isFollowing }) => {

  let style = isFollowing
  ? "h-[2rem] w-[6.188rem] rounded-full text-[0.938rem] font-cBold border border-[#cfd9de]"
  : "h-[2rem] w-[4.875rem] rounded-full bg-[#000] hover:bg-[#272c30] text-[#FFF] text-[0.938rem] font-cBold";

  const [btnText, setBtnText] = useState(isFollowing ? "Following" : "Follow");
  const [btnStyle, setBtnStyle] = useState(style);

  useEffect(() => {
    if (isFollowing) {
      setBtnText("Following");
    } else {
      setBtnText("Follow");
      setBtnStyle("h-[2rem] w-[4.875rem] rounded-full bg-[#000] hover:bg-[#272c30] text-[#FFF] text-[0.938rem] font-cBold");
    }
  }, [isFollowing]);

  const mouseOverHandler = () => {
    if (isFollowing) {
      setBtnText("Unfollow");
      setBtnStyle("h-[2rem] w-[6.188rem] rounded-full text-[0.938rem] font-cBold bg-[#efdbdd] text-[#f4222e] border border-[#fbcbcf]");
    }
  };

  const mouseLeaveHandler = () => {
    if (isFollowing) {
      setBtnText("Following");
      setBtnStyle("h-[2rem] w-[6.188rem] rounded-full text-[0.938rem] font-cBold border border-[#cfd9de]");
    }
  };

  return (
    <button
      className={btnStyle}
      onClick={onClick}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {btnText}
    </button>
  );
};

export default FollowButton;
