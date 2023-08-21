import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProfilePicture from "../../ProfilePicture";
import DefaultAvatar from "../../../assets/images/avatars/default_avi.png";
import TweetField from "../../UI/form/tweet/TweetField";
import Button from "../../UI/button/Button";
import TweetOptions from "./TweetOptions";
import CharactersProgress from "./post/CharactersProgress";

const TweetSection = () => {
  const isVisible = useSelector(
    (state) => state.rootReducer.tweetState.isPostFieldClicked
  );
  const hasUserTyped = useSelector(
    (state) => state.rootReducer.tweetState.hasUserTyped
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

  const postButton = {
    bgColor: "#FFFFFF",
    txtColor: "#1D9BF0",
    hoverBgColor: "#e8f5fe",
    text: "Post",
    icon: false,
    margin: "0 4px 0 0px",
    paddingX: "12px",
    type: "Globe",
    iconPosition: "start",
  };

  return (
    <div className="flex border-b border-b-[#eff3f4] px-[16px] pt-[4px]">
      <div className="pt-[12px] mr-[12px]">
        <ProfilePicture source={DefaultAvatar} size={40} />
      </div>
      <div className="pt-[4x]">
        <div>
          <div className="pb-[12px]">
            {isVisible && <Button buttonProps={buttonObject} />}
          </div>

          <div className="flex">
            <TweetField />
          </div>
        </div>

        <div className="-ml-3 py-2">
          {isVisible && <Button buttonProps={whoCanReplyButton} />}
        </div>

        <div
          className={`-ml-2 mt-1 ${
            isVisible && "border-t border-t-[#eff3f4]"
          } w-[514px] h-[48px] flex items-center justify-between `}
        >
          <TweetOptions />
          <div className="h-[36px] flex border border-[red] gap-[10px] items-center">
            {hasUserTyped && <CharactersProgress />}

            <div></div>
            <Button buttonProps={postButton}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetSection;
