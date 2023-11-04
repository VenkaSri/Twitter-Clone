import { Ellipsis } from "./icons/Icons";

export const MoreOptionsButton = ({ className }) => {
  return (
    <div className="btn--more group" onClick={(e) => e.stopPropagation()}>
      <Ellipsis className="group-hover:fill-primary dark:fill-[#71767b] fill-[#536471] w-[20px]" />
    </div>
  );
};
