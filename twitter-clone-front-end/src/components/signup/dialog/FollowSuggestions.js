import React, { useEffect, useState } from "react";

import FollowCard from "../../FollowCard";
import axios from "axios";

const FollowSuggestions = () => {

  const [followCards, setFollowCards] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_GET_ALL_ACCOUNTS)
      .then((response) => {
        const users = response.data.data.users;
        const followCards = users.map((user) => (
          <FollowCard key={user.username} user={user} />
        ));
        setFollowCards(followCards);
      })
      .catch((error) => console.error(error));
  }, []);

  
  
  return (
    <>
      {followCards}
    </>
  );
};

export default FollowSuggestions;
