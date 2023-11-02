import { usePostInteraction } from "@/hooks/post/usePostInteraction";
import { useGetPostByIDQuery } from "@/services/postApi";
import { RoundedIconButton } from "@components/RoundedIconButton";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const LikePostButton = ({ postId }) => {
  const { data, isSuccess } = useGetPostByIDQuery(postId);
  // const likedPosts = useSelector((state) => state.userSlice.likedPosts);

  const { handleLikePost, isActive, buttonIcon } = usePostInteraction(postId);
  const [isAnimating, setIsAnimating] = useState(false);
  const [likes, setLikes] = useState(false);

  const handleClick = (postId, e) => {
    setIsAnimating(true);
    handleLikePost(postId, e);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    if (isSuccess && data.likes > 0) setLikes(true);
  }, [data?.likes]);

  return (
    <>
      <div className={"flex grow "}>
        <div
          className={clsx("flex group items-center")}
          onAnimationEnd={handleAnimationEnd}
          onClick={(e) => handleClick(postId, e)}
        >
          <div
            className={clsx("heart", isAnimating ? "is_animating" : "")}
          ></div>
          {/* <RoundedIconButton
            className={clsx(
              "w-[34.5px] h-[34.5px]  rounded-full hover:bg-[#f91881]/[0.1] hover:fill-[#f91881] -ml-[8px] group-hover:bg-[#f91881]/[0.1] group-hover:fill-[#f91881]",
              { "fill-[#f91881]": isActive }
            )}
            icon={buttonIcon}
          /> */}
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
      </div>
    </>
  );
};
