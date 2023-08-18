import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProfilePicture from "../../ProfilePicture";
import DefaultAvatar from "../../../assets/images/avatars/default_avi.png";
import TweetField from "../../UI/form/tweet/TweetField";
import Button from "../../UI/button/Button";
import TweetOptions from "./TweetOptions";
import { tweetActions } from "../../../state/app/home/tweet-reducer";

const TweetSection = () => {
  const isVisible = useSelector(
    (state) => state.rootReducer.tweetState.isPostFieldClicked
  );
  const buttonObject = {
    bgColor: "#FFFFFF",
    txtColor: "#1D9BF0",
    hoverBgColor: "#e8f5fe",
    brdColor: "#e0e6ea",
    text: "Everyone",
    icon: true,
    margin: "0 0 0 4px",
    type: "Down_Arrow",
    paddingX: "12px",
    iconPosition: "end",
  };

  const whoCanReplyButton = {
    bgColor: "#FFFFFF",
    txtColor: "#1D9BF0",
    hoverBgColor: "#e8f5fe",
    text: "Everyone can reply",
    icon: true,
    margin: "0 4px 0 0px",
    paddingX: "12px",
    type: "Globe",
    iconPosition: "start",
  };

  return (
    <>
      <div className="flex border-b border-b-[#eff3f4] pb-3">
        <div className="pt-[15px] pl-[15px]">
          <ProfilePicture source={DefaultAvatar} size={40} />
        </div>
        <div className="ml-[15px] text-[14px] flex flex-col gap-[10px] items-start mt-[12px]">
          {isVisible && <Button buttonProps={buttonObject} />}
          <div className="flex flex-col">
            <TweetField />
          </div>
          <div className="-ml-3">
            {isVisible && <Button buttonProps={whoCanReplyButton} />}
          </div>

          <div className="-ml-2 -mt-2">
            <TweetOptions />
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetSection;
