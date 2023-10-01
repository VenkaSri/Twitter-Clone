import React from "react";

export const TopNav = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="sticky -top-[0.5px] ">
      <div className="dark:bg-black/[0.60] backdrop-blur-md z-0">
        <div className="mainColumn--topNav-heading">
          <span>Home</span>
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
