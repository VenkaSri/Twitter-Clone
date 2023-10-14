import React, { useEffect, useState } from "react";
import { useSession } from "../../../hooks/useSession";
import ProfilePicture from "../../ProfilePicture";
import { DialogHeaderLogo } from "../../dialog/signup/header/DialogHeaderLogo";
import getIcon from "../../../utils/icons/iconsutil";

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
        <nav className="w-full h-14 flex">
          <div
            className="mainColumn--topNav-link"
            data-tab-type="For you"
            onClick={handleClick}
          >
            <div className=" flex-col-container grow">
              <div className="flex grow justify-center items-center font-cBold">
                For you
              </div>
              {selectedTab === "For you" && (
                <div className="bg-[var(--primary-color)]  h-1 rounded-full"></div>
              )}
            </div>
          </div>
          <div
            className="mainColumn--topNav-link"
            data-tab-type="Following"
            onClick={handleClick}
          >
            <div className=" flex-col-container grow">
              <div className="flex grow justify-center items-center  font-medium font-cMed">
                Following
              </div>
              {selectedTab === "Following" && (
                <div className="bg-[var(--primary-color)]  h-1 rounded-full"></div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
