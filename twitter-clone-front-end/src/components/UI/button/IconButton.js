import React from "react";

const IconButton = ({ onClick, buttonProps }) => {
  const defaultStyles = {
    height: 34,
    width: 34,
  };

  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = buttonProps.hoverBgColor;
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = buttonProps.bgColor;
  };
  return <div className="h-[34]"></div>;
};

export default IconButton;
