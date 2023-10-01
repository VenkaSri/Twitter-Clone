// TweetSectionCtx.js

import React, { createContext, useContext, useState } from "react";

const TweetSectionContext = createContext();

const TweetSectionProvider = ({ children }) => {
  const [numOfChars, setNumOfChars] = useState(0);
  const [hasUserTyped, setHasUserTyped] = useState(false);

  const contextValue = {
    numOfChars,
    setNumOfChars,
    hasUserTyped,
    setHasUserTyped,
  };

  return (
    <TweetSectionContext.Provider value={contextValue}>
      {children}
    </TweetSectionContext.Provider>
  );
};

const useTweetSectionContext = () => {
  return useContext(TweetSectionContext);
};

export { TweetSectionProvider, useTweetSectionContext };
