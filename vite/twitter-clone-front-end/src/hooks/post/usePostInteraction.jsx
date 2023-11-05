import { Like, LikeFilled } from "@/components/icons/Icons";
import { useLikePostMutation, useUnlikePostMutation } from "@/services/postApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "../useSession";

export const usePostInteraction = (postId) => {
  const [likePost] = useLikePostMutation();
  const [unlikePost] = useUnlikePostMutation();

  const { likedPosts = [] } = useSession();

  const [buttonIcon, setButtonIcon] = useState(null);

  const [isActive, setIsActive] = useState(false);

  const handleLikePost = (id, e) => {
    e.stopPropagation();
    setIsActive(!isActive);
    likePost(id);
  };

  const handleUnlikePost = (id, e) => {
    e.stopPropagation();
    setIsActive(!isActive);
    unlikePost(id);
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

  return { handleLikePost, isActive, buttonIcon, handleUnlikePost };
};
