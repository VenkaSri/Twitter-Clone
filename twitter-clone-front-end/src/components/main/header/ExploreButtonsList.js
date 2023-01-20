import React from "react";

import { ForYou, Trending, News, Sports, Entertainment } from "../../../utils/explore/NavObjects";
import ExplorePageButton from "../../UI/explore/ExplorePageButton";
const ExploreButtonsList = () => {
  return (
    <nav className="w-[37.375rem] h-[3.375rem] flex border-b border-b-slate-20 ">
      <ExplorePageButton buttonObject={ForYou}/>
      <ExplorePageButton buttonObject={News}/>
      <ExplorePageButton buttonObject={Trending}/>
      <ExplorePageButton buttonObject={Sports}/>
      <ExplorePageButton buttonObject={Entertainment}/>
    </nav>
  );
};

export default ExploreButtonsList;
