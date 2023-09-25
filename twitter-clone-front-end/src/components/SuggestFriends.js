import React, { useEffect, useState } from "react";
import { followUser, unfollowUser } from "../services/user/followAPI";
import FollowCard from "./FollowCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { dialogSliceActions } from "../state/dialog/dialogSlice";
import { useDispatch } from "react-redux";
import { CustomSpinner } from "./CustomSpinner";
import { fetchSuggestedUsers } from "../services/fetchSuggestedUsers";
import FollowContext from "../context/FollowContext";
import { signupSliceActions } from "../state/auth/signupSlice";

export const SuggestFriends = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const [followedUserIds, setFollowedUserIds] = useState([]);

  const loadSuggestedUsers = async () => {
    try {
      const suggestedUsers = await fetchSuggestedUsers(page, 5);
      console.log(suggestedUsers);
      if (suggestedUsers.length === 0) setHasMore(false);
      console.log(suggestedUsers.length);
      setItems((prevItems) => [...prevItems, ...suggestedUsers]);
      dispatch(dialogSliceActions.setIsDialogContentLoaded(true));
      setPage(page + 1);
    } catch (error) {
      console.error(error.message);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadSuggestedUsers();
  }, []);

  const handleFollow = (id) => {
    const newItem = id;
    if (!followedUserIds.includes(newItem)) {
      followUser(id);
      setFollowedUserIds((prevIds) => {
        return [...prevIds, newItem];
      });
    }
  };

  useEffect(() => {
    if (followedUserIds.length > 0) {
      dispatch(signupSliceActions.setIsFollowingOneAccount(true));
    } else {
      dispatch(signupSliceActions.setIsFollowingOneAccount(false));
    }
  }, [followedUserIds.length, dispatch]);

  const handleUnfollow = (idToRemove) => {
    unfollowUser(idToRemove);
    setFollowedUserIds(() => {
      const updatedFollowedUserIds = followedUserIds.filter(
        (id) => id !== idToRemove
      );
      return updatedFollowedUserIds;
    });
  };

  const checkIfUserIsAlreadyFollowed = (id) => {
    const isFollowed = followedUserIds.includes(id);
    return isFollowed;
  };

  const contextValue = {
    handleFollow,
    checkIfUserIsAlreadyFollowed,
    handleUnfollow,
  };

  return (
    <FollowContext.Provider value={contextValue}>
      <InfiniteScroll
        dataLength={items.length}
        next={loadSuggestedUsers}
        hasMore={hasMore}
        loader={<CustomSpinner />}
        scrollableTarget="scrollableDiv"
      >
        {items.map((user) => (
          <FollowCard key={user.id} user={user} />
        ))}
      </InfiniteScroll>
    </FollowContext.Provider>
  );
};
