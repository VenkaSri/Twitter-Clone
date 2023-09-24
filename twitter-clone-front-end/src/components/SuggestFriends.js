import React, { useEffect, useState, useRef } from "react";
import { DialogBodyContainer } from "./dialog/DialogBodyContainer";
import { InfoLabel } from "./InfoLabel";
import FollowCard from "./FollowCard";
import { getData } from "../services/auth/getData";
import { Oval } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { dialogSliceActions } from "../state/dialog/dialogSlice";
import { useDispatch } from "react-redux";
const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};
export const SuggestFriends = () => {
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const dispatch = useDispatch();
  const [contentNotLoaded, setContentNotLoaded] = useState(true);
  const [page, setPage] = useState(0); // Track the current page
  const [items, setItems] = useState(Array.from({ length: 40 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 500) {
      setHasMore(false);
      return;
    }
    // Simulate a fake async API call that sends
    // 20 more records in 1.5 seconds
    setTimeout(() => {
      setItems([...items, ...Array.from({ length: 20 })]);
    }, 1500);
  };

  useEffect(() => {
    const fetchSuggestedUsers = async () => {
      try {
        const result = await getData(
          `/v1/api/users/suggestions?page=0&pageSize=2`
        );
        const response = await result.json();
        setSuggestedUsers(response.content);
        dispatch(dialogSliceActions.setIsDialogContentLoaded(true));
        setContentNotLoaded(false);
      } catch (error) {
        // Handle any errors that occur during the API call
        console.error("Error fetching suggested users:", error);
      }
    };

    fetchSuggestedUsers();
  }, []);

  const users = suggestedUsers.map((user) => (
    <FollowCard key={user.id} user={user} />
  ));

  return (
    <>
      <div className="flex-col-container grow">
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          height={400}
          loader={<h4>Loading...</h4>}
        >
          {items.map((_, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};
