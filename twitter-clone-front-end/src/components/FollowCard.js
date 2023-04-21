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
  const { userEmail } = useUserData();
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);
  const [btnStyle, setBtnStyle] = useState(
    "h-[2rem] w-[4.875rem] rounded-full bg-[#000] hover:bg-[#272c30] text-[#FFF] text-[0.938rem] font-cBold"
  );
  const [btnText, setBtnText] = useState(isFollowing ? "Following" : "Follow");
  
  const dispatch = useDispatch();
  const isUnfollowed = useSelector(
    (state) => state.rootReducer.dialogState.isUnfollowed
  );
  const selectedUser = useSelector(
    (state) => state.rootReducer.dialogState.selectUser
  );
  
  useEffect(() => {
    if (isUnfollowed && selectedUser === user.username) {
      setIsFollowing(false);
      setBtnText("Follow");
      setBtnStyle(
        "h-[2rem] w-[4.875rem] rounded-full bg-[#000] hover:bg-[#272c30] text-[#FFF] text-[0.938rem] font-cBold"
      );
    }
  }, [isUnfollowed, selectedUser, user.username]);

  const handleClick = () => {
    if (isFollowing) {
      dispatch(unfollowDialogActions.setSelectedUser(user.username));
      dispatch(unfollowDialogActions.cancelDialog(true));
    } else {
      axios
        .post(
          process.env.REACT_APP_FOLLOW_ACCOUNT +
            `?followerEmail=${userEmail}&followedUsername=${user.username}`
        )
        .then(() => {
          setIsFollowing(true);
          setBtnText("Following");
          setBtnStyle(
            "h-[2rem] w-[6.188rem] rounded-full text-[0.938rem] font-cBold border border-[#cfd9de]"
          );
          dispatch(userInfoActions.setOneFollowingValidity(true));
          onFollow();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const mouseOverHandler = () => {
    if (isFollowing) {
      setBtnText("Unfollow");
      setBtnStyle(
        "h-[2rem] w-[6.188rem] rounded-full text-[0.938rem] font-cBold bg-[#efdbdd] text-[#f4222e] border border-[#fbcbcf]"
      );
    }
  };

  const mouseLeaveHandler = () => {
    if (isFollowing) {
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
          btnStyle={btnStyle}
          btnText={btnText}
          mouseOverHandler={mouseOverHandler}
          mouseLeaveHandler={mouseLeaveHandler}
        />
      </div>
    </div>
  );
};

export default FollowCard;
