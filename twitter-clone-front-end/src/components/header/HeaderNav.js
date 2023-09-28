import React from "react";
import getIcon from "../../utils/icons/iconsutil";
import { HeaderButton } from "./HeaderButton";
import RoundedButton from "../RoundedButton";
import useWindowHeight from "../../hooks/useWindowHeight";

export const HeaderNav = () => {
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

  const headerButtons = links.map((link) => (
    <HeaderButton type={link} text={link} />
  ));

  const windowHeight = useWindowHeight();

  if (windowHeight === 900) {
    console.log("900");
  }

  return (
    <>
      <div className=" ">
        <nav className="">{headerButtons}</nav>
        <div className="w-[90%]  my-1">
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
