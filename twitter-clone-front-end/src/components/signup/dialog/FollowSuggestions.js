import React, { useEffect, useState } from "react";

import FollowCard from "../../FollowCard";
import axios from "axios";
import { Skeleton } from "@mui/material";
import { useSelector } from "react-redux";

const FollowSuggestions = () => {
  const [loading, setLoading] = useState(false);
  const [followCards, setFollowCards] = useState([]);
  const email = useSelector((state) => state.rootReducer.signUp.email.enteredEmail);

  useEffect(() => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_GET_ALL_ACCOUNTS + `?emailOrPhone=${email}`)
      .then((response) => {
        const users = response.data.data.users;
        const followCards = users.map((user) => (
          <FollowCard key={user.username} user={user} />
        ));
        setFollowCards(followCards);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  
  
  return (
    <>
    {loading ? <Skeleton variant="rounded" width={425} height={72} /> : followCards}
    </>
  );
};

export default FollowSuggestions;
