import React from "react";
import { Link } from "react-router-dom"; 


const FooterLinks = () => {
  return (
    <div className="h-[3.75rem] w-[18.75rem] flex flex-col ml-4 mt-4">
      <div className="text-[0.800rem] font-cLight text-[#5D6D79] gap-x-[0.938rem] flex flex-wrap">
        <Link to="/Twitter-Clone/#">Terms of Service</Link>
        <Link to="/#">Privacy Policy</Link>
        <Link to="/#">Cookie Policy</Link>
        <Link to="/#">Accessibility</Link>
        <Link to="/#">Ads info</Link>
        <Link to="/#">More ···</Link>
        <a href="https://github.com/VenkaSri/Twitter-Clone" target="_blank" rel="noreferrer">Repo</a>
        <Link to="/#">© 2023 Venka</Link>
        
      </div>
    </div>
  );
};

export default FooterLinks;
