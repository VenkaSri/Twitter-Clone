import clsx from "clsx";
import PropTypes from "prop-types";

export const RoundedIconButton = ({ className, icon, onClick, disabled }) => {
  return (
    <button
      className={clsx(className, "btn--roundedIcon")}
      role="button"
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

RoundedIconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
};
