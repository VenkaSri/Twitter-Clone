import React, { useState, useRef, useEffect } from "react";

import LoginHome from "./login/LoginHome";
import SignUpHome from "./signup/SignUpHome";
import { useMediaQuery } from "@mui/material";

export const DialogBody = ({ type, content }) => {
  let body = null;
  const fullScreen = useMediaQuery("(max-width:702px)");
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

  return <>{content}</>;
};

// <div
// className={`overflow-auto
// flex flex-col items-stretch basis-full flex-grow bg-[#fff] dark:bg-[#000]`}
// >
// <div
//   className={`${
//     fullScreen ? " px-8" : " px-20"
//   } shrink-0 flex flex-col mb-2 grow`}
// >

// </div>
// </div>
