import { Reply } from "@/components/icons/Icons";
import { RoundedIconButton } from "@components/RoundedIconButton";
import clsx from "clsx";
import { useState } from "react";

export const ReplyPostButton = ({ postId, home }) => {
  const [buttonIcon, setButtonIcon] = useState(null);

  const [isActive, setIsActive] = useState(false);
  const handleLikePost = (id, e) => {
    e.stopPropagation();
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
              " centered-column-container rounded-full hover:bg-[#1d9cf0]/[0.1] hover:fill-[var(--primary-color)] -ml-[8px] opacity-40",
              home ? "w-[34.5px] h-[34.5px]" : "w-[38.5px] h-[38.5px]"
            )}
            icon={
              <Reply
                className={clsx(
                  home ? "w-[18.75px] h-[18.75px]" : "w-[22.5px] h-[22.5px]"
                )}
              />
            }
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
