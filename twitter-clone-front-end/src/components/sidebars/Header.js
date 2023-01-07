import React from "react";

import logo from '../images/nottwitter.png';

const Header = () => {
  return (
    <div className="border border-blue-400 h-screen w-72">
      <ul className="flex flex-col">
        <li className="flex justify-center items-center border border-red-400 w-12 h-12 rounded-full"><img src={logo} alt="Logo" className="w-8"/></li>
        <li>Home</li>
        <li>Profile</li>
        <li>More</li>
      </ul>
    </div>
  );
};

export default Header;
