import React, { useEffect, useState } from "react";
import getIcon from "../../../utils/icons/iconsutil";
import { useTheme } from "../../../hooks/useTheme";
import { BottomBarLink, BottomLink } from "./BottomBarLink";
import useWindowHeight from "../../../hooks/useWindowHeight";
import { useMediaQuery } from "@mui/material";

export const BottomBar = () => {
  const links = ["Home", "Explore", "Notifications", "Messages"];
  const mobile = useMediaQuery("(max-height:500px)");
  const windowHeight = useWindowHeight();
  const [visibility, setVisibility] = useState("");

  useEffect(() => {
    if (windowHeight < 500) {
      setVisibility("block");
    } else {
      setVisibility("hidden");
    }
  }, [windowHeight]);

  const barLinks = links.map((link) => <BottomBarLink type={link} />);
  return (
    <div
      className={`absolute w-full bottom-0 bg-white dark:bg-black border-t border-t-[var(--primary-dark-border-color)] mobile:hidden block`}
    >
      <div className="max-w-[1000px] mx-auto">
        <nav className="w-full h-14 flex">{barLinks}</nav>
      </div>
    </div>
  );
};
// ${
//   mobile ? "block" : "hidden"
// }
