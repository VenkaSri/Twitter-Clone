import React from "react";
import IconButton from "./IconButton";
import getIcon from "../icons/iconsutil";

const Button = ({ onClick, buttonProps }) => {
  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = buttonProps.hoverBgColor;
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = buttonProps.bgColor;
  };
  return (
    <button
      style={{
        width: buttonProps.width,
        height: buttonProps.height,
        backgroundColor: buttonProps.bgColor,
        fontSize: "14px",
        display: buttonProps.display || "inline-flex",
        color: buttonProps.txtColor,
        border: `1px solid ${buttonProps.brdColor}` || "none",
        "&:hover": {
          backgroundColor: buttonProps.hoverBgColor,
        },
      }}
      className={`flex justify-center items-center font-cBold rounded-full`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={buttonProps.disabled}
    >
      <div
        className={`px-[${buttonProps.paddingX}]  flex items-center rounded-full`}
      >
        {buttonProps.iconPosition === "start" &&
          buttonProps.icon &&
          getIcon(buttonProps.type, {
            fill: "#1d9bf0",
            margin: buttonProps.margin,
          })}
        {buttonProps.text}
        {(buttonProps.iconPosition === "end" || !buttonProps.iconPosition) &&
          buttonProps.icon &&
          getIcon(buttonProps.type, {
            fill: "#1d9bf0",
            margin: buttonProps.margin,
          })}
      </div>
    </button>
  );
};

export default Button;
