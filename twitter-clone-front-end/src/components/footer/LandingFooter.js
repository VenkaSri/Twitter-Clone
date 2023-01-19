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
    <div className="w-screen h-14.2 w-full  bg-[#1D9BF0] fixed bottom-0 z-[100] flex justify-center items-center">
      <div className="max-w-screen-2xl flex m-auto w-2/3 justify-between pl-14">
        <div className="text-white ">
          <p className="text-2xl font-cBold">Don&rsquo;t miss what&rsquo;s happening</p>
          <p className="font-cMed text-[0.938rem]">People on Twitter are the first to know.</p>
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
