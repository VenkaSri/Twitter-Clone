import React from "react";

import { DialogContent, DialogTitle } from "@mui/material";

const SignUpStep = ({ header, content }) => {
  return (
    <>
      <DialogTitle style={{ padding: 0 }}>{header}</DialogTitle>
      <DialogContent
        className="w-full max-w-[600px]  mx-auto p-0 flex-col-container relative dark:bg-black"
        sx={{
          "&.MuiDialogContent-root": {
            padding: 0,
          },
        }}
      >
        {content}
      </DialogContent>
    </>
  );
};

export default SignUpStep;
