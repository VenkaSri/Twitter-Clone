import React from "react";

export const DialogFooterButton = ({ onClick, text, className, disabled }) => {
  return (
    <button
      className={`${className} flex-col-container min-h-[52px] my-6 min-w-[52px] rounded-full text-[17px] items-center justify-center `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
