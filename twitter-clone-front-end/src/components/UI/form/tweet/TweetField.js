// TweetField.js
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tweetActions } from "../../../../state/app/home/tweet-reducer";

const TweetField = ({ onResize }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(tweetActions.isPostFieldClicked(true));
  };

  return (
    <textarea
      onClick={handleClick}
      placeholder="What is happening?!"
      className="font-cReg text-[20px] resize-none placeholder:text-[#536471] text-[#0f1419] !outline-none leading-[24px] h-[52px]  pt-2 pb-2"
    />
  );
};

export default TweetField;
