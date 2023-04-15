import React from "react";
import axios from "axios";
import ProfilePicture from "./ProfilePicture";
import DefaultAvatar from "../assets/images/avatars/default_avi.png";
import UserProfileInfo from "./UserProfileInfo";
import FollowButton from "./UI/button/FollowButton";
import { useUserData } from "../hooks/user-data";
import { useDispatch } from "react-redux";
import { userInfoActions } from "../state/authentication/userInfo-reducer";
import { unfollowDialogActions } from "../state/dialog/dialogState-reducer";

const FollowCard = ({ user }) => {
  const { hasOneFollowing } = useUserData();
  const { userEmail } = useUserData();
  const dispatch = useDispatch();
  const handleFollowClick = () => {
    if (hasOneFollowing) {
      console.log(user.username);
      dispatch(unfollowDialogActions.setSelectedUser(user.username));
      dispatch(unfollowDialogActions.cancelDialog(true));
    } else {
      axios
        .post(
          process.env.REACT_APP_FOLLOW_ACCOUNT +
            `?followerEmail=${userEmail}&followedUsername=${user.username}`
        )
        .then(() => {
          dispatch(userInfoActions.setOneFollowingValidity(true));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  console.log("Follow card = " + hasOneFollowing);
  return (
    <div className="h-[4.5rem] flex items-center">
      <ProfilePicture source={DefaultAvatar} size={48} />
      <UserProfileInfo name={user.name} username={user.username} />
      <div className="ml-auto">
        <FollowButton
          onClick={handleFollowClick}
          isFollowing={hasOneFollowing}
        />
      </div>
    </div>
  );
};

export default FollowCard;
