import React from "react";

import Links from "./Links";

import logo from "../images/nottwitter.png";

const Header = () => {
  return (
    <div className="border-r border-r-slate-200 h-screen w-72 flex flex-col">
      <div className="h-14 w-14 rounded-full ml-5 mt-4 flex justify-center items-center">
        <img src={logo} alt="Logo" className="w-8" />
      </div>
      <Links />
    </div>
  );
};

export default Header;
