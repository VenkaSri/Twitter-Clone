import React, { useRef } from "react";
import statIcon from "../../../images/tweet/tweetStats/twitter-reply.png";
import statIconBlue from "../../../images/tweet/tweetStats/twitter-stats1.png";

const originalImg = statIcon;
const hoverImg = statIconBlue;

const TweetReply = () => {
  const imageRef = useRef(null);

  return (
    <div
      // onMouseOver={() => {
      //   imageRef.current.src = hoverImg;
      // }}
      // onMouseOut={() => {
      //   imageRef.current.src = originalImg;
      // }}
      className="-ml-2 w-9 h-9 rounded-full flex justify-center items-center hover:bg-[#E1EEF7]"
    >
      
      {/* <img src={originalImg} alt="" ref={imageRef} /> */}
    </div>
  );
};

export default TweetReply;

