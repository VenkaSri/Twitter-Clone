import React from "react";

import ProfilePicture from "../ProfilePicture";
import DefaultAvatar from "../../assets/images/avatars/default_avi.png";
import TweetField from "../UI/form/tweet/TweetField";

const ComposeTweet = () => {
  return (
    <>
      <div className="border border-[red] h-[120px]">
        <div className="pt-[15px] pl-[15px] flex justify-between">
          <ProfilePicture source={DefaultAvatar} size={40} />
          <TweetField />
        </div>
      </div>
    </>
  );
};

export default ComposeTweet;
