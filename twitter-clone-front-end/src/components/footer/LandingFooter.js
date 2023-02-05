import React from "react";

import FooterButton from "../UI/footer/FooterButton";

const LogIn = {
  width: '4.75rem',
  text: 'Log in',
  bgColor: 'transparent',
  textColor: 'white'
}

const SignUp = {
  width: '5.405rem',
  text: 'Sign up',
  bgColor: 'white',
  textColor: 'black'

}

const LandingFooter = () => {
  return (
    <div className="h-[4.5rem] bg-[#1D9BF0] z-[100] flex justify-center items-center">
      <div className="flex w-[61.875rem] h-[3rem] justify-between ml-56">
        <div className="text-white self-center">
          <p className="text-2xl font-cBold">Don&rsquo;t miss what&rsquo;s happening</p>
          <p className="font-cLight text-[0.938rem]">People on Twitter are the first to know.</p>
        </div>
        <div className="self-center flex gap-4">
          <FooterButton buttonInfo={LogIn}/>
          <FooterButton buttonInfo={SignUp}/>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
