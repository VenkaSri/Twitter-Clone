import React, { useEffect, useState, useRef } from "react";
import { DialogBodyContainer } from "./dialog/DialogBodyContainer";
import { InfoLabel } from "./InfoLabel";
import FollowCard from "./FollowCard";
import { getData } from "../services/auth/getData";
import { Oval } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { dialogSliceActions } from "../state/dialog/dialogSlice";
import { useDispatch } from "react-redux";

export const SuggestFriends = () => {
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const dispatch = useDispatch();
  const [contentNotLoaded, setContentNotLoaded] = useState(true);
  const [page, setPage] = useState(0); // Track the current page
  const [hasMore, setHasMore] = useState(true); // Track whether there's more data to load

  useEffect(() => {
    const fetchSuggestedUsers = async () => {
      try {
        const result = await getData(
          `/v1/api/users/suggestions?page=0&pageSize=4`
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
      <div className="min-h-[500px]">
        {contentNotLoaded ? (
          <Oval
            height={30}
            width={30}
            color="#1d9bf0"
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#1d9bf0"
            strokeWidth={5}
            strokeWidthSecondary={2}
          />
        ) : (
          users
        )}
      </div>
    </>
  );
};
