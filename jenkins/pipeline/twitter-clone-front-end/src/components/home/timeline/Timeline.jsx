import { useEffect, useState } from "react";
import { ForYou } from "./for-you/ForYou";

export const Timeline = () => {
  const getUserTLPref = localStorage.getItem("timelinePrefernce");
  const [timelineNode, setTimelineNode] = useState(null);

  useEffect(() => {
    setTimelineNode(getUserTLPref === "For you" ? <ForYou /> : null);
  }, [getUserTLPref]);

  return (
    <div className="flex flex-col">
      <div className="relative min-h-[500px]">{timelineNode}</div>
    </div>
  );
};
