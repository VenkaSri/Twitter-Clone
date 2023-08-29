import React from "react";

import Header from "../UI/header/Header";
import { EXPLORE, SETTINGS } from "../../utils/ButtonLinkObjects";

const LoggedOutHeader = () => {
  const headerButtonContent = [
    { href: "/#", svgPath: EXPLORE, text: "Home" },
    { href: "/#", svgPath: SETTINGS, text: "Explore" },
  ];
  return (
    <Header headerButtonContent={headerButtonContent} />
  );
};

export default LoggedOutHeader;
