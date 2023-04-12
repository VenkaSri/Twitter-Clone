import React, { useState } from "react";
import axios from "axios";
import ProfilePicture from "./ProfilePicture";
import DefaultAvatar from "../assets/images/avatars/default_avi.png";
import UserProfileInfo from "./UserProfileInfo";
import FollowButton from "./UI/button/FollowButton";
import { useUserData } from "../hooks/user-data";
import { useDispatch } from "react-redux";
import { userInfoActions } from "../state/authentication/userInfo-reducer";

const FollowCard = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const { userEmail } = useUserData();
  const dispatch = useDispatch();
  const handleFollowClick = () => {
    axios
      .post(
        process.env.REACT_APP_FOLLOW_ACCOUNT +
          `?followerEmail=${userEmail}&followedUsername=${user.username}`
      )
      .then((response) => {
        dispatch(userInfoActions.setOneFollowingValidity(true));
        console.log(response.data);
        setIsFollowing(true);

      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="h-[4.5rem] flex items-center">
      <ProfilePicture source={DefaultAvatar} size={48} />
      <UserProfileInfo name={user.name} username={user.username} />
      <div className="ml-auto">
        <FollowButton onClick={handleFollowClick} isFollowing={isFollowing}/>
      </div>
    </div>
  );
};

export default FollowCard;
