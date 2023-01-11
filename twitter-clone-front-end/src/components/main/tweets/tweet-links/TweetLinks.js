import TweetStat from "./TweetStat";
import TweetReply from "./TweetReply";


const TweetLinks = () => {
  return (
    <div className="flex w-5/6 justify-between border border-rose-500">
      <TweetStat />
      <TweetReply />
    </div>
  );
};

export default TweetLinks;
