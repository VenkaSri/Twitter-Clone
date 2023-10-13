import { useState } from "react";
import { useLikePostMutation } from "../services/post/postApi";

export const usePostInteraction = () => {
  const [likePost, { isLoading, isError }] = useLikePostMutation();
  const [isActive, setIsActive] = useState(false);
  const handleLikePost = (id) => {
    setIsActive(!isActive);
    likePost(id);
  };

  // const handleLikePost = (id) => {
  //   console.log(id);
  // };

  return { handleLikePost, isActive };
};
