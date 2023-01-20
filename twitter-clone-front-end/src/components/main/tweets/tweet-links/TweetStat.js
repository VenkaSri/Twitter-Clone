const TweetStat = () => {
  return (
    <div className="-ml-2 mr-2 group w-20 h-15 clip-tweet-reply-div flex justify-start items-center">
      <svg 
        viewBox="0 -10 23 42"
        width="30"
        height="40"
        className="group-hover:bg-[#E1EEF7] fill-[#536471] group-hover:fill-[#1d9bf0] rounded-full w-9 h-9 "
      >
        <g>
        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
        </g>
      </svg>
      <div>
        <p className="ml-1 text-sm font-cReg group-hover:text-[#1d9bf0] text-[#536471]">
          78
        </p>
      </div>
    </div>
  );
};

export default TweetStat;

