import React, { useEffect, useState } from "react";
import RoundedButton from "../../RoundedButton";
import { Like, LikeFilled, Repost } from "../../icons/icons";
import clsx from "clsx";
import { usePostInteraction } from "../../../hooks/usePostInteraction";
import { useGetPostByIDQuery } from "../../../services/post/postApi";
import { RoundedIconButton } from "../../RoundedIconButton";
import { useGetPrincipleUserDetailsQuery } from "../../../services/user/userApi";
import { useSelector } from "react-redux";

export const RepostPostButton = ({ postId }) => {
  const [buttonIcon, setButtonIcon] = useState(null);

  const [isActive, setIsActive] = useState(false);
  const handleLikePost = (id, e) => {
    e.stopPropagation();
    console.log(id);
    console.log("hi");
  };

  return (
    <>
      <div className={"flex grow "}>
        <div
          className={"flex group items-center "}
          onClick={(e) => handleLikePost(postId, e)}
        >
          <RoundedIconButton
            className={clsx(
              "w-[34.5px] h-[34.5px] centered-column-container rounded-full hover:bg-[#00ba7c]/[0.1] hover:fill-[#00ba7c] -ml-[8px] opacity-40"
            )}
            icon={<Repost className="w-[18.75px] h-[18.75px]" />}
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
    </>
  );
};
