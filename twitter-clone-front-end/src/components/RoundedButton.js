import React from "react";

const RoundedButton = ({
  style,
  mouseOverHandler,
  btnText,
  mouseLeaveHandler,
}) => {
  return (
    <a className={`${style} button--rounded`}>
      <span>{btnText}</span>
    </a>
  );
};

export default RoundedButton;
