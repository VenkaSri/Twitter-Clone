import React, { useState } from "react";

import { Popover, Typography } from "@mui/material";

const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleShow = (event) => {
    setAnchorEl(event.currentTarget);
    setPopoverOpen(true);
  };

  const handleClose = (event) => {
    setPopoverOpen(false);
    setAnchorEl(null);
    event.stopPropagation();
  };

  const RenderPopover = () => (
    <Popover
      open={popoverOpen}
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

  return { handleShow, RenderPopover };
};

export default usePopover;
