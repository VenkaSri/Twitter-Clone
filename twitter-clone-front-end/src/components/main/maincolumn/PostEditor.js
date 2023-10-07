import React, { useEffect, useRef } from "react";

import { useTweetSectionContext } from "../../../context/TweetSectionCtx";
import { Editor, EditorState } from "draft-js";
import { useHeightObserver } from "../../../hooks/useHeightObserber";
import { useEditorState } from "../../../hooks/useEditorState";
import { useTheme } from "../../../hooks/useTheme";

const PostEditor = ({ onHeightChange }) => {
  const { setIsInputActive, postCreated, setPostCreated } =
    useTweetSectionContext();
  const darkMode = useTheme();
  const fieldRef = useRef(null);
  const [editorState, handleEditorChange, resetEditorState] = useEditorState(
    EditorState.createEmpty()
  );

  useHeightObserver(fieldRef, onHeightChange);

  const styleMap = {
    HIGHLIGHT: {
      backgroundColor: darkMode ? "#8a0d20" : "#fb9fa8",
    },
  };

  useEffect(() => {
    if (postCreated) {
      // Reset the editorState using the reset function
      resetEditorState();
      setPostCreated(false);
    }
  }, [postCreated, resetEditorState]);

  return (
    <div onClick={() => setIsInputActive(true)} className="w-full absolute">
      <Editor
        editorState={editorState}
        onChange={handleEditorChange}
        customStyleMap={styleMap}
        ref={fieldRef}
        placeholder="What is happening?!"
      />
    </div>
  );
};

export default PostEditor;

/* -------- same functionlity without Draft.js lib; but has issues with the caret position when typing in between text -------- */

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

// const divClassName = `absolute w-full py-3 max-w-full break-words outline-0 focus:outline-none
// leading-6 text-[20px] font-cReg max-h-[700px] overflow-auto cursor-text ${
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
