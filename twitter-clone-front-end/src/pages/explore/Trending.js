import React, { useEffect, useState} from "react";

import axios from "axios";

const baseURL = "http://localhost:8080/api/tweets";

const Trending = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response);
      console.log(response.data);
      setPost(response.data);
    });
  }, []);



  return (
    <ul>
        {
          post
            .map(tweet =>
              <li key={tweet.tweetId}>{tweet.text}</li>
            )
        }
      </ul>
  );
};

export default Trending;
