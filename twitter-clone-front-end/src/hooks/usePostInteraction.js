import { useEffect, useState } from "react";
import { useLikePostMutation } from "../services/post/postApi";
import { useSelector } from "react-redux";
import { Like, LikeFilled } from "../components/icons/icons";

export const usePostInteraction = (postId) => {
  const [likePost, { isLoading, isError }] = useLikePostMutation();
  const likedPosts = useSelector(
    (state) => state.rootReducer.userSession.likedPosts
  );

  const [buttonIcon, setButtonIcon] = useState(null);

  const [isActive, setIsActive] = useState(false);
  const handleLikePost = (id) => {
    setIsActive(!isActive);
    likePost(id);
  };

  useEffect(() => {
    if (likedPosts.includes(postId)) {
      setIsActive(true);
    }
  }, [likedPosts]);

  useEffect(() => {
    if (isActive) {
      setButtonIcon(<LikeFilled className="w-[18.75px] h-[18.75px]" />);
    } else {
      setButtonIcon(<Like className="w-[18.75px] h-[18.75px]" />);
    }
  }, [isActive]);

  // const handleLikePost = (id) => {
  //   console.log(id);
  // };

  return { handleLikePost, isActive, buttonIcon };
};
