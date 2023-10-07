import React from "react";

import Routes from "./ROUTES";
import { TwitterClone } from "./TwitterClone";
import { ErrorDialog } from "./components/error/ErrorDialog";

function App() {
  return (
    <>
      <TwitterClone />
      <Routes />
    </>
  );
}

export default App;
