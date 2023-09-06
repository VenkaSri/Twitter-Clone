import React, { useEffect, useState } from "react";

import { Dialog, DialogContent } from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { unfollowDialogActions } from "../state/dialog/dialogState-reducer";
import { useMediaQuery } from "@mui/material";

// https://codesandbox.io/s/styled-components-dialog-backdrop-m7yjn?file=/demo.js:775-874

const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background: none;
  }
`;

export const CustomDialog = ({ content, CustomPaperProps }) => {
  const defaultPaperProps = {}; // default styles
  let paperPropsToUse = CustomPaperProps || defaultPaperProps;
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.rootReducer.dialogState.error);
  const fullScreen = useMediaQuery("(max-width:702px)");

  const fullScreenStyles = {
    "&.MuiDialog-root": {
      pointerEvents: "none",
    },
    "& .MuiDialog-paper": {
      maxWidth: "none", // Remove maxWidth restrictions
      width: "100%", // Set width to 100%
      borderRadius: 0,
    },
  };

  const normalScreenStyles = {
    "&.MuiDialog-root": {
      pointerEvents: "none",
    },
  };

  const currentStyles = fullScreen ? fullScreenStyles : normalScreenStyles;

  if (fullScreen) {
    console.log("hello");
    paperPropsToUse = {
      ...paperPropsToUse,
      sx: {
        ...paperPropsToUse.sx,
        bottom: 0,
        width: "100%",
        margin: 0,
      },
    };
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      dispatch(unfollowDialogActions.setError(false));
    }, 2000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, [error, dispatch]);

  return (
    <StyledDialog open={true} PaperProps={paperPropsToUse} sx={currentStyles}>
      {content}
    </StyledDialog>
  );
};
