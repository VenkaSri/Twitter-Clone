import { Popover, Popper, Typography } from "@mui/material";
import React from "react";

export const ProgressPopper = ({ open, anchorEl }) => {
  const handleClose = () => {
    console.log("hi");
  };
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    </Popover>
  );
};
