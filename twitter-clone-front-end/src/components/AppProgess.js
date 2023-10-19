import React, { useEffect } from "react";

import { X } from "./icons/icons";
import { useGetPrincipleUserDetailsQuery } from "../services/user/userApi";
import { useDispatch, useSelector } from "react-redux";
import { loadingSliceActions } from "../state/loading/loadingSlice";
import { Backdrop } from "@mui/material";
import classNames from "classnames";
import { useTheme } from "../hooks/useTheme";
import { getData } from "../services/auth/getData";
import { userInfoActions } from "../state/user/userInfo-reducer";

export const AppProgess = ({ isOpen }) => {
  const { darkMode } = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const bgColor = darkMode ? "black" : "white";

  return (
    <Backdrop
      sx={{
        color: "#fff",
        backgroundColor: bgColor,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={isOpen}
      onClick={handleClose}
      transitionDuration={0}
    >
      <div className="flex grow bg-white">
        <div className="m-auto">
          <X
            className="w-20 dark:fill-[#0f1419]
        "
          />
        </div>
      </div>
    </Backdrop>
  );
};
