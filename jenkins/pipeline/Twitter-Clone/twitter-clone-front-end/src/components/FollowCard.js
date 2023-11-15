import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfilePicture from "./ProfilePicture";
import DefaultAvatar from "../assets/images/avatars/default_avi.png";
import UserProfileInfo from "./UserProfileInfo";
import FollowButton from "./UI/button/FollowButton";

const FollowCard = ({
  user,
  onFollow,
  btnStyle,
  text,
  mouseOverHandler,
  mouseLeaveHandler,
}) => {
  const [btnText, setBtnText] = useState(text);
  const [style, setBtnStyle] = useState(btnStyle);
  const handleClick = () => {
    onFollow();
  };
  const handleMouseOver = () => {
    mouseOverHandler();
    console.log(user);
  };

  const handleMouseLeave = () => {
    mouseLeaveHandler(false);
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
          mouseOverHandler={handleMouseOver}
          mouseLeaveHandler={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default FollowCard;
