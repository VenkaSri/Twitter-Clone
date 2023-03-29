import React from "react";

import Header from "../UI/header/Header";
import { EXPLORE, SETTINGS, HOME, BELL, MESSAGE, BOOKMARK, TWITTER_BLUE, PROFILE, USER_MORE } from "../../utils/ButtonLinkObjects";

const LoggedInHeader = () => {
  const headerButtonContent = [
    { href: "/home", svgPath: HOME, text: "Home" },
    { href: "/explore", svgPath: EXPLORE, text: "Explore" },
    { href: "/notifications", svgPath: BELL, text: "Notifications" },
    { href: "/messages", svgPath: MESSAGE, text: "Messages" },
    { href: "/i/bookmarks", svgPath: BOOKMARK, text: "Bookmarks" },
    { href: "/i/twitter_blue", svgPath: TWITTER_BLUE, text: "Twitter Blue" },
    { href: "/user", svgPath: PROFILE, text: "Profile" },
    { href: "/", svgPath: USER_MORE, text: "More" },
  ];
  return (
    <Header headerButtonContent={headerButtonContent} />
  );
};

export default LoggedInHeader;