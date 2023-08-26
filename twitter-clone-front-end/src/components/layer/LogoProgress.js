import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "../icon";

export const LogoProgress = () => {
  const dark = useSelector((state) => state.rootReducer.globalState.isDarkMode);
  const fillColor = dark ? "#fff" : "#000";

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Icon name="X_LOGO" props={{ fill: fillColor, maxHeight: "60px" }} />
    </div>
  );
};
