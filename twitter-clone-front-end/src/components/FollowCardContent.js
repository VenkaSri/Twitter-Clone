import React, { useState, useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import FollowButton from "./UI/button/FollowButton";
import FollowContext from "../context/FollowContext";

const FollowCardContent = ({ user, withDescription }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [btnText, setBtnText] = useState("Follow");

  const ctxData = useContext(FollowContext);
  const handleFollow = () => {
    if (ctxData.checkIfUserIsAlreadyFollowed(user.id)) {
      ctxData.handleUnfollow(user.id);
      setIsFollowed(false);
    } else {
      ctxData.handleFollow(user.id);
      setIsFollowed(true);
    }
  };

  const btnStyle = isFollowed ? "follow--button-unfollow" : "";

  const handleMouseOver = () => {
    if (isFollowed) {
      setBtnText("Unfollow");
    } else {
      setBtnText("Follow");
    }
  };

  const handleMouseLeave = () => {
    if (isFollowed) {
      setBtnText("Following");
    } else {
      setBtnText("Follow");
    }
  };
  return (
    <div className="flex-col-container grow leading-[20px]">
      <div className="flex items-center grow ">
        <div className="flex-col-container">
          <span className="inline-block font-cBold dark:text-white">
            {user.name}
          </span>
          <span className="text-[#71767B] font-cReg text-[15px]">
            @{user.username}
          </span>
        </div>

        <div className="ml-auto mt-flex inline">
          <FollowButton
            onClick={handleFollow}
            btnText={btnText}
            btnStyle={`${btnStyle} follow--button `}
            mouseOverHandler={handleMouseOver}
            mouseLeaveHandler={handleMouseLeave}
          />
        </div>
      </div>
      <div className="flex grow pt-1">
        {withDescription && (
          <span className="text-[#0F1419] leading-5 font-cReg text-[15px] dark:text-white">
            Amidst the bustling city, a sense of tranquility prevails.
          </span>
        )}
      </div>
    </div>
  );
};

export default FollowCardContent;
