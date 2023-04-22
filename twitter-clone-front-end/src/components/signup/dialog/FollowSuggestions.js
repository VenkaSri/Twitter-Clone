import React, { useEffect, useState } from "react";

import FollowCard from "../../FollowCard";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { unfollowDialogActions } from "../../../state/dialog/dialogState-reducer";

const FollowSuggestions = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [followedUsers, setFollowedUsers] = useState([]);
  const [fiftyUsers, setFiftyUsers] = useState([]);
  const [followCards, setFollowCards] = useState([]);
  const email = useSelector(
    (state) => state.rootReducer.signUp.email.enteredEmail
  );


  const handleFollow = (usr) => {
    console.log(usr);
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_GET_FOLLOWERS + 269)
      .then((response) => {
        // console.log(response.data.data.users);
        setFollowedUsers(response.data.data.users);
      })
      .catch((error) => console.error(error));
  }, []);


  useEffect(() => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_GET_ALL_ACCOUNTS + `?emailOrPhone=${email}`)
      .then((response) => {
        const users = response.data.data.users;
        setFiftyUsers(users);
        checkIfUserFollows();
        const followCards = users.map((user) => ({
          ...user,
          isFollwing: false,
        }));
        setFollowCards(followCards);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [followedUsers]);

  const checkIfUserFollows = () => {
    followedUsers.forEach((user)=> {
      for (const u of fiftyUsers) {
        if (u.username === user) {
          console.log(user + ' is in the users array!');
          break;
        }
      }
    });
  }

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
          />
        ))
      )}
    </>
  );
};

export default FollowSuggestions;
