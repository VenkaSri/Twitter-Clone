import React from "react";

import Routes from "./ROUTES";
import { TwitterClone } from "./TwitterClone";
import { Snackbar } from "./components/modal/Snackbar";
import { useSelector } from "react-redux";
import { TweetSectionProvider } from "./context/TweetSectionCtx";

function App() {
  const { isError, errorMessage } = useSelector(
    (state) => state.rootReducer.modalSlice.snackbarSlice
  );

  return (
    <>
      <TweetSectionProvider>
        {isError && <Snackbar message={errorMessage} />}
        <TwitterClone />
        <Routes />
      </TweetSectionProvider>
    </>
  );
}

export default App;
