import React, { useEffect, useState } from "react";
import getIcon from "../../utils/icons/iconsutil";
import { HeaderButton } from "./HeaderButton";
import RoundedButton from "../RoundedButton";
import useWindowHeight from "../../hooks/useWindowHeight";

export const HeaderNav = () => {
  const [newPostButtonMargin, setNewPostButtonMargin] = useState("");
  const [linkVisibility, setLinkVisibility] = useState("");
  const windowHeight = useWindowHeight();
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
    let visibility = linkVisibility; // Set the default visibility

    if (link === "Bookmarks" && windowHeight < 750) {
      visibility = "hidden"; // Change visibility for "Bookmarks" when windowHeight is less than 750
    }

    return (
      <HeaderButton
        key={link} // Add a unique key to each HeaderButton
        type={link}
        text={link}
        visibility={visibility}
      />
    );
  });

  useEffect(() => {
    if (windowHeight < 900) {
      setNewPostButtonMargin("my-1");
    } else {
      setNewPostButtonMargin("my-4");
    }
  }, [windowHeight]);

  return (
    <>
      <div className=" ">
        <nav className="">{headerButtons}</nav>
        <div className={`w-[90%]  ${newPostButtonMargin}`}>
          <RoundedButton
            style={
              "min-w-[52px] min-h-[52px] px-8 bg-[var(--primary-color)] text-white text-[17px]"
            }
            btnText="Post"
          />
        </div>
      </div>
    </>
  );
};
