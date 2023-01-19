import React from "react";

const FooterButton = (props) => {
  return (
    <>
      <div className={`w-[${props.buttonInfo.width}] h-9 border bg-${props.buttonInfo.bgColor} border-slate-300 rounded-full flex items-center justify-center`}>
        <div>
          <p className={`font-cBold text-${props.buttonInfo.textColor}`}>{props.buttonInfo.text}</p>
        </div>
      </div>
    </>
  );
};

export default FooterButton;
