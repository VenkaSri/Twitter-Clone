import React from "react";
import { useSession } from "../../../hooks/useSession";
import ProfilePicture from "../../ProfilePicture";
import { DialogHeaderLogo } from "../../dialog/signup/header/DialogHeaderLogo";
import getIcon from "../../../utils/icons/iconsutil";

export const TopNav = () => {
  const handleClick = () => {
    console.log("click");
  };
  const { photoSRC } = useSession();
  return (
    <div className="sticky -top-[0.5px] ">
      <div className="dark:bg-black/[0.60] backdrop-blur-md z-0">
        <div className="mainColumn--topNav-heading">
          <div className="flex relative px-4">
            <div className="mobile:hidden block">
              <ProfilePicture source={photoSRC} size={40} />
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
            <a className="mainColumn--topNav-link" onClick={handleClick}>
              <div className=" flex-col-container grow">
                <div className="flex grow justify-center items-center font-cBold">
                  For you
                </div>
                <div className="bg-[var(--primary-color)]  h-1 rounded-full"></div>
              </div>
            </a>
            <a className="mainColumn--topNav-link">
              <div className=" flex-col-container grow">
                <div className="flex grow justify-center items-center  font-medium font-cMed">
                  Following
                </div>
                {/* <div className="bg-[var(--primary-color)]  h-1 rounded-full"></div> */}
              </div>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
