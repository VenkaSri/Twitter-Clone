import TweetStat from "./TweetStat";
import TweetReply from "./TweetReply";
import TweetRetweet from "./TweetRetweet";
import TweetLike from "./TweetLike";
import TweetShare from "./TweetShare";


const TweetLinks = () => {
  return (
    <div className="flex w-5/6 justify-between">
      <TweetStat />
      <TweetReply />
      <TweetRetweet />
      <TweetLike />
      <TweetShare />
    </div>
  );
};

export default TweetLinks;
