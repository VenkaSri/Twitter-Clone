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

  const followers = useSelector((state) => state.rootReducer.userInfo.followers);


  const handleFollow = (usr) => {
    console.log(usr);
  }

  useEffect(() => {
    // setLoading(true);

    console.log(followers)
    axios
      .get(process.env.REACT_APP_GET_FOLLOWERS + 269)
      .then((response) => {
        // console.log(response.data.data.users);
        setFollowedUsers(response.data.data.users);
      })
      .catch((error) => console.error(error));
  }, []);


  

  const checkIfUserFollows = () => {
    const followCards = fiftyUsers.map(user => {
      const isFollowing = followedUsers.includes(user.username);
      const text = isFollowing ? 'Following' : 'Follow';
      return <FollowCard key={user.username} user={user} text={text} onFollow={() => handleFollow(user.username)
      }/>;
    });
    setFollowCards(followCards);
  };
  

  return (
    <>
      {loading ? (
        <Skeleton variant="rounded" width={425} height={72} />
      ) : (
       <>{followCards.map(card => card)}</>)}
    </>
  );
};

export default FollowSuggestions;
