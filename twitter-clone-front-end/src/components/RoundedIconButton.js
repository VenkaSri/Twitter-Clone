import React from "react";
import PropTypes from "prop-types";

export const RoundedIconButton = ({ className, icon, onClick }) => {
  return (
    <div className={className + ""} role="button" onClick={onClick}>
      {icon}
    </div>
  );
};

RoundedIconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
};

RoundedIconButton.defaultProps = {
  className: "",
  icon: null,
};
