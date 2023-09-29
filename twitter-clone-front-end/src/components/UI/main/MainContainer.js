import React, { useEffect, useState } from "react";
import MainHeader from "../../main/header/MainHeader";
import useWindowHeight from "../../../hooks/useWindowHeight";

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
    <div className={`flex w-[990px] justify-between   ${styles} `}>
      <MainHeader />
      <div className="overflow-hidden w-[350px] mr-[10px]"></div>
    </div>
  );
};

export default MainContainer;
