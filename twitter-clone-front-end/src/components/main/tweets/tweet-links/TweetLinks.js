
import replyIcon from "../../../images/tweet/twitter-reply.png";
import retweetIcon from "../../../images/tweet/twitter-retweet.png";
import likeIcon from "../../../images/tweet/twitter-like.png";
import shareIcon from "../../../images/tweet/twitter-share.png";

import TweetStat from "./TweetStat";


const TweetLinks = () => {
  return (
    <div className="flex w-5/6 justify-between">
      <TweetStat />
      {/* <a className="flex text-sm gap-2">
        <img src={replyIcon} className="w-5" alt="reply icon"></img>
        233
      </a>
      <a>
        <img src={retweetIcon} className="w-5" alt="retweet icon"></img>
      </a>
      <a>
        <img src={likeIcon} className="w-5" alt="like icon"></img>
      </a>
      <a>
        <img src={shareIcon} className="w-5" alt="share icon"></img>
      </a> */}
    </div>
  );
};

export default TweetLinks;
