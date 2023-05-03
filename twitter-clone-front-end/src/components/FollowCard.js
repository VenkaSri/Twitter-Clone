import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfilePicture from "./ProfilePicture";
import DefaultAvatar from "../assets/images/avatars/default_avi.png";
import UserProfileInfo from "./UserProfileInfo";
import FollowButton from "./UI/button/FollowButton";

const FollowCard = ({ user, onFollow, btnStyle, text }) => {
  const [btnText, setBtnText] = useState(text);
  const [style, setBtnStyle] = useState(btnStyle);
  const handleClick = () => {
    onFollow();
  };
  const mouseOverHandler = () => {
    if (user.isFollowing) {
      setBtnText("Unfollow");
      setBtnStyle(
        "h-[2rem] w-[6.188rem] rounded-full text-[0.938rem] font-cBold bg-[#efdbdd] text-[#f4222e] border border-[#fbcbcf]"
      );
    }
  };

  const mouseLeaveHandler = () => {
    if (user.isFollowing) {
      setBtnText("Following");
      setBtnStyle(
        "h-[2rem] w-[6.188rem] rounded-full text-[0.938rem] font-cBold border border-[#cfd9de]"
      );
    }
  };

  return (
    <div className="h-[4.5rem] flex items-center">
      <ProfilePicture source={DefaultAvatar} size={48} />
      <UserProfileInfo name={user.name} username={user.username} />
      <div className="ml-auto">
        <FollowButton
          onClick={handleClick}
          btnText={text}
          btnStyle={btnStyle}
          // mouseOverHandler={mouseOverHandler}
          // mouseLeaveHandler={mouseLeaveHandler}
        />
      </div>
    </div>
  );
};

export default FollowCard;
