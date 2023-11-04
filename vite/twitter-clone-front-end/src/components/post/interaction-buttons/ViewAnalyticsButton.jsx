import { RoundedIconButton } from "@/components/RoundedIconButton";
import { Analytics } from "@/components/icons/Icons";
import { usePopover } from "@/hooks/post/usePopover";
import clsx from "clsx";
import { useState } from "react";

export const ViewAnalyticsButton = ({ postId }) => {
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
