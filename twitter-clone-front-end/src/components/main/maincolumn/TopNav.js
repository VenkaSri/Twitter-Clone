import React, { useEffect, useState } from "react";
import { useSession } from "../../../hooks/useSession";
import ProfilePicture from "../../ProfilePicture";
import { DialogHeaderLogo } from "../../dialog/signup/header/DialogHeaderLogo";
import getIcon from "../../../utils/icons/iconsutil";
import { Tab, Tabs } from "@mui/material";
import TwitterTabs from "../tabs/Tabs";

export const TopNav = () => {
  const [selectedTab, setSelectedTab] = useState("For you");
  localStorage.setItem("timelinePrefernce", "For you");
  const getUserTLPref = localStorage.getItem("timelinePrefernce");
  const handleClick = (event) => {
    const tabType = event.currentTarget.getAttribute("data-tab-type");
    localStorage.setItem("timelinePrefernce", tabType);
    setSelectedTab(tabType);
  };

  const { photoSRC } = useSession();

  return (
    <>
      <div className="mainColumn--topNav-heading">
        <div className="flex relative px-4">
          <div className="mobile:hidden block">
            <ProfilePicture size={40} isPrincipleUser />
          </div>
          <div className="absolute inset-0 flex justify-center items-center mobile:hidden">
            {getIcon("X_LOGO", {
              height: "2rem",
              maxWidth: "100%",
              fill: "black",
            })}
          </div>

          <span className="self-center hidden mobile:block">Home</span>
        </div>
      </div>
      <div className="mainColumn--topNav-links">
        <TwitterTabs />
      </div>
    </>
  );
};
