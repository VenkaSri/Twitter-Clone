import React, { useState } from "react";

import { useSelector } from "react-redux";
import FollowButton from "./UI/button/FollowButton";

const FollowCardContent = ({ user, withDescription }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const followBtnStyle =
    "h-[2rem] w-[4.875rem] rounded-full bg-[#000] hover:bg-[#272c30] text-[#FFF] text-[0.938rem] font-cBold";
  // const user = useSelector((state) => state.rootReducer.userInfo);

  const handleFollow = () => {
    setIsFollowed(true);
    console.log(user.id);
  };

  const btnTExt = isFollowed ? "Unfollow" : "Follow";

  return (
    <div className="flex-col-container grow leading-[20px]">
      <div className="flex items-center grow ">
        <div className="flex-col-container">
          <span className="inline-block font-cBold">{user.name}</span>
          <span className="text-[#536471] font-cReg text-[15px]">
            @{user.username}
          </span>
        </div>

        <div className="ml-auto mt-flex inline">
          <FollowButton
            onClick={handleFollow}
            btnText={btnTExt}
            btnStyle={followBtnStyle}
            // mouseOverHandler={handleMouseOver}
            // mouseLeaveHandler={handleMouseLeave}
          />
        </div>
      </div>
      <div className="flex grow pt-1">
        {withDescription && (
          <span className="text-[#0F1419] leading-5 font-cReg text-[15px]">
            Amidst the bustling city, a sense of tranquility prevails.
          </span>
        )}
      </div>
    </div>
  );
};

export default FollowCardContent;
