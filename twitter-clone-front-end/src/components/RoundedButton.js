import clsx from "clsx";
import React from "react";

const RoundedButton = ({ styles, btnContent, isDisabled, onClick }) => {
  const hasIcon = btnContent.icon;
  const iconPosition = hasIcon ? btnContent.icon.iconPosition : null;
  return (
    <a
      className={clsx(styles, "button--rounded", {
        "pointer-events-none opacity-50": isDisabled,
      })}
      href="#f"
      role="button"
      onClick={onClick}
    >
      <div className="flex">
        {hasIcon && iconPosition === "start" && (
          <div className="mr-1 flex items-center justify-center ">
            {btnContent.icon.icon}
          </div>
        )}
        {btnContent.text}
        {hasIcon && iconPosition === "end" && (
          <div className="mr-1 flex items-center justify-center ">
            {btnContent.icon.icon}
          </div>
        )}
      </div>
    </a>
  );
};

export default RoundedButton;
