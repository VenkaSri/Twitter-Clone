import statIcon from "../../../images/tweet/twitter-stats.png";

const TweetStat = () => {
  return (
    <div className="border border-rose-500 w-9 h-9 rounded-full">
        <img src={statIcon} />
    </div>
  );
};

export default TweetStat;
/* <a href="/#"><img src={statIcon} className="hover:bg-[#E0EDF6] w-7 p-1 rounded-full" alt="reply icon"/></a> */