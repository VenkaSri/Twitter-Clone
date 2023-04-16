import React from "react";
import Button from "../UI/button/Button";
import { useSelector } from "react-redux";

const nextBtn = {
  height: 52,
  width: 440,
  bgColor: "#000",
  text: "Next",
  txtColor: "#FFF",
  hoverBgColor: "#272c30",
};

const StepOneFooter = () => {
  const currentStep = useSelector((state) => state.rootReducer.signUp.currentStep);
  return (
    <div className="w-full h-[6.25rem] max:h-[6.25rem] flex justify-center items-center">
      <Button buttonProps={nextBtn}/>
  </div>
  );
};

export default StepOneFooter;
