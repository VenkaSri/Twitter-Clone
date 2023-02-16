import React from 'react'

import SVG from "../../../components/UI/app/SVG";
import { CLOSE, LOGO } from "../../../utils/ButtonLinkObjects";
import authenticate from "../../images/authentication/authenticate.png";
import { Link } from "react-router-dom";

const AuthenticateHome = () => {
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
        <img src={authenticate} className="w-[110px] mt-[3.188rem] mb-[1.594rem]" alt='sheild icon'></img>
        <h2 className="font-cBold text-3xl mt-[1.5rem]">Authenticate your account</h2>
        <p className='mt-[1.594rem] font-cThin text-md'>We need to make sure that you're a real person.</p>
        <div className="w-[30.281rem] flex  mt-[1.913rem] grow">
          <button className="h-[2.75rem] text-white bg-[#000] rounded-full hover:bg-[#272C30] flex items-center justify-center grow">
            <div>
              <p className="font-cBold">Authenticate</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default AuthenticateHome;
