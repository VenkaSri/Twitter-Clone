import React, { useState } from "react";

import { DialogContentHeading } from "../DialogContentHeading";
import { DialogBodyContainer } from "../dialog/DialogBodyContainer";
import { SuggestFriends } from "../SuggestFriends";
import InfiniteScroll from "react-infinite-scroll-component";
const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};
export const FinalStep = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
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
  return (
    <>
      <InfiniteScroll
        className="border border-[red]"
        dataLength={items.length}
        next={fetchMoreData}
        height={497}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div>Hello</div>
        {items.map((_, index) => (
          <div style={style} key={index}>
            div - #{index}
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default FinalStep;
