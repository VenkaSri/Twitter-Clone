import React, { useEffect, useState } from "react";

import FollowCard from "../../FollowCard";
import axios from "axios";
import { Skeleton } from "@mui/material";

const FollowSuggestions = () => {
  const [loading, setLoading] = useState(false);
  const [followCards, setFollowCards] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_GET_ALL_ACCOUNTS)
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
    {loading ? <Skeleton variant="rectangular" width={425} height={72} /> : followCards}
      {/* {followCards} */}
    </>
  );
};

export default FollowSuggestions;
