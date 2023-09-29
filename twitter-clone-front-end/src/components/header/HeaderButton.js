import React, { useEffect, useState } from "react";
import getIcon from "../../utils/icons/iconsutil";
import { useTheme } from "../../hooks/useTheme";
import useWindowHeight from "../../hooks/useWindowHeight";

export const HeaderButton = ({ type, text, visibility }) => {
  const darkMode = useTheme();
  const windowHeight = useWindowHeight();
  const [linkPadding, setLinkPadding] = useState("");

  useEffect(() => {
    if (windowHeight < 850) {
      setLinkPadding("py-0");
    } else {
      setLinkPadding("py-1");
    }
  }, [windowHeight]);

  return (
    <div className={`${visibility}`}>
      <a className={`w-full  flex-col-container items-start ${linkPadding}`}>
        <div className="header--link">
          <div>
            {getIcon(type, {
              width: 26.25,
              height: 26.25,
              fill: darkMode ? "white" : "black",
            })}
          </div>
          <div className="leading-6 mr-4 ml-5 text-[20px] font-cReg">
            <span>{text}</span>
          </div>
        </div>
      </a>
    </div>
  );
};
