import React, { useEffect, useState } from "react";
import useWindowHeight from "../../../hooks/useWindowHeight";
import { MainColumn } from "./MainColumn";
import { SideColumn } from "./SideColumn";

const MainContainer = () => {
  const [styles, setStyles] = useState("");
  const windowHeight = useWindowHeight();

  useEffect(() => {
    if (windowHeight < 500) {
      setStyles("mx-auto px-3");
    } else {
      setStyles("");
    }
  }, [windowHeight]);
  return (
    <div
      className={`flex w-[990px] max-[1092px]:w-[920px] justify-between  ${styles} grow max-[980px]:w-[600px] max-[680px]:w-full`}
    >
      <MainColumn />
      <SideColumn />
    </div>
  );
};

export default MainContainer;
