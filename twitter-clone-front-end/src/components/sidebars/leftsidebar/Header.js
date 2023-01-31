import React from "react";

import Links from "./Links";

import logo from "../../images/nottwitter.png";

const Header = () => {
  return (
    <div className="grow border-r flex justify-end">
      <div className="w-[275px] px-[12px] flex flex-col">
        <div className="flex flex-col justify-center items-center border border-rose-500">
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Header;
