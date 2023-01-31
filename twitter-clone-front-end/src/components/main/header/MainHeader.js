import React from "react";

import CircleButton from "../../UI/CircleButton";
import { Setting } from "../../../utils/ButtonLinkObjects";
import Search from "./Search";
import ExploreButtonsList from "./ExploreButtonsList";

const MainBodyHeader = () => {
  return (
    <div className="flex flex-col bg-white/[.90] sticky top-0 backdrop-blur-[4.7px] max-w-[37.5rem] border-r border-r grow">
      <div className="w-[37.375rem] h-[3.313rem] flex justify-around items-center">
        <Search />
        <CircleButton buttonInfo={Setting} />
      </div>
      <div>
        <ExploreButtonsList />
      </div>
    </div>
  );
};

export default MainBodyHeader;
