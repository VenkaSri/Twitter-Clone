import React from "react";

import { HeaderButton } from "./HeaderButton";
import { useMediaQuery } from "@mui/material";

export const HeaderNav = () => {
  const hide = useMediaQuery("(max-height:751px)");
  const links = [
    "Home",
    "Explore",
    "Notifications",
    "Messages",
    "Lists",
    "Bookmarks",
    "Communities",
    "Premium",
    "Profile",
    "More",
  ];

  const headerButtons = links.map((link) => {
    let visibility = "";

    if (link === "Bookmarks" && hide) {
      visibility = "hidden";
    }

    return (
      <HeaderButton
        key={link}
        type={link}
        text={link}
        visibility={visibility}
      />
    );
  });

  return (
    <>
      <nav className="tablet:self-start self-center">{headerButtons}</nav>
    </>
  );
};
