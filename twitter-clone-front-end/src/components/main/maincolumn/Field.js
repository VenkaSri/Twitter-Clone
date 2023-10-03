import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useTweetSectionContext } from "../../../context/TweetSectionCtx";
import {
  Editor,
  EditorState,
  ContentState,
  Modifier,
  RichUtils,
} from "draft-js";
const MAX_LENGTH = 10;
const TweetField = ({ setParentRef }) => {
  const textAreaRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [content, setContent] = useState(0);
  const handleEditorChange = (newEditorState) => {
    const content = newEditorState.getCurrentContent();
    const plainText = content.getPlainText();
    let newContent = content;

    // Remove existing HIGHLIGHT from all characters
    const selectAll = newEditorState.getSelection().merge({
      anchorOffset: 0,
      focusOffset: plainText.length,
    });
    newContent = Modifier.removeInlineStyle(newContent, selectAll, "HIGHLIGHT");

    // Apply HIGHLIGHT for characters beyond the limit
    if (plainText.length > MAX_LENGTH) {
      const highlightSelection = selectAll.merge({
        anchorOffset: MAX_LENGTH,
        focusOffset: plainText.length,
      });
      newContent = Modifier.applyInlineStyle(
        newContent,
        highlightSelection,
        "HIGHLIGHT"
      );
    }

    const newState = EditorState.set(newEditorState, {
      currentContent: newContent,
    });

    setEditorState(newState);
  };

  const styleMap = {
    HIGHLIGHT: {
      backgroundColor: "red",
    },
  };
  const divClassName = `absolute w-full py-3 max-w-full break-words outline-0 focus:outline-none leading-6 text-[20px] font-cReg max-h-[700px] overflow-auto cursor-text ${
    content === 0 ? "placeholder" : ""
  }`;

  return (
    <Editor
      editorState={editorState}
      onChange={handleEditorChange}
      customStyleMap={styleMap}
      className="myEditor"
    />
  );
};

export default TweetField;

// same functionlity without Draft.js but has issues with the cursor

// const { setNumOfChars, setHasUserTyped, setIsInputActive } =
//   useTweetSectionContext();
// const [content, setContent] = useState(0);

// const textAreaRef = useRef(null);
// const handleTextChange = (event) => {
//   const selection = window.getSelection();
//   const range = selection.getRangeAt(0);
//   console.log(range);
//   const newText = event.target.textContent.length;
//   if (newText === 0) {
//     setHasUserTyped(false);
//     event.target.textContent = "";
//   } else {
//     setHasUserTyped(true);
//   }
//   setContent(newText);
//   setNumOfChars(event.target.textContent.length);
//   const textAreaNode = textAreaRef.current;
//   const currText = textAreaRef.current.innerText;
//   const currTextLength = event.target.textContent.length;
//   if (currTextLength > 280) {
//     const validText = currText.slice(0, 280);
//     const overflowText = currText.slice(280);
//     textAreaNode.innerHTML =
//       validText +
//       `<span style="background-color: #fb9fa8;">${overflowText}</span>`;
//   }
//   selection.removeAllRanges();
//   selection.addRange(range);
// };

// useEffect(() => {
//   if (setParentRef && textAreaRef.current) {
//     setParentRef(textAreaRef.current);
//   }
// }, [textAreaRef, setParentRef]);

// const divClassName = `absolute w-full py-3 max-w-full break-words outline-0 focus:outline-none leading-6 text-[20px] font-cReg max-h-[700px] overflow-auto cursor-text ${
//   content === 0 ? "placeholder" : ""
// }`;

// return (
//   <div
//     role="textarea"
//     contentEditable="true"
//     className={divClassName}
//     ref={textAreaRef}
//     onInput={handleTextChange}
//     onClick={() => setIsInputActive(true)}
//   ></div>
// );
