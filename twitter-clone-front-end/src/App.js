import React from "react";

import Routes from "./ROUTES";
import { TwitterClone } from "./TwitterClone";
import { Snackbar } from "./components/modal/Snackbar";
import { useSelector } from "react-redux";
import { TweetSectionProvider } from "./context/TweetSectionCtx";
import { AppProgess } from "./components/AppProgess";
import { AppInitializer } from "./AppInitializer";

function App() {
  const { isError, errorMessage } = useSelector(
    (state) => state.rootReducer.modalSlice.snackbarSlice
  );

  return (
    <>
      <AppInitializer />
    </>
  );
}

export default App;
