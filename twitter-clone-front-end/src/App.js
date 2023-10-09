import React from "react";

import Routes from "./ROUTES";
import { TwitterClone } from "./TwitterClone";
import { Snackbar } from "./components/modal/Snackbar";
import { useSelector } from "react-redux";

function App() {
  const { isError, errorMessage } = useSelector(
    (state) => state.rootReducer.modalSlice.snackbarSlice
  );

  return (
    <>
      {isError && <Snackbar message={errorMessage} />}
      <TwitterClone />
      <Routes />
    </>
  );
}

export default App;
