import React, { useState, useRef, useEffect } from "react";

import { useMediaQuery } from "@mui/material";

export const DialogBody = ({ type, content }) => {
  let body = null;
  const fullScreen = useMediaQuery("(max-width:702px)");

  return <>{content}</>;
};
