import React, { useEffect, useState } from "react";

import FollowCard from "../../FollowCard";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { unfollowDialogActions } from "../../../state/dialog/dialogState-reducer";

const FollowSuggestions = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [followCards, setFollowCards] = useState([]);
  const email = useSelector(
    (state) => state.rootReducer.signUp.email.enteredEmail
  );

  const handleFollow = (username) => {
    const userIndex = followCards.findIndex(
      (user) => user.username === username
    );
    if (userIndex !== -1) {
      const updatedFollowCards = [...followCards];
      updatedFollowCards[userIndex].isFollowing = true;
      setFollowCards(updatedFollowCards);
    }
  };

  const handleUnfollow = (username) => {

    const userIndex = followCards.findIndex(
      (user) => user.username === username
    );
    if (userIndex !== -1) {
      const updatedFollowCards = [...followCards];
      updatedFollowCards[userIndex].isFollowing = false;
      setFollowCards(updatedFollowCards);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_GET_ALL_ACCOUNTS + `?emailOrPhone=${email}`)
      .then((response) => {
        const users = response.data.data.users;
        const followCards = users.map((user) => ({
          ...user,
          isFollwing: false,
        }));
        setFollowCards(followCards);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton variant="rounded" width={425} height={72} />
      ) : (
        followCards.map((user) => (
          <FollowCard
            key={user.username}
            user={user}
            onFollow={() => handleFollow(user.username)}
            onUnfollow={(username) => handleUnfollow(username)}
          />
        ))
      )}
    </>
  );
};

export default FollowSuggestions;
