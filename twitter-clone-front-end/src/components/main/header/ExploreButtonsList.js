import React from "react";

import ExplorePageButton from "../../UI/explore/ExplorePageButton";
const ExploreButtonsList = () => {
  return (
    <ul className="w-full h-13.5 flex justify-between">
      <ExplorePageButton name={"For you"}/>
      <ExplorePageButton name={"Trending"}/>
      <ExplorePageButton name={"News"}/>
      <ExplorePageButton name={"Sports"}/>
      <ExplorePageButton name={"Entertainment"}/>
    </ul>
  );
};

export default ExploreButtonsList;