import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from "@/services/userApi";
import { RegisterContext } from "@/context/auth/register-context";
import { userSliceActions } from "@/state/userSlice";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFollowToggleButton = (userId) => {
  const dispatch = useDispatch();
  const [isHovering, setIsHovering] = useState(false);
  const { setHasFollowedOneUser } = useContext(RegisterContext);
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();
  const followedIDs = useSelector((state) => state.userSlice.followedIds);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  const handleFollowUser = async (id) => {
    try {
      if (followedIDs.includes(id)) {
        await unfollowUser(id);
        dispatch(userSliceActions.removeFollowedUser(id));
      } else {
        await followUser(id);
        dispatch(userSliceActions.addFollowedUser(id));
      }
    } catch (error) {
      console.error("Error handling follow/unfollow user:", error);
    }
  };

  const isFollowing = followedIDs.includes(userId);
  const buttonText =
    isHovering && isFollowing
      ? "Unfollow"
      : isFollowing
      ? "Following"
      : "Follow";
  const buttonStyle = isFollowing ? "btn--unfollow" : "btn--action";

  useEffect(() => {
    if (followedIDs.length === 0) {
      setHasFollowedOneUser(false);
    } else {
      setHasFollowedOneUser(true);
    }
  }, [followedIDs, setHasFollowedOneUser]);

  return {
    buttonStyle,
    onMouseEnter,
    onMouseLeave,
    handleFollowUser,
    buttonText,
  };
};
