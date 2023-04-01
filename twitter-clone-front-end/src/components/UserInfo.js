import React, { useState } from "react";

import ProfilePicture from "./ProfilePicture";
import TestAvatar from "../assets/images/avatars/test.jpg";
import MoreOptions from "./UI/button/MoreOptions";
import { Popover } from "@mui/material";

import { useSelector } from "react-redux";

const UserInfo = () => {
  const username = useSelector((state) => state.rootReducer.userInfo.userName);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div
        onClick={handleClick}
        className="flex items-center p-[12px] rounded-full hover:bg-[#e7e7e8] cursor-pointer"
        id="userInfo"
      >
        <ProfilePicture source={TestAvatar} size={40} />
        <div className="flex flex-col ml-4 grow-0 leading-[20px]">
          <span className="inline-block font-cBold">No One</span>
          <span className="text-[#536471] font-cReg text-[15px]">
            @{username}
          </span>
        </div>
        <div className="ml-auto">
          <MoreOptions />
        </div>
      </div>
      <Popover
        PaperProps={{
          style: {
            borderRadius: "20px",
          },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <div className="w-[300px] h-[113px]"></div>
      </Popover>
    </>
  );
};

export default UserInfo;
