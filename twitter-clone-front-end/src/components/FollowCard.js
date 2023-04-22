import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfilePicture from "./ProfilePicture";
import DefaultAvatar from "../assets/images/avatars/default_avi.png";
import UserProfileInfo from "./UserProfileInfo";
import FollowButton from "./UI/button/FollowButton";
import { useUserData } from "../hooks/user-data";
import { useDispatch, useSelector } from "react-redux";
import { userInfoActions } from "../state/authentication/userInfo-reducer";
import { unfollowDialogActions } from "../state/dialog/dialogState-reducer";
import { followActions } from "../state/follow/follow-reducer";

const FollowCard = ({ user, onFollow, onUnfollow }) => {
  const [btnStyle, setBtnStyle] = useState(
    "h-[2rem] w-[4.875rem] rounded-full bg-[#000] hover:bg-[#272c30] text-[#FFF] text-[0.938rem] font-cBold"
  );
  const [btnText, setBtnText] = useState("Follow");
  
  

  const handleClick = () => {
      onFollow();
  };


  return (
    <div className="h-[4.5rem] flex items-center">
      <ProfilePicture source={DefaultAvatar} size={48} />
      <UserProfileInfo name={user.name} username={user.username} />
      <div className="ml-auto">
        <FollowButton
          onClick={handleClick}
          btnStyle={btnStyle}
          btnText={btnText}
        />
      </div>
    </div>
  );
};

export default FollowCard;
