import clsx from "clsx";
import React from "react";

const RoundedTextButton = ({ className, text, isDisabled, onClick }) => {
  return (
    <a
      className={clsx(className, "button--rounded ", {
        "pointer-events-none opacity-50": isDisabled,
      })}
      href="#f"
      role="button"
      onClick={onClick}
    >
      <div className="flex text-white">{text}</div>
    </a>
  );
};

export default RoundedTextButton;
