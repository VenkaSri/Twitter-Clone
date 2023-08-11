import React from "react";

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
        height: `${buttonProps.height}px`,
        width: `${buttonProps.width}px`,
        backgroundColor: buttonProps.bgColor,
        display: buttonProps.display,
        color: buttonProps.txtColor,
        border: `1px solid ${buttonProps.brdColor}`,
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
      {buttonProps.text}
    </button>
  );
};

export default Button;
