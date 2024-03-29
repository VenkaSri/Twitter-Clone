import { Repost } from "@/components/icons/Icons";
import { useIconSize } from "@/hooks/post/useIconSize";
import { RoundedIconButton } from "@components/RoundedIconButton";
import clsx from "clsx";
import { useState } from "react";

export const RepostPostButton = ({ postId }) => {
  const [buttonIcon, setButtonIcon] = useState(null);
  const { iconSvg, iconContainer } = useIconSize();
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
              "centered-column-container rounded-full hover:bg-[#00ba7c]/[0.1] hover:fill-[#00ba7c] -ml-[8px] opacity-40 fill-[#71767b]",
              iconContainer
            )}
            icon={<Repost className={clsx(iconSvg)} />}
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
