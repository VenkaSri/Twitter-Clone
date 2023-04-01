import React from "react";
import { Link } from "react-router-dom";

const FooterButton = (props) => {
  return (
    <>
      <Link
        to={"/i/flow/signup"}
        className={`h-9 border border-[#DCEBF4] rounded-full flex items-center justify-center`}
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
      </Link>
    </>
  );
};

export default FooterButton;
