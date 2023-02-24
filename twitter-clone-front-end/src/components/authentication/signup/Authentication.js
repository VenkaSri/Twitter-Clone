import React, { useRef } from "react";

import SVG from "../../../components/UI/app/SVG";
import { CLOSE, LOGO } from "../../../utils/ButtonLinkObjects";
import { Link } from "react-router-dom";

const Authentication = () => {
  const captchaRef = useRef(null);


  return (
    <>
      <div className="ml-4 mr-4 mt-2 flex gap-[230px] items-center bg-[#fff] sticky top-0">
        <Link
          role="button"
          to={"/"}
          className="hover:bg-[#E6E7E7] w-[2.125rem] h-[2.125rem] flex items-center justify-center rounded-full cursor-pointer"
        >
          <div className="w-[1.25rem] h-[1.25rem]">
            <SVG svgPath={CLOSE} />
          </div>
        </Link>
        <div className="w-8 h-[3.313rem] fill-[#1D9BF0] flex items-center">
          <SVG svgPath={LOGO} />
        </div>
      </div>
      <div className="w-[34.875rem] h-[27.5rem] self-center flex flex-col items-center mt-8 px-[1.5rem]">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="input" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Authentication;
