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
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [bottom, setBottom] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const fullScreen = useMediaQuery("(max-width:702px)");
  const containerRef = useRef(null);
  const [loadingData, setLoadingData] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const fetchMoreData = () => {
    // Simulate a fake async API call that sends
    // 20 more records in 1.5 seconds
    setTimeout(() => {
      const newItems = Array.from({ length: 20 });
      setItems((prevItems) => [...prevItems, ...newItems]);
    }, 1500);
  };

  return (
    <DialogBodyContainer>
      <DialogContentHeading
        text="Don't miss out"
        subtext="When you follow someone, you'll see their Posts in your Timeline. You'll also get more relevan
t recommendations."
      />
      <div className="px-3 py-4">
        <span>Follow 1 or more accounts</span>
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
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
