import React from "react";


const FooterButton = (props) => {
  return (
    <>
      <div className={`h-9 border border-[#DCEBF4] rounded-full flex items-center justify-center`}
      style={{width:props.buttonInfo.width, backgroundColor:props.buttonInfo.bgColor}}>
        <div>
          <p className={`font-cBold`} style={{color:props.buttonInfo.textColor}}>{props.buttonInfo.text}</p>
        </div>
      </div>
    </>
  );
};

export default FooterButton;
