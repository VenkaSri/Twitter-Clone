import React from "react";

import Routes from "./ROUTES";
import { TwitterClone } from "./TwitterClone";

function App() {
  return (
    <div className="flex flex-col grow">
      <TwitterClone />
      <Routes />
    </div>
  );
}

export default App;
