import React, { useEffect, useState, useRef } from "react";
import { DialogBodyContainer } from "./dialog/DialogBodyContainer";
import { InfoLabel } from "./InfoLabel";
import FollowCard from "./FollowCard";
import { getData } from "../services/auth/getData";
import { Oval } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { dialogSliceActions } from "../state/dialog/dialogSlice";
import { useDispatch } from "react-redux";
import { CustomSpinner } from "./CustomSpinner";
import { fetchSuggestedUsers } from "../services/fetchSuggestedUsers";

export const SuggestFriends = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isFollowed, setIsFollowed] = useState(false);

  const loadSuggestedUsers = async () => {
    try {
      const suggestedUsers = await fetchSuggestedUsers(page, 5);
      if (suggestedUsers.length === 1) setHasMore(false);
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

  const handleFollow = (userId) => {
    console.log(userId);
    setIsFollowed(true);
  };

  return (
    <>
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
    </>
  );
};
