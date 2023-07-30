// TweetField.js
import React, { useState, useEffect, useRef } from "react";

const TweetField = ({ onResize }) => {
  const textareaRef = useRef(null);
  const [tweetContent, setTweetContent] = useState("");

  const handleTweetChange = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    const computedHeight = Math.min(textarea.scrollHeight, 720);
    textarea.style.height = `${computedHeight}px`;
    setTweetContent(textarea.value);
    onResize(computedHeight); // Notify the parent component about the new height
  };

  useEffect(() => {
    // Call the handleTweetChange when the component mounts to set the initial height
    handleTweetChange();
  }, []);

  return (
    <textarea
      ref={textareaRef}
      value={tweetContent}
      onInput={handleTweetChange}
      placeholder="What is happening?!"
      className="font-cRegs text-[20px] resize-none grow placeholder:text-[#536471] text-[#0f1419] !outline-none leading-[24px]"
      rows={2}
    />
  );
};

export default TweetField;
