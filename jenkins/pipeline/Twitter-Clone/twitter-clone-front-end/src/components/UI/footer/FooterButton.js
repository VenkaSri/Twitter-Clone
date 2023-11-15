import React from "react";
import { Link } from "react-router-dom";

const FooterButton = (props) => {
  return (
    <button onClick={props.onClick} className={`h-9 border border-[#DCEBF4] rounded-full flex items-center justify-center`}
        style={{
          width: props.buttonInfo.width,
          backgroundColor: props.buttonInfo.bgColor,
        }}
      >
    <div>
          <p
            className={`font-cBold`}
            style={{ color: props.buttonInfo.textColor }}
          >
            {props.buttonInfo.text}
          </p>
        </div>
    </button>

  );
};

export default FooterButton;
