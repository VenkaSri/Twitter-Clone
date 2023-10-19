import React, { useEffect, useState } from "react";
import RoundedButton from "../../RoundedButton";
import { Analytics, Bookmark, Like, LikeFilled } from "../../icons/icons";
import clsx from "clsx";
import { usePostInteraction } from "../../../hooks/usePostInteraction";
import { useGetPostByIDQuery } from "../../../services/post/postApi";
import { RoundedIconButton } from "../../RoundedIconButton";
import { useGetPrincipleUserDetailsQuery } from "../../../services/user/userApi";
import { useSelector } from "react-redux";

import usePopover from "../../../hooks/usePopover";

export const AnalyticsPostButton = ({ postId }) => {
  const [buttonIcon, setButtonIcon] = useState(null);
  const { handleShow, RenderPopover } = usePopover();
  const [isActive, setIsActive] = useState(false);
  const handleLikePost = (id, e) => {
    e.stopPropagation();
    handleShow(e);
  };

  return (
    <>
      <div className={"flex grow"}>
        <div
          className="flex group items-center"
          onClick={(e) => handleLikePost(postId, e)}
        >
          {" "}
          <RoundedIconButton
            className={clsx(
              "w-[34.5px] h-[34.5px] centered-column-container rounded-full hover:bg-[#1d9cf0]/[0.1] hover:fill-[var(--primary-color)] -ml-[8px] opacity-40"
            )}
            icon={<Analytics className="w-[18.75px] h-[18.75px]" />}
          />
          {/* {likes && (
          <span
            className={clsx(
              "pl-0.5 text-[13px] font-cReg group-hover:text-[red]",
              { "text-[#f91881]": isActive }
            )}
          >
            {data.likes}
          </span>
        )} */}
        </div>
      </div>
      <RenderPopover />
    </>
  );
};
