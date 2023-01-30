import React from "react";

import Links from "./Links";

import logo from "../../images/nottwitter.png";

const Header = () => {
  return (
    <div className="border-r h-screen border-r-slate-100 dark:border-r-[#2f3336]  w-[19.219rem] max-xl:w-[11.781rem] flex flex-col  sticky top-0">
      <div className="w-14 rounded-full ml-12 mt-4 flex  max-xl:ml-[7.5rem] justify-center items-center">
        <img src={logo} alt="Logo" className="w-7" />
      </div>
      <Links />
    </div>
  );
};

export default Header;
