import clsx from "clsx";
import { RoundedIconButton } from "../RoundedIconButton";
import { Reply, Repost, Like, Bookmark, Share } from "../icons/icons";

export const PostActions = () => {
  const icons = [
    {
      Component: Reply,
      className: "hover:bg-[#1d9cf0]/[0.1] hover:fill-[var(--primary-color)]",
    },
    {
      Component: Repost,
      className: "hover:bg-[#00ba7c]/[0.1] hover:fill-[#00ba7c]",
    },
    {
      Component: Like,
      className: "hover:bg-[#f91881]/[0.1] hover:fill-[#f91881]",
    },
    {
      Component: Bookmark,
      className: "hover:bg-[#1d9cf0]/[0.1] hover:fill-[var(--primary-color)]",
    },
    {
      Component: Share,
      className: "hover:bg-[#1d9cf0]/[0.1] hover:fill-[var(--primary-color)]",
      noFlex: true,
    },
  ];

  return (
    <>
      {icons.map(({ Component, className, noFlex }, index) => {
        return (
          <div key={index} className={noFlex ? "" : "flex flex-1"}>
            <RoundedIconButton
              className={clsx(
                "w-[38.5px] h-[38.5px] centered-column-container rounded-full " +
                  className
              )}
              icon={<Component className={"w-[22.75px] h-[18.75px]"} />}
            />
          </div>
        );
      })}
    </>
  );
};
