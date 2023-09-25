import React from "react";

const FollowButton = ({
  onClick,
  btnStyle,
  mouseOverHandler,
  btnText,
  mouseLeaveHandler,
}) => {
  return (
    <div
      className={`flex-col-container ${btnStyle}`}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="px-4 min-w-[32px] min-h-[32px] grid place-content-center">
        <button onClick={onClick} className="leading-[20px]">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default FollowButton;
