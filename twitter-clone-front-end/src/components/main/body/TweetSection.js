import React, { useState } from "react";
import ProfilePicture from "../../ProfilePicture";
import DefaultAvatar from "../../../assets/images/avatars/default_avi.png";
import TweetField from "../../UI/form/tweet/TweetField";
import Button from "../../UI/button/Button";

const TweetSection = () => {
  const buttonObject = {
    height: 24,
    width: 108,
    bgColor: "#FFFFFF",
    txtColor: "#1D9BF0",
    hoverBgColor: "#e8f5fe",
    brdColor: "#e0e6ea",
    text: "Everyone",
  };

  const button2Object = {
    height: 24,
    width: 108,
    bgColor: "#FFFFFF",
    txtColor: "#1D9BF0",
    hoverBgColor: "#e8f5fe",
    brdColor: "#e0e6ea",
    text: "Every can reply",
  };

  const [tweetFieldHeight, setTweetFieldHeight] = useState(56);

  const handleTweetFieldResize = (newHeight) => {
    setTweetFieldHeight(newHeight);
  };

  return (
    <>
      <div className="border border-[red] flex">
        <div className="pt-[15px] pl-[15px]">
          <ProfilePicture source={DefaultAvatar} size={40} />
        </div>
        <div className="text-[14px] flex flex-col gap-[10px]">
          <Button buttonProps={buttonObject} />
          <div
            className="ml-[15px] w-full flex border border-[red]"
            style={{ height: tweetFieldHeight }}
          >
            <TweetField onResize={handleTweetFieldResize} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetSection;
