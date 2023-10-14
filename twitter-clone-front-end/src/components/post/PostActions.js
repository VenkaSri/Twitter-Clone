import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { RoundedIconButton } from "../RoundedIconButton";
import {
  Reply,
  Repost,
  Like,
  Bookmark,
  Share,
  LikeFilled,
} from "../icons/icons";
import {
  useGetPostByIDQuery,
  useLikePostMutation,
} from "../../services/post/postApi";
import { usePostInteraction } from "../../hooks/usePostInteraction";
import { useGetPrincipleUserDetailsQuery } from "../../services/user/userApi";

export const PostActions = ({ postId }) => {
  const { data, isSuccess } = useGetPostByIDQuery(postId);
  const { user } = useGetPrincipleUserDetailsQuery();
  const { likedPostsIds } = user;

  const [likePost, { isLoading, isError }] = useLikePostMutation();
  const [likes, setLikes] = useState(false);
  const { handleLikePost, isActive } = usePostInteraction();

  useEffect(() => {
    if (isSuccess && data.likes > 0) setLikes(true);
  }, [data?.likes]);

  const handleLike = () => {
    console.log("Liked");
  };

  const icons = [
    {
      Component: Reply,
      className:
        "hover:bg-[#1d9cf0]/[0.1] hover:fill-[var(--primary-color)] -ml-[8px] opacity-40",
    },
    {
      Component: Repost,
      className:
        "hover:bg-[#00ba7c]/[0.1] hover:fill-[#00ba7c] -ml-[8px] opacity-40",
    },
    {
      Component: isActive ? LikeFilled : Like,
      className: clsx(
        "hover:bg-[#f91881]/[0.1] hover:fill-[#f91881] -ml-[8px] group-hover:bg-[#f91881]/[0.1] group-hover:fill-[#f91881]",
        { "fill-[#f91881]": isActive }
      ),
      value: likes,
      action: handleLikePost,
    },
    {
      Component: Bookmark,
      className:
        "hover:bg-[#1d9cf0]/[0.1] hover:fill-[var(--primary-color)] -ml-[8px] opacity-40",
    },
    {
      Component: Share,
      className:
        "hover:bg-[#1d9cf0]/[0.1] hover:fill-[var(--primary-color)] -ml-[8px] opacity-40",
      noFlex: true,
    },
  ];

  return (
    <>
      {icons.map(({ Component, className, noFlex, value, action }, index) => {
        return (
          <React.Fragment key={index}>
            <div
              className={noFlex ? "" : "flex  flex-1 group items-center"}
              onClick={() => action(data.postId)}
            >
              <RoundedIconButton
                className={clsx(
                  "w-[34.5px] h-[34.5px] centered-column-container rounded-full " +
                    className
                )}
                icon={<Component className={"w-[18.75px] h-[18.75px]"} />}
              />
              {value && (
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
          </React.Fragment>
        );
      })}
    </>
  );
};
