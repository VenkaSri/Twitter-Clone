import React from "react";

import Links from "./Links";

import logo from "../../images/nottwitter.png";

const Header = () => {
  return (
    <div
      className="border-r h-screen border-r-slate-100
                    flex flex-col  sticky"
    >
      <div className="w-fit flex w-[17.188rem] max-xl:w-[5.5rem] flex-col justify-center items-center border border-rose-500">
        <div className="self-start w-[3.125rem]  hover:bg-[#E8F5FE] cursor-pointer h-[3.125rem] rounded-full flex  max-xl:ml-[7.5rem] justify-center items-center">
          <img src={logo} alt="Logo" className="w-7" />
        </div>
        <Links />
      </div>
    </div>
  );
};

export default Header;
