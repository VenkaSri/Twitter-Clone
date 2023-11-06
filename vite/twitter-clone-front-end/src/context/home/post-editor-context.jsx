import { createContext, useContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const PostEditorContext = createContext();

const PostEditorProvider = ({ children }) => {
  const [numOfChars, setNumOfChars] = useState(0);
  const [hasUserTyped, setHasUserTyped] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [postText, setPostText] = useState("");
  const [paths, setPaths] = useState([]);
  const [validPost, setValidPost] = useState(false);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postCreated, setPostCreated] = useState(false);

  const resetStates = () => {
    setNumOfChars(0);
    setHasUserTyped(false);
    setIsInputActive(false);
    setImgSrc(null);
    setPostText("");
    setPaths([]);
    setValidPost(false);
    setMediaFiles([]);
    setIsLoading(false);
  };

  const contextValue = {
    numOfChars,
    setNumOfChars,
    hasUserTyped,
    setHasUserTyped,
    isInputActive,
    setIsInputActive,
    setImgSrc,
    imgSrc,
    setPaths,
    paths,
    setValidPost,
    validPost,
    setMediaFiles,
    mediaFiles,
    postText,
    setPostText,
    isLoading,
    setIsLoading,
    resetStates,
    setPostCreated,
    postCreated,
  };

  useEffect(() => {
    if (numOfChars > 280) {
      setValidPost(false);
    } else if (numOfChars > 0 || mediaFiles.length > 0) {
      setValidPost(true);
    } else {
      setValidPost(false);
    }
  }, [numOfChars, mediaFiles.length, setValidPost, validPost]);

  return (
    <PostEditorContext.Provider value={contextValue}>
      {children}
    </PostEditorContext.Provider>
  );
};

const usePostEditorContext = () => {
  return useContext(PostEditorContext);
};

export { PostEditorProvider, usePostEditorContext };

PostEditorProvider.propTypes = {
  children: PropTypes.node,
};
