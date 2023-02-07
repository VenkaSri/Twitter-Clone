import React, {useContext} from "react";
import FormModalContext from "../../../context/modals/form-modal-context";


const FooterButton = (props) => {
  const ctx = useContext(FormModalContext);

 
  return (
    <>
      <button onClick={ctx.onClick} className={`h-9 border border-[#DCEBF4] rounded-full flex items-center justify-center`}
      style={{width:props.buttonInfo.width, backgroundColor:props.buttonInfo.bgColor}} >
        <div>
          <p className={`font-cBold`} style={{color:props.buttonInfo.textColor}}>{props.buttonInfo.text}</p>
        </div>
      </button>
    </>
  );
};

export default FooterButton;
