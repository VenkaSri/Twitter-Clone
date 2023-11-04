import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Editor, EditorState } from "draft-js";
import { usePostEditorContext } from "@/context/home/post-editor-context";
import { usePostEditorState } from "@/hooks/post/usePostEditorState";
import { useHeightObserver } from "@/hooks/post/useHeightObserver";
import { useTheme } from "@/hooks/useTheme";

export const PostInputField = ({ onHeightChange, placeholder }) => {
  const { setIsInputActive, postCreated, setPostCreated } =
    usePostEditorContext();
  const [height, setHeight] = useState(null);
  const { darkMode } = useTheme();
  const fieldRef = useRef(null);
  const [editorState, handleEditorChange, resetEditorState] =
    usePostEditorState(EditorState.createEmpty(), darkMode);

  useHeightObserver(fieldRef, (newHeight) => {
    onHeightChange(newHeight);
    setHeight(newHeight);
  });

  const styleMap = {
    HIGHLIGHT: {
      backgroundColor: darkMode ? "#8a0d20" : "#fb9fa8",
    },
  };

  useEffect(() => {
    if (postCreated) {
      resetEditorState();
      setPostCreated(false);
    }
  }, [postCreated, resetEditorState]);

  return (
    <div onClick={() => setIsInputActive(true)} className="w-full absolute">
      <Editor
        key={darkMode}
        editorState={editorState}
        onChange={handleEditorChange}
        customStyleMap={styleMap}
        ref={fieldRef}
        placeholder={placeholder}
        style={{ height: height ? `${height}px` : "auto" }}
      />
    </div>
  );
};

PostInputField.propTypes = {
  placeholder: PropTypes.string,
  onHeightChange: PropTypes.func,
};

/* -------- I opted not to install @Mui/Joy, which would have resulted in the same solution, in order to save 423.5kB minified (111.5kB gzipped) 
while transitioning to Vite. -------- */

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
