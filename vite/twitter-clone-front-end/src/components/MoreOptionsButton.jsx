import { Ellipsis } from "./icons/Icons";

export const MoreOptionsButton = ({ className }) => {
  return (
    <div className="btn--more group">
      <Ellipsis className="group-hover:fill-primary dark:fill-[#71767b] fill-[#536471]" />
    </div>
  );
};
