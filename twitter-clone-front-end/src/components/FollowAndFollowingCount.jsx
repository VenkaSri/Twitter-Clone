import clsx from "clsx";
import PropTypes from "prop-types";

export const FollowAndFollowingCount = ({
  className,
  following,
  followers,
}) => {
  return (
    <>
      <div
        className={clsx("flex text-[14px] font-cR cursor-pointer ", className)}
      >
        <div className="mr-5 ">
          <a className="hover:underline decoration-white">
            <span className="dark:text-white">{following}</span>
            <span>&nbsp;Following</span>
          </a>
        </div>
        <div>
          <a className="hover:underline decoration-white">
            <span className="dark:text-white">{followers}</span>
            <span>&nbsp;Followers</span>
          </a>
        </div>
      </div>
    </>
  );
};

FollowAndFollowingCount.propTypes = {
  className: PropTypes.string,
  following: PropTypes.number,
  followers: PropTypes.number,
};
