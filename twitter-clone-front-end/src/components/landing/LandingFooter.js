import React from "react";

export const LandingFooter = () => {
  const links = [
    "About",
    "Help Center",
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
    "Ads info",
    "Blog",
    "Status",
    "Careers",
    "Brand Resources",
    "Advertising",
    "Marketing",
    "X for Business",
    "Developers",
    "Directory",
    "Settings",
  ];

  return (
    <div className="flex-grow  items-center justify-center flex flex-col ">
      <nav className="flex flex-wrap items-center justify-center">
        {links.map((link) => (
          <span
            key={link}
            className="font-cReg text-[13px] leading-[16px] text-[#71767B] mr-4 cursor-pointer"
          >
            {link}
          </span>
        ))}
      </nav>
      <div className="flex items-center justify-center mt-2">
        <span className="font-cReg text-[13px] leading-[16px] text-[#536471]">
          &copy; 2023 Venka
        </span>
      </div>
    </div>
  );
};
