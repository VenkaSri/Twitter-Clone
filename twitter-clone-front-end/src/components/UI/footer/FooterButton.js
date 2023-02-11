import React, {useContext} from "react";
import { createBrowserRouter, Link } from "react-router-dom";
import FormModalContext from "../../../context/modals/form-modal-context";
import Layer from "../../main/layers/Layer";



const FooterButton = (props) => {
  const ctx = useContext(FormModalContext);

 
  return (
    <>
      <Link to={"/i/flow/signup"} className={`h-9 border border-[#DCEBF4] rounded-full flex items-center justify-center`}
      style={{width:props.buttonInfo.width, backgroundColor:props.buttonInfo.bgColor}} >
        <div>
          <p className={`font-cBold`} style={{color:props.buttonInfo.textColor}}>{props.buttonInfo.text}</p>
        </div>
      </Link>
    </>
  );
};

export default FooterButton;
