import Popover from "@mui/material/Popover";
import { Close, Ellipsis } from "./icons/Icons";
import { useState } from "react";

export const MoreOptionsButton = ({ className }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div className="btn--more group" onClick={(e) => handleClick(e)}>
        <Ellipsis className="group-hover:fill-primary dark:fill-[#71767b] fill-[#536471] w-[20px]" />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <PopoverMenuItems />
      </Popover>
    </>
  );
};

const PopoverMenuItems = () => {
  const items = [
    {
      name: "Not interested in this post",
      icon: <Close />,
    },
    {
      name: "Follow",
      icon: <Close />,
    },
    {
      name: "Add/Remove from Lists",
      icon: <Close />,
    },
    {
      name: "Mute",
      icon: <Close />,
    },
    {
      name: "Block",
      icon: <Close />,
    },
    {
      name: "View post engagements",
      icon: <Close />,
    },
    {
      name: "Embed post",
      icon: <Close />,
    },
    {
      name: "Report post",
      icon: <Close />,
    },
  ];

  return (
    <>
      <div className="h-[325px] flex flex-col">
        {items.map((item) => {
          return (
            <>
              <div
                className="flex items-center grow px-4  font-cBold hover:bg-[#E6E7E7] dark:hover:bg-[#191919] opacity-40"
                role="menuitem"
              >
                <div className="mr-3">{item.icon}</div>
                <div>{item.name}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
