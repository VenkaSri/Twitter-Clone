import React from "react";

import Links from "../header/Links"



const Header = () => {
  return (
    <div className="grow border-r flex justify-end ">
      <div className="w-[275px] px-[12px] flex flex-col max-xl:w-[88px]">
        <div className="flex flex-col">
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Header;
