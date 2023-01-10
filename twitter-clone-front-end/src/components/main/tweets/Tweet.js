import TweetLinks from "./tweet-links/TweetLinks";
import TweetHeader from "./TweetHeader";
import TweetContent from "./TweetContent";

import ProfilePic from "../../images/profile/soccer.jpg";
const Tweet = () => {
  return (
    <div className="flex gap-4 border-b border-b-slate-200 cursor-pointer pb-2 pt-4 pl-4 hover:bg-[#f7f7f7]">
      <div>
        <img src={ProfilePic} className="w-12 rounded-full" />
      </div>
      <div>
          <TweetHeader />
          <TweetContent />
          <div className="mt-2">
          <TweetLinks />
        </div>
      </div>
      
    </div>
  );
};

export default Tweet;
