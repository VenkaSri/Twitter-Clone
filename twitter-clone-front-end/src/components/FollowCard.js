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
    <div className="card--follow">
      <div className="mr-3   flex self-stretch">
        <ProfilePicture source={DefaultAvatar} size={44} />
      </div>
      <div className="flex grow ">
        <UserProfileInfo name="test" username={"test1"} withDescription />
      </div>
    </div>
  );
};

export default FollowCard;
