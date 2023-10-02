import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useTweetSectionContext } from "../../../context/TweetSectionCtx";

// https://css-tricks.com/auto-growing-inputs-textareas/

function setCaretToEnd(node) {
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(node);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

const TweetField = ({ setParentRef }) => {
  const { setNumOfChars, setHasUserTyped, setIsInputActive } =
    useTweetSectionContext();
  const [content, setContent] = useState(0);

  const textAreaRef = useRef(null);
  const handleTextChange = (event) => {
    const newText = event.target.textContent.length;
    if (newText === 0) {
      setHasUserTyped(false);
      event.target.textContent = "";
    } else {
      setHasUserTyped(true);
    }
    setContent(newText);
    setNumOfChars(event.target.textContent.length);
    const textAreaNode = textAreaRef.current;
    const currText = textAreaRef.current.innerText;
    const currTextLength = event.target.textContent.length;
    if (currTextLength > 280) {
      const validText = currText.slice(0, 280);
      const overflowText = currText.slice(280);
      textAreaNode.innerHTML =
        validText +
        `<span style="background-color: #fb9fa8;">${overflowText}</span>`;
      setCaretToEnd(textAreaNode);
    }
  };

  useEffect(() => {
    if (setParentRef && textAreaRef.current) {
      setParentRef(textAreaRef.current);
    }
  }, [textAreaRef, setParentRef]);

  const divClassName = `absolute w-full py-3 max-w-full break-words outline-0 focus:outline-none leading-6 text-[20px] font-cReg max-h-[700px] overflow-auto ${
    content === 0 ? "placeholder" : ""
  }`;

  return (
    <div
      role="textarea"
      contentEditable="true"
      className={divClassName}
      ref={textAreaRef}
      onInput={handleTextChange}
      onClick={() => setIsInputActive(true)}
    ></div>
  );
};

export default TweetField;
