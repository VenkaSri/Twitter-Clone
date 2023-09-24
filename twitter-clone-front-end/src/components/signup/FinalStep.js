import React, { useState, useRef, useEffect } from "react";

import { DialogContentHeading } from "../DialogContentHeading";
import { DialogBodyContainer } from "../dialog/DialogBodyContainer";
import { SuggestFriends } from "../SuggestFriends";
import { useMediaQuery } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { DialogHeaderContent } from "../dialog/header/DialogHeaderContent";
import _debounce from "lodash/debounce";
const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

const TOTAL_ITEMS = 60;
export const FinalStep = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }));
  const [bottom, setBottom] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const fullScreen = useMediaQuery("(max-width:702px)");
  const containerRef = useRef(null);
  const [loadingData, setLoadingData] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll events
  const debouncedHandleScroll = _debounce(() => {
    const container = containerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      // Calculate the scroll position from the bottom
      const scrollPositionFromBottom =
        scrollHeight - (scrollTop + clientHeight);

      setScrollPosition(scrollTop);

      // Check if we have reached the bottom
      if (scrollPositionFromBottom === 0) {
        console.log("bottom");
        fetchMoreData();
      } else {
        setBottom(false);
      }
    }
  }, 100); // Adjust the debounce delay as needed

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", debouncedHandleScroll);
      return () => {
        container.removeEventListener("scroll", debouncedHandleScroll);
      };
    }
  }, []);

  const fetchMoreData = () => {
    // Simulate a fake async API call that sends
    // 20 more records in 1.5 seconds
    setTimeout(() => {
      try {
        console.log("i get called");
        const newItems = Array.from({ length: 20 });
        const currentItems = items;
        // console.log(currentItems.length);
        setItems((prevItems) => {
          const updatedItems = [...prevItems, ...newItems];
          console.log(updatedItems.length);

          if (updatedItems.length >= TOTAL_ITEMS) {
            return prevItems;
          } else {
            return updatedItems;
          }
          // console.log(updatedItems.length);
          // console.log(prevItems.length);
          // const updatedHasMore = updatedItems.length >= TOTAL_ITEMS;
          // setHasMore(updatedHasMore);
          // return updatedItems;
        });

        // setItems((prevItems) => [...prevItems, ...newItems]);
      } catch (error) {
        console.error("Error in fetchMoreData:", error);
      }
    }, 1500);
  };

  // console.log(items.length);

  return (
    <DialogBodyContainer ref={containerRef}>
      <DialogContentHeading
        text="Don't miss out"
        subtext="When you follow someone, you'll see their Posts in your Timeline. You'll also get more relevant recommendations."
      />
      <div className="px-3 py-4">
        <span>Follow 1 or more accounts</span>
        <InfiniteScroll dataLength={items.length} hasMore={true}>
          {items.map((_, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </DialogBodyContainer>
  );
};

export default FinalStep;
