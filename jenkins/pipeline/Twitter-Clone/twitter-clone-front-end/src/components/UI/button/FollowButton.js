import React from "react";

const FollowButton = ({
  onClick,
  btnStyle,
  mouseOverHandler,
  btnText,
  mouseLeaveHandler,
}) => {
  return (
    <button
      className={btnStyle}
      onClick={onClick}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {btnText}
    </button>
  );
};

export default FollowButton;
