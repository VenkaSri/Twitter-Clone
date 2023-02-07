import React, { useContext } from "react";

import SVG from "../../../components/UI/app/SVG";
import FormModalContext from "../../../context/modals/form-modal-context";
import { CLOSE, LOGO } from "../../../utils/ButtonLinkObjects";
import { google, apple } from "../../../utils/SignInButtonObjects";
import SignInButton from "../../../components/UI/explore/sign-in-links/SignInButton";
import { APPLE } from "../../../utils/ButtonLinkObjects";

const SignUpHome = () => {
  const ctx = useContext(FormModalContext);

  return (
    <>
      <div className="ml-4 mr-4 mt-2 flex gap-[230px] items-center bg-[#fff] sticky top-0">
        <button
          onClick={ctx.onClose}
          className="hover:bg-[#E6E7E7] w-[2.125rem] h-[2.125rem] flex items-center justify-center rounded-full cursor-pointer"
        >
          <div className="w-[1.25rem] h-[1.25rem]">
            <SVG svgPath={CLOSE} />
          </div>
        </button>
        <div className="w-8 h-[3.313rem] fill-[#1D9BF0] flex items-center">
          <SVG svgPath={LOGO} />
        </div>
      </div>
      <div className="w-[22.75rem] h-[26.5rem] self-center flex justify-center mt-4">
        <div className="flex flex-col items-center">
          <h1 className="font-cBold text-3xl">Join Twitter today</h1>
          <div className="mt-[2rem] flex flex-col gap-[1.563rem]">
            <SignInButton>
              <div className="w-[1.25rem]">
                <svg viewBox="0 0 48 48">
                  <g>
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </g>
                </svg>
              </div>
              <div>
                <p className="font-cBold">Sign up with Google</p>
              </div>
            </SignInButton>
            <SignInButton>
              <div className="w-[1.25rem]">
                <SVG svgPath={APPLE} />
              </div>
              <div>
                <p className="font-cBold">Sign up with Apple</p>
              </div>
            </SignInButton>
            <SignInButton>
              <div>
                <p className="font-cBold">Create a demo account</p>
              </div>
            </SignInButton>
          </div>
          <div className="w-[18.75rem] h-[2.4rem] flex items-center justify-center pl-2 pr-2">
            <div className="h-[0.063rem] grow bg-[#CFD9DE]"></div>
            <span className="ml-2 mr-2 font-cReg text-lg">or</span>
            <div className="h-[0.063rem]  grow bg-[#CFD9DE]"></div>
          </div>
          <SignInButton>
            <div>
              <p className="font-cBold">Create account</p>
            </div>
          </SignInButton>
          <div className="ml-4 mt-4 w-[18.75rem] h-[2.4rem]">
            <p className="text-[0.83rem] font-cReg text-gray-900">
              By signing up, you agree to the{" "}
              <span className="text-[#1D9BF0]">Terms of Service</span> and{" "}
              <span className="text-[#1D9BF0]">Privacy Policy</span>, including{" "}
              <span className="text-[#1D9BF0]">Cookie Use.</span>
            </p>
          </div>
          <div className="ml-4 mt-auto w-[18.75rem] h-[2.4rem]">
            <p className="text-[1rem] font-cReg text-slate-600">
              Have an account already?{" "}
              <span className="text-[#1D9BF0]">Log in</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpHome;
