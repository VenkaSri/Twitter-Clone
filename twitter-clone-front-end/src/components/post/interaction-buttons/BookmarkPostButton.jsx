import { Bookmark } from "@/components/icons/Icons";
import { useIconSize } from "@/hooks/post/useIconSize";
import { RoundedIconButton } from "@components/RoundedIconButton";
import clsx from "clsx";
import { useState } from "react";

export const BookmarkPostButton = ({ postId }) => {
  const [buttonIcon, setButtonIcon] = useState(null);
  const { iconSvg, iconContainer } = useIconSize();
  const [isActive, setIsActive] = useState(false);
  const handleLikePost = (id, e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={"flex grow"}>
        <div
          className="flex group items-center"
          onClick={(e) => handleLikePost(postId, e)}
        >
          <RoundedIconButton
            className={clsx(
              "centered-column-container rounded-full hover:bg-[#1d9cf0]/[0.1] hover:fill-[var(--primary-color)] -ml-[8px] opacity-40 fill-[#71767b]",
              iconContainer
            )}
            icon={<Bookmark className={clsx(iconSvg)} />}
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
