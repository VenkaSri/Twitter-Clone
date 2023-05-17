import React, { useEffect, useState } from "react";

import FollowCard from "../../FollowCard";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "../../user/api";
import { useUserData } from "../../../hooks/user-data";
import { userInfoActions } from "../../../state/user/userInfo-reducer";
import { followActions } from "../../../state/follow/follow-reducer";
import { unfollowDialogActions } from "../../../state/dialog/dialogState-reducer";

const FollowSuggestions = () => {
  const dispatch = useDispatch();
  const [btnText, setBtnText] = useState("Follow");
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const allAccounts = useSelector(
    (state) => state.rootReducer.globalState.allAccounts
  );
  const userInfo = useSelector((state) => state.rootReducer.userInfo);
  const isUnfollowed = useSelector(
    (state) => state.rootReducer.dialogState.isUnfollowed
  );

  const [followCards, setFollowCards] = useState([]);
  const { userEmail } = useUserData();

  useEffect(() => {
    if (userInfo.followingCount === 0) {
      dispatch(userInfoActions.setOneFollowingValidity(false));
    } else {
      dispatch(userInfoActions.setOneFollowingValidity(true));
    }
  }, [userInfo.followingCount]);

  useEffect(() => {
    const usersToFollow = allAccounts.filter(
      (user) => !userInfo.followers.includes(user.username)
    );
    setFollowCards(usersToFollow);
  }, [allAccounts, userInfo.followers]);

  const handleFollow = (usr) => {
    if (!usr.isFollowing) {
      dispatch(userInfoActions.setFollowingCount(userInfo.followingCount + 1));
      const fetchData = async () => {
        const response = await follow(userEmail, usr.username);
        if (response === 200) dispatch(unfollowDialogActions.setFollow(true));
        const updatedFollowCards = followCards.map((user) =>
          user.username === usr.username ? { ...user, isFollowing: true } : user
        );
        setBtnText("Following");
        setFollowCards(updatedFollowCards);
      };
      fetchData();
    } else {
      dispatch(unfollowDialogActions.setSelectedUser(usr.username));
      dispatch(unfollowDialogActions.cancelDialog(true));
      setUser(usr);
    }
  };

  if (isUnfollowed) {
    dispatch(userInfoActions.setFollowingCount(userInfo.followingCount - 1));
    const fetchData = async () => {
      const response = await unfollow(userEmail, user.username);
      if (response === 200) dispatch(unfollowDialogActions.setFollow(true));
      const updatedFollowCards = followCards.map((usr) =>
        usr.username === user.username ? { ...usr, isFollowing: false } : usr
      );
      setFollowCards(updatedFollowCards);
      dispatch(unfollowDialogActions.setIsUnfollowed(false));
    };
    fetchData();
  }

  const mouseOverHandler = (user) => {
    setFollowCards((prevFollowCards) => {
      return prevFollowCards.map((prevUser) =>
        prevUser.username === user.username
          ? { ...prevUser, isHovered: true }
          : prevUser
      );
    });
  };

  const mouseLeaveHandler = (user) => {
    setFollowCards((prevFollowCards) => {
      return prevFollowCards.map((prevUser) =>
        prevUser.username === user.username
          ? { ...prevUser, isHovered: false }
          : prevUser
      );
    });
  };

  const followBtnStyle =
    "h-[2rem] w-[4.875rem] rounded-full bg-[#000] hover:bg-[#272c30] text-[#FFF] text-[0.938rem] font-cBold";
  const followingBtnStyle =
    "h-[2rem] w-[6.188rem] rounded-full text-[0.938rem] font-cBold border border-[#cfd9de]";
  const unfollowBtnStyle =
    "h-[2rem] w-[6.188rem] rounded-full text-[0.938rem] font-cBold bg-[#efdbdd] text-[#f4222e] border border-[#fbcbcf]";
  return (
    <>
      {loading ? (
        <Skeleton variant="rounded" width={425} height={72} />
      ) : (
        <>
          {" "}
          {followCards.map((user) => (
            <FollowCard
              key={user.username}
              user={user}
              onFollow={() => handleFollow(user)}
              hoverText={user.isFollowing ? "Unfollow" : "Follow"}
              text={
                user.isHovered && user.isFollowing
                  ? "Unfollow"
                  : !user.isHovered && user.isFollowing
                  ? "Following"
                  : "Follow"
              }
              btnStyle={
                user.isHovered && user.isFollowing
                  ? unfollowBtnStyle
                  : !isHovered && user.isFollowing
                  ? followingBtnStyle
                  : followBtnStyle
              }
              mouseOverHandler={() => mouseOverHandler(user)}
              mouseLeaveHandler={() => mouseLeaveHandler(user)}
            />
          ))}
        </>
      )}
    </>
  );
};

export default FollowSuggestions;
