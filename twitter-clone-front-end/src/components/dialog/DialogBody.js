import React, { useState, useRef, useEffect } from "react";

import LoginHome from "./login/LoginHome";
import SignUpHome from "./signup/SignUpHome";

export const DialogBody = ({ type }) => {
  let body = null;

  switch (type) {
    case "LOGIN_HOME":
      body = <LoginHome />;
      break;
    case "SIGNUP_HOME":
      body = <SignUpHome />;
      break;
    default:
      break;
  }

  return <>{body}</>;
};
