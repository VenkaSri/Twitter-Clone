import React, { useState, useEffect } from "react";
import Reply from "./reply/Reply";
import ReplyCount from "./reply/ReplyCount";

const TweetReply = () => {
  const [hoverState, setHoverState] = useState(false);
  
  const mouseEnterHandler = () => {
    setHoverState(true);
  }
  const mouseLeaveHandler = () => {
    setHoverState(false);
  }
  
  return (
    <div className="w-20 h-10 border border-red-500 flex justify-center items-center">
      <Reply updateMouseEnter={mouseEnterHandler} updateMouseLeave={mouseLeaveHandler}/>
      <ReplyCount hover={hoverState}/>
    </div>
  );
};

export default TweetReply;
