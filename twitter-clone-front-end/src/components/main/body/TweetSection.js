import React, { useState } from "react";
import ProfilePicture from "../../ProfilePicture";
import DefaultAvatar from "../../../assets/images/avatars/default_avi.png";
import TweetField from "../../UI/form/tweet/TweetField";
import Button from "../../UI/button/Button";
import TweetOptions from "./TweetOptions";

const TweetSection = () => {
  const buttonObject = {
    height: 24,
    width: 108,
    bgColor: "#FFFFFF",
    txtColor: "#1D9BF0",
    hoverBgColor: "#e8f5fe",
    brdColor: "#e0e6ea",
    text: "Everyone",
    display: "none",
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

  return (
    <>
      <div className=" flex">
        <div className="pt-[15px] pl-[15px]">
          <ProfilePicture source={DefaultAvatar} size={40} />
        </div>
        <div className="ml-[15px] text-[14px] flex flex-col gap-[10px] w-full mt-[12px]">
          <Button buttonProps={buttonObject} />
          <div className="  flex ">
            <TweetField />
          </div>
          <div className="border border-[red]">
            <TweetOptions />
          </div>
        </div>
      </div>
    </>
  );
};

export default TweetSection;
