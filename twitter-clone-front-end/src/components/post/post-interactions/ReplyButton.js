import React, { useEffect, useState } from "react";
import RoundedButton from "../../RoundedButton";
import { Like, LikeFilled } from "../../icons/icons";
import clsx from "clsx";
import { usePostInteraction } from "../../../hooks/usePostInteraction";
import { useGetPostByIDQuery } from "../../../services/post/postApi";
import { RoundedIconButton } from "../../RoundedIconButton";
import { useGetPrincipleUserDetailsQuery } from "../../../services/user/userApi";
import { useSelector } from "react-redux";

export const LikeButton = ({ postId }) => {
  const { data, isSuccess } = useGetPostByIDQuery(postId);
  const likedPosts = useSelector(
    (state) => state.rootReducer.userSession.likedPosts
  );

  const { handleLikePost, isActive, buttonIcon } = usePostInteraction(postId);

  const [likes, setLikes] = useState(false);

  useEffect(() => {
    if (isSuccess && data.likes > 0) setLikes(true);
  }, [data?.likes]);

  return (
    <>
      <div
        className={"flex  flex-1 group items-center"}
        onClick={() => handleLikePost(postId)}
      >
        <RoundedIconButton
          className={clsx(
            "w-[34.5px] h-[34.5px] centered-column-container rounded-full hover:bg-[#f91881]/[0.1] hover:fill-[#f91881] -ml-[8px] group-hover:bg-[#f91881]/[0.1] group-hover:fill-[#f91881]",
            { "fill-[#f91881]": isActive }
          )}
          icon={buttonIcon}
        />
        {likes && (
          <span
            className={clsx(
              "pl-0.5 text-[13px] font-cReg group-hover:text-[red]",
              { "text-[#f91881]": isActive }
            )}
          >
            {data.likes}
          </span>
        )}
      </div>
    </>
  );
};
