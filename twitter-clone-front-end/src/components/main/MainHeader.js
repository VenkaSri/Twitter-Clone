import React from "react";

import CircleButton from "../UI/CircleButton";
import { Setting } from "../../utils/ButtonLinkObjects";
import Search from "./header/Search";
import ExploreButtonsList from "./header/ExploreButtonsList";

const MainHeader = () => {
  return (
    <div className="flex flex-col h-24.5  border-b border-b-slate-20 sticky top-0 ">
      <div className="w-full h-13.5 flex justify-around items-center">
        <Search />
        <CircleButton buttonInfo={Setting} />
      </div>
      <div>
        <ExploreButtonsList />
      </div>
    </div>
  );
};

export default MainHeader;
