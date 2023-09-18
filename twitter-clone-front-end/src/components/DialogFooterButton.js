import React from "react";

export const DialogFooterButton = ({
  onClick,
  text,
  className,
  disabled,
  styles,
}) => {
  return (
    <button
      className={`${className} footer--button`}
      onClick={onClick}
      disabled={disabled}
      style={styles}
    >
      {text}
    </button>
  );
};
