import { useState } from "react";

import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import { Box } from "@mui/material";

export const usePopover = () => {
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

  const RenderPopover = ({ children, sx }) => {
    return (
      <Popover
        open={popoverOpen}
        transitionDuration={0}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom", // Adjust this as needed
          horizontal: "center", // Adjust this as needed
        }}
        transformOrigin={{
          vertical: "top", // Adjust this as needed
          horizontal: "center", // Adjust this as needed
        }}
        slotProps={{
          paper: {
            sx: sx,
          },
        }}
      >
        {children}
      </Popover>
    );
  };

  return { handleShow, RenderPopover };
};
