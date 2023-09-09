import React from "react";

import { LoginDialogLayout } from "./dialog/login/LoginDialogLayout";

export const DialogContent = ({ type }) => {
  switch (type) {
    case "LOGIN":
      return <LoginDialogLayout />;
    default:
      return null;
  }
};
