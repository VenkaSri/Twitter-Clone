// TweetField.js
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tweetActions } from "../../../../state/app/home/tweet-reducer";
import rootReducer from "../../../../state/rootReducer";

const TweetField = ({ onResize }) => {
  const dispatch = useDispatch();
  let currentNumberOfCharacters = useSelector(
    (state) => state.rootReducer.tweetState.currentNumberOfCharacters
  );
  const MAX_HEIGHT = "724px";
  const [textAreaHeight, setTextAreaHeight] = useState("52px");
  const textAreaRef = useRef(null);

  const handleTextChange = (e) => {
    const textAreaNode = textAreaRef.current;
    const currTextLength = textAreaNode.value.length;

    dispatch(tweetActions.setNumOfChars(currTextLength));

    if (currTextLength > 0) {
      dispatch(tweetActions.setTypedState(true));
    } else {
      dispatch(tweetActions.setTypedState(false)); // handle case when textarea is emptied
    }

    console.log(textAreaHeight);
    setTextAreaHeight("auto"); // Reset height to auto to get the actual scroll height
    if (textAreaNode.scrollHeight > parseInt(MAX_HEIGHT)) {
      setTextAreaHeight(MAX_HEIGHT);
    } else {
      setTextAreaHeight(`${textAreaNode.scrollHeight}px`);
    }
  };

  useEffect(() => {
    handleTextChange(); // Adjust the initial height in case there's default content
  }, []);

  const handleClick = () => {
    dispatch(tweetActions.isPostFieldClicked(true));
  };

  return (
    <textarea
      ref={textAreaRef}
      onChange={handleTextChange}
      onClick={handleClick}
      style={{ height: textAreaHeight }}
      placeholder="What is happening?!"
      className="font-cReg flex-grow text-[20px] resize-none placeholder:text-[#536471] text-[#0f1419] !outline-none leading-[24px] pt-2 pb-2 align-baseline"
    />
  );
};

export default TweetField;
