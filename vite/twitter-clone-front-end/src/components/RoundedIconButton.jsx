import clsx from "clsx";
import PropTypes from "prop-types";

export const RoundedIconButton = ({ className, icon, onClick }) => {
  return (
    <div
      className={clsx(className, "btn--roundedIcon")}
      role="button"
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

RoundedIconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
};
