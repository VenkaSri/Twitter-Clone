import React, { useContext } from "react";
import FormModalContext from "../../context/modals/form-modal-context";

import FooterButton from "../UI/footer/FooterButton";

const LogIn = {
  width: "4.75rem",
  text: "Log in",
  bgColor: "transparent",
  textColor: "white",
  callFucn: () => {
    console.log("hello");
  },
};

const SignUp = {
  width: "5.405rem",
  text: "Sign up",
  bgColor: "white",
  textColor: "black",
  someFun: function () {
    alert("fsda");
  },
};

const LandingFooter = () => {
  return (
    <div className="h-[4.5rem] w-screen bg-[#1D9BF0] flex justify-center items-center absolute bottom-0">
      <div className="flex w-[61.875rem] h-[3rem] justify-between ml-56">
        <div className="text-white self-center">
          <p className="text-2xl font-cBold">
            Don&rsquo;t miss what&rsquo;s happening
          </p>
          <p className="font-cLight text-[0.938rem]">
            People on Twitter are the first to know.
          </p>
        </div>
        <div className="self-center flex gap-4">
          <FooterButton buttonInfo={LogIn} />
          <FooterButton buttonInfo={SignUp} />
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
