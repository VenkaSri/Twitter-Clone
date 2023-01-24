import React, { useEffect} from "react";

import axios from "axios";

const baseURL = "http://localhost:8080/api/tweets";

const Trending = () => {
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
    });
  }, []);

  return (
    <div className="border border-rose-500 max-w-[37.375rem]">
    </div>
  );
};

export default Trending;
