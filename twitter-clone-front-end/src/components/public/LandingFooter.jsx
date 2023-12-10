import { GitHub } from "../icons/Icons";

export const LandingFooter = () => {
  const date = new Date();
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
          &copy;&nbsp;{date.getFullYear()} Venka
        </span>
      </div>
      <a
        className="ml-0.5"
        href="https://github.com/VenkaSri/Twitter-Clone/tree/main/twitter-clone-front-end"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub />
      </a>
    </div>
  );
};
