import React from "react";
import RoundedButton from "../RoundedButton";
import getIcon from "../../utils/icons/iconsutil";
import { useMediaQuery } from "@mui/material";
import RoundedTextButton from "../RoundedTextButton";
import { NEW_POST_SUBMIT_VALUE } from "../../constants";
import { Quill } from "../icons/icons";
import { RoundedIconButton } from "../RoundedIconButton";
import clsx from "clsx";

export const NewPostButton = () => {
  const btnYMargin = useMediaQuery("(max-height:900px)");

  return (
    <>
      <div
        className={`header--button-wrapper shadow-nav-post-button-shadow overflow-hidden rounded-full ${
          btnYMargin ? "my-1" : "my-4"
        }`}
      >
        <div className="tablet:block hidden">
          <RoundedTextButton
            text={NEW_POST_SUBMIT_VALUE}
            className="header--newPostButton"
          />
        </div>
      </div>
      <div className={`centered-column-container header--button-wrapper`}>
        <div className="tablet:hidden block">
          <RoundedIconButton
            className={clsx("header--newPostButton button--rounded")}
            icon={<Quill className="w-6 fill-white" />}
          />
        </div>
      </div>
    </>
  );
};
