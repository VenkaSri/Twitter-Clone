
import SVG from "../UI/app/SVG";
import { EXPLORE, SETTINGS  } from "../../utils/ButtonLinkObjects";

const Links = () => {
  return (
    <>
      <div className="w-[52px] h-[56px] my-[0.25rem]"></div>
      <a href="/#" className="group my-[0.25rem] flex items-center ">
        <div className="flex p-[0.75rem] h-[3.141rem] w-[9.942rem] rounded-full group-hover:bg-[#E6E7E7]">
          <SVG svgPath={EXPLORE}/>
          <span className="font-cReg text-[1.25rem] self-center ml-4">Explore</span>
        </div>
      </a>
      <a href="/#" className="group my-[0.25rem] flex items-center ">
        <div className="flex p-[0.75rem] h-[3.141rem] w-[9.942rem] rounded-full group-hover:bg-[#E6E7E7]">
          <SVG svgPath={SETTINGS}/>
          <span className="font-cReg text-[1.25rem] self-center ml-4">Settings</span>
        </div>
      </a>
    </>
  );
};

export default Links;
