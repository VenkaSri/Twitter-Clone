import React from "react";

const TweetReply = () => {
  return (
    <div className="group w-20 mr-2 h-15 clip-tweet-reply-div flex justify-start items-center">
        <svg viewBox="0 -10 23 42" width="30" height="40" className="group-hover:bg-[#E1EEF7] fill-[#536471] group-hover:fill-[#1d9bf0] rounded-full w-9 h-9" >
          <g>
            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 
            7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 
            3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 
            0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
          </g>
        </svg>
      <div>
        <p className="ml-1 text-sm font-cReg group-hover:text-[#1d9bf0] text-[#536471]">78</p>
      </div>
    </div>
  );
};

export default TweetReply;