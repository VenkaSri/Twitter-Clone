import React from "react";

const TweetRetweet = () => {
  return (
    <div className="group mr-2 w-20 h-15 clip-tweet-reply-div flex justify-start items-center">
      <svg
        viewBox="0 -10 23 42"
        width="30"
        height="40"
        className="group-hover:bg-[#DEF1EB] fill-[#536471] group-hover:fill-[#00BA7C] rounded-full w-9 h-9"
      >
        <g>
          <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 
          0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 
          4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
        </g>
      </svg>
      <div>
        <p className="ml-1 text-sm font-cReg group-hover:text-[#00BA7C] text-[#536471]">
          78
        </p>
      </div>
    </div>
  );
};

export default TweetRetweet;
