import TweetLinks from "./TweetLinks";
import TweetHeader from "./TweetHeader";
import TweetContent from "./TweetContent";

import ProfilePic from "../../images/profile/soccer.jpg";
const Tweet = () => {
  return (
    <div className="flex gap-4 border-b border-b-slate-200 mt-4 pb-2 pl-4">
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
