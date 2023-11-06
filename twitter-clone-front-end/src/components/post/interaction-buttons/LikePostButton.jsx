import { usePostInteraction } from "@/hooks/post/usePostInteraction";
import { useGetPostByIDQuery } from "@/services/postApi";
import { RoundedIconButton } from "@components/RoundedIconButton";
import clsx from "clsx";
import { useEffect, useState } from "react";
import FlipNumbers from "react-flip-numbers";
import PropTypes from "prop-types";
import { useIconSize } from "@/hooks/post/useIconSize";

export const LikePostButton = ({ postId }) => {
  const { data, isSuccess } = useGetPostByIDQuery(postId);
  const [numOfLikes, setNumOfLikes] = useState(0);
  const { iconContainer } = useIconSize();
  const { handleLikePost, isActive, buttonIcon, handleUnlikePost } =
    usePostInteraction(postId);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (postId, e) => {
    if (isActive) {
      handleUnlikePost(postId, e);
      setNumOfLikes((prevLikes) => prevLikes - 1);
    } else {
      setIsAnimating(true);
      handleLikePost(postId, e);
      setNumOfLikes((prevLikes) => prevLikes + 1);
    }
  };
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    if (isSuccess && data.likes > 0) {
      setNumOfLikes(data.likes);
    }
  }, [data?.likes, isSuccess]);

  return (
    <>
      <div className={"flex grow "}>
        <div
          className={clsx("flex group items-center relative")}
          onAnimationEnd={handleAnimationEnd}
          onClick={(e) => handleClick(postId, e)}
        >
          <RoundedIconButton
            className={clsx(
              "rounded-full hover:bg-[#f91881]/[0.1] hover:fill-[#f91881] -ml-[8px] group-hover:bg-[#f91881]/[0.1] group-hover:fill-[#f91881]",
              { "fill-[#f91881]": isActive },
              isAnimating ? " heart is_animating" : "",
              iconContainer
            )}
            icon={buttonIcon}
          />
          {numOfLikes > 0 && (
            <span
              onAnimationEnd={handleAnimationEnd}
              className={clsx(
                "pl-0.5 text-[13px] font-cReg group-hover:text-[red]",
                { "text-[#f91881]": isActive }
              )}
            >
              <FlipNumbers
                numbers={numOfLikes.toString()}
                play
                width={14}
                height={14}
              />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

LikePostButton.propTypes = {
  postId: PropTypes.number,
};
