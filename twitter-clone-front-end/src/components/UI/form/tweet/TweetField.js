// TweetField.js
import React, { useState, useEffect, useRef } from "react";

const TweetField = ({ onResize }) => {
  return (
    <textarea
      placeholder="What is happening?!"
      className="font-cRegs text-[20px] resize-none grow placeholder:text-[#536471] text-[#0f1419] !outline-none leading-[24px]"
    />
  );
};

export default TweetField;
