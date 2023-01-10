import replyIcon from "../images/tweet/twitter-reply.png";
import retweetIcon from "../images/tweet/twitter-retweet.png";
import likeIcon from "../images/tweet/twitter-like.png";
import shareIcon from "../images/tweet/twitter-share.png";


const Tweet = () => {
  return (
    <div className="flex gap-4 border-b border-b-slate-200 pb-2">
      <div>dp</div>
      <div>
        <div className="flex">
          <p>
            <b>haley</b>
          </p>
          <p>@feederofcats</p>
          <p>23h</p>
        </div>
        <div>
          <p>
            just saw a kid in petsmart with his hands and face pressed against
            an adoptable cat's glass cage telling the cat they need to "form a
            plan" because his mom said no and whispering his full home address
            to the cat. i think the kids will be alright
          </p>
        </div>
        <div className="flex ">
          <a><img src={replyIcon} className="w-6" alt="reply icon"></img></a>
          <a><img src={retweetIcon} className="w-6" alt="retweet icon"></img></a>
          <a><img src={likeIcon} className="w-6" alt="like icon"></img></a>
          <a><img src={shareIcon} className="w-6" alt="share icon"></img></a>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
