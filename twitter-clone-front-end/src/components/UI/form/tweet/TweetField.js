// import React, { useState, useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { tweetActions } from "../../../../state/app/tweet-reducer";
// import rootReducer from "../../../../state/rootReducer";
// import styled from "styled-components";

// // https://css-tricks.com/auto-growing-inputs-textareas/

// function setCaretToEnd(node) {
//   const range = document.createRange();
//   const selection = window.getSelection();
//   range.selectNodeContents(node);
//   range.collapse(false);
//   selection.removeAllRanges();
//   selection.addRange(range);
// }

// const ContentEditable = styled.span`
//   display: block;
//   width: 100%;
//   overflow: hidden;
//   resize: none;
//   line-height: 24px;
//   max-width: 510px;
//   white-space: pre-wrap; /* or 'normal' */
//   word-wrap: break-word; /* ensure words break nicely */
//   min-height: 52px;
//   font-size: 20px;
//   padding: 12px 0;

//   &:focus {
//     border-color: #3b82f6; /* Tailwind's blue-500 */
//     outline: none;
//   }

//   &[contenteditable]:empty::before {
//     content: "What is happening?!";
//     font-family: "Chrip Regular";
//     color: #6b7280; /* Tailwind's gray-400 */
//   }
// `;

// const TweetField = ({ onResize }) => {
//   const textAreaRef = useRef(null);
//   const dispatch = useDispatch();
//   const handleTextChange = () => {
//     const textAreaNode = textAreaRef.current;
//     const currText = textAreaNode.innerText;
//     const currTextLength = textAreaNode.innerText.length;
//     dispatch(tweetActions.setNumOfChars(currTextLength));

//     if (currTextLength > 0) {
//       dispatch(tweetActions.setTypedState(true));
//     } else {
//       dispatch(tweetActions.setTypedState(false));
//     }

//     if (currTextLength > 280) {
//       const validText = currText.slice(0, 280);
//       const overflowText = currText.slice(280);
//       textAreaNode.innerHTML =
//         validText +
//         `<span style="background-color: #fb9fa8;">${overflowText}</span>`;
//       setCaretToEnd(textAreaNode);
//     }
//   };

//   const handleClick = () => {
//     console.log("clicked");
//     dispatch(tweetActions.isPostFieldClicked(true));
//   };

//   return (
//     <ContentEditable
//       className="font-cReg cursor-text"
//       role="textbox"
//       contentEditable
//       onInput={handleTextChange}
//       onClick={handleClick}
//       ref={textAreaRef}
//       spellCheck={true}
//     />
//   );
// };

// export default TweetField;
