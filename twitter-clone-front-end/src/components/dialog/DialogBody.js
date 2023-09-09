import React from "react";

import LoginHome from "./login/LoginHome";
import { LoginPasswordInput } from "./login/LoginPasswordInput";

export const DialogBody = ({ type }) => {
  let body = null;

  switch (type) {
    case "LOGIN_HOME":
      body = <LoginHome />;
      break;
    case "LOGIN_PASSWORD_INPUT":
      body = <LoginPasswordInput />;
      break;
    default:
      break;
  }

  return <div className="flex-col-container">{body}</div>;
};
