import React, { useState } from "react";

const ReplyCount = (props) => {
  return (
    <div>
      {props.hover && (
        <span className={`text-sm font-custom2 text-[#1d9bf0]`}>
          23
        </span>
      )}
      {!props.hover && (
        <span className={`text-sm font-custom2`}>
          23
        </span>
      )}
    </div>
  );
};

export default ReplyCount;
