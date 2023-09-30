import React from "react";
import RoundedButton from "../RoundedButton";
import getIcon from "../../utils/icons/iconsutil";
import { useMediaQuery } from "@mui/material";

export const NewPostButton = () => {
  const btnYMargin = useMediaQuery("(max-height:900px)");

  return (
    <>
      <div className={`header--button-wrapper ${btnYMargin ? "my-1" : "my-4"}`}>
        <div className="tablet:block hidden">
          <RoundedButton
            styles={"min-w-[52px] min-h-[52px] px-8 header--newPostButton"}
            btnContent="Post"
          />
        </div>
      </div>
      <div className={`centered-column-container header--button-wrapper`}>
        <div className="tablet:hidden block">
          <RoundedButton
            styles={"header--newPostButton "}
            btnContent={getIcon("Quill", { width: 24, fill: "white" })}
          />
        </div>
      </div>
    </>
  );
};
