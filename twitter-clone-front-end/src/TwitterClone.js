import React, { useEffect, useState } from "react";

import { Router, Route } from "react-router-dom";
import { SignupDialog } from "./pages/modal/SignupDialog";
import { useSelector } from "react-redux";

export const TwitterClone = () => {
  const [currentDialog, setCurrentDialog] = useState(null);
  const currentUrl = useSelector(
    (state) => state.rootReducer.urlSlice.currentUrl
  );

  console.log(currentUrl);

  useEffect(() => {
    if (currentUrl === "http://localhost:3000/i/flow/signup") {
      setCurrentDialog(<SignupDialog fromStepOne />);
    }
  }, [currentUrl]);

  return currentDialog;
};
