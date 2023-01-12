import React from "react";

import CircleButton from "../UI/CircleButton";
import { Setting } from "../../utils/ButtonLinkObjects";
import Search from "./header/Search";


const MainHeader = () => {
  return (
    <div className="flex h-24.5  border-b border-b-slate-200 ">
      <div className="w-full h-12 flex justify-around items-center ">
      <Search />
      <CircleButton buttonInfo={Setting} />
      </div>
      <div>

      </div>
      
    </div>
  );
};

export default MainHeader;

// 