import React from "react";

import getIcon from "../../utils/icons/iconsutil";
import { HeaderNav } from "./HeaderNav";
import { useTheme } from "../../hooks/useTheme";
import { NewPostButton } from "./NewPostButton";
import { AccountMenu } from "./AccountMenu";

const Sidebar = () => {
  const { darkMode } = useTheme();

  return (
    <div className="header--siderbar">
      <div className="flex-col-container">
        <div className="header--logo">
          {getIcon("X_LOGO", {
            height: 30,
            fill: darkMode ? "white" : "black",
          })}
        </div>
        <HeaderNav />
        <NewPostButton />
      </div>
      <AccountMenu />
    </div>
  );
};

export default Sidebar;
