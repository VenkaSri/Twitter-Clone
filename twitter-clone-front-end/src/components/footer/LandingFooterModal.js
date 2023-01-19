import React from "react";
import ReactDOM from "react-dom";

import LandingFooter from "./LandingFooter";

const LandingFooterModal = () => {
  return ReactDOM.createPortal(
    <>
      <LandingFooter />
    </>,
    document.getElementById("landing-footer")
  );
};

export default LandingFooterModal;
