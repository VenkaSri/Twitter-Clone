import { useState } from "react";
import { Logo } from "./icons/Icons";
import { Backdrop } from "@mui/material";
import { useTheme } from "../hooks/useTheme";

const AppProgess = () => {
  const { darkMode } = useTheme();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const bgColor = darkMode ? "black" : "white";

  console.log("rendered");
  return (
    <Backdrop
      sx={{
        color: "#fff",
        backgroundColor: bgColor,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={true}
      onClick={handleClose}
      transitionDuration={0}
    >
      <div className="flex grow">
        <div className="m-auto">
          <Logo
            className="w-20 dark:fill-[#0f1419]
        "
          />
        </div>
      </div>
    </Backdrop>
  );
};

export default AppProgess;
