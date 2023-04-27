import React, { useEffect, useState } from "react";

import FollowCard from "../../FollowCard";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "../../user/api";
import { useUserData } from "../../../hooks/user-data";
import { userInfoActions } from "../../../state/user/userInfo-reducer";
import { followActions } from "../../../state/follow/follow-reducer";

const FollowSuggestions = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [followCards, setFollowCards] = useState([]);
  const { userEmail } = useUserData();
  const allAccounts = useSelector(
    (state) => state.rootReducer.globalState.allAccounts
  );
  const isFollowing = useSelector(
    (state) => state.rootReducer.followState.isFollowing
  );

  const handleFollow = (usr) => {
    if (!usr.isFollowing) {
      const fetchData = async () => {
        const response = await follow(userEmail, usr.username);
        if (response === 200)
          dispatch(userInfoActions.setOneFollowingValidity(true));
        usr.isFollowing = true;
      };
      fetchData();
    } else {
      const fetchData = async () => {
        const response = await unfollow(userEmail, usr.username);
        if (response === 200)
          dispatch(userInfoActions.setOneFollowingValidity(true));
        usr.isFollowing = false;
      };
      fetchData();
    }
  };

  const userInfo = useSelector((state) => state.rootReducer.userInfo);
  useEffect(() => {
    const usersToFollow = allAccounts
      .map((user) => ({ ...user, isFollowing: false }))
      .filter((user) => !userInfo.followers.includes(user.username));
    const followCards = usersToFollow.map((user) => {
      return (
        <FollowCard
          key={user.username}
          user={user}
          onFollow={() => handleFollow(user)}
        />
      );
    });
    setFollowCards(followCards);
  }, [allAccounts, userInfo.followers, isFollowing]);

  return (
    <>
      {loading ? (
        <Skeleton variant="rounded" width={425} height={72} />
      ) : (
        <>{followCards.map((card) => card)}</>
      )}
    </>
  );
};

export default FollowSuggestions;
