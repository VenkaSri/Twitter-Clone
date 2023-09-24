import React, { useState } from "react";

import { DialogContentHeading } from "../DialogContentHeading";
import { DialogBodyContainer } from "../dialog/DialogBodyContainer";
import { SuggestFriends } from "../SuggestFriends";
import { useMediaQuery } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};
export const FinalStep = () => {
  const [items, setItems] = useState(Array.from({ length: 5 }));
  const [hasMore, setHasMore] = useState(true);
  const fullScreen = useMediaQuery("(max-width:702px)");

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
  return (
    <DialogBodyContainer>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <DialogContentHeading
          text="Don't miss out"
          subtext="When you follow someone, you'll see their Posts in your Timeline. You'll also get more relevant recommendations."
        />
        {items.map((_, index) => (
          <div style={style} key={index}>
            div - #{index}
          </div>
        ))}
      </InfiniteScroll>
    </DialogBodyContainer>
  );
};

export default FinalStep;
