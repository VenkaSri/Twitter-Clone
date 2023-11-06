import { CHARACTER_LIMIT } from "@/constants/app";
import { usePostEditorContext } from "@/context/home/post-editor-context";
import { EditorState, Modifier } from "draft-js";
import { useState } from "react";

export const usePostEditorState = (initialState) => {
  const [editorState, setEditorState] = useState(initialState);
  const { setHasUserTyped, setNumOfChars, setPostText } =
    usePostEditorContext();

  const resetEditorState = () => {
    setEditorState(EditorState.createEmpty());
  };
  const handleEditorChange = (newEditorState) => {
    const content = newEditorState.getCurrentContent();

    const plainText = content.getPlainText();

    setPostText(plainText);
    let newContent = content;
    setNumOfChars(plainText.length);
    if (plainText.length > 0) {
      setHasUserTyped(true);
    } else {
      setHasUserTyped(false);
    }

    const selectAll = newEditorState.getSelection().merge({
      anchorOffset: 0,
      focusOffset: plainText.length,
    });
    newContent = Modifier.removeInlineStyle(newContent, selectAll, "HIGHLIGHT");

    if (plainText.length > CHARACTER_LIMIT) {
      const highlightSelection = selectAll.merge({
        anchorOffset: CHARACTER_LIMIT,
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

  return [editorState, handleEditorChange, resetEditorState];
};
