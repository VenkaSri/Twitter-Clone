import React, { useState } from "react";
import LandingFooter from "../../footer/LandingFooter";
import SignUpForm from "./landing/SignUpForm";



const Layer = () => {


  return (
    <div className="relative flex flex-col justify-center grow">
      <SignUpForm />
      <LandingFooter />
    </div>
  );
};

export default Layer;
