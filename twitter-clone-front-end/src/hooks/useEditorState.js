import {
  Editor,
  EditorState,
  ContentState,
  Modifier,
  RichUtils,
} from "draft-js";

import { useState } from "react";
import { CHARACTER_LIMIT } from "../constants";
import { useTweetSectionContext } from "../context/TweetSectionCtx";

export const useEditorState = (initialState, placeholder) => {
  const [editorState, setEditorState] = useState(initialState);
  const { setHasUserTyped, setNumOfChars } = useTweetSectionContext();
  const handleEditorChange = (newEditorState) => {
    const content = newEditorState.getCurrentContent();
    const plainText = content.getPlainText();
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

  return [editorState, handleEditorChange];
};
