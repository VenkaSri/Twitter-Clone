import React from "react";

import logo from '../images/nottwitter.png';

const Header = () => {
  return (
    <div className="border border-blue-400 h-screen w-72 flex ">
      <div className="border border-blue-400 h-10 w-20 ml-8 mt-4 rounded-full"><img src={logo} alt="Logo" className="w-8"/></div>
    </div>
  );
};

export default Header;
