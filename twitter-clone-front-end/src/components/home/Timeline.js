import React, { useEffect, useState } from "react";
import { ForYou } from "./for-you/ForYou";
import { Following } from "./following/Following";

export const Timeline = () => {
  const getUserTLPref = localStorage.getItem("timelinePrefernce");
  const [timelineNode, setTimelineNode] = useState(null);

  useEffect(() => {
    setTimelineNode(getUserTLPref === "For you" ? <ForYou /> : <Following />);
  }, [getUserTLPref]);

  return (
    <div className="flex-col-container">
      <div className="relative min-h-[500px]">{timelineNode}</div>
    </div>
  );
};
