import React, { useEffect, useState } from "react";

import FollowCard from "../../FollowCard";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { follow } from "../../user/api";
import { useUserData } from "../../../hooks/user-data";
import { userInfoActions } from "../../../state/user/userInfo-reducer";

const FollowSuggestions = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [followCards, setFollowCards] = useState([]);
  const { userEmail } = useUserData();
  const allAccounts = useSelector(
    (state) => state.rootReducer.globalState.allAccounts
  );
  const handleFollow = (usr) => {
    const fetchData = async () => {
      const response = await follow(userEmail, usr);
      if (response === 200)
        dispatch(userInfoActions.setOneFollowingValidity(true));
    };
    fetchData();
  };
  const userInfo = useSelector((state) => state.rootReducer.userInfo);
  useEffect(() => {
    const usersToFollow = allAccounts.filter(
      (user) => !userInfo.followers.includes(user.username)
    );
    const followCards = usersToFollow.map((user) => {
      return (
        <FollowCard
          key={user.username}
          user={user}
          onFollow={() => handleFollow(user.username)}
        />
      );
    });
    setFollowCards(followCards);
  }, [allAccounts, userInfo.followers]);

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
