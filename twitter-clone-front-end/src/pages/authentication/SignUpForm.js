import React, {useContext} from "react";

import SVG from "../../components/UI/app/SVG";
import FormModalContext from "../../context/modals/form-modal-context";
import { CLOSE, LOGO } from "../../utils/ButtonLinkObjects";

const SignUpForm = () => {
  const ctx = useContext(FormModalContext);
  return (
    <div className="ml-4 mr-4 mt-2 flex gap-[230px] items-center">
      <button  onClick={ctx.onClose} className="hover:bg-[#E6E7E7] w-[2.125rem] h-[2.125rem] flex items-center justify-center rounded-full cursor-pointer">
        <div className="w-[1.25rem] h-[1.25rem]">
          <SVG svgPath={CLOSE} />
        </div>
      </button>
      <div className="w-8 h-[3.313rem] fill-[#1D9BF0] flex items-center">
        <SVG svgPath={LOGO} />
      </div>
    </div>
  );
};

export default SignUpForm;
