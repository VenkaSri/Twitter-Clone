import { useNavigate } from "react-router-dom";
import { Back } from "../icons/Icons";
import PropTypes from "prop-types";

export const MainSectionHeader = ({ text, children, numberOfPosts }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sticky -top-[0.5px] bg-white/[.85] dark:bg-black/[.65] dark:bg-black z-[2]  backdrop-blur-md">
        <div className="h-[53px] flex px-[16px] ">
          <div
            className={`flex items-center  w-full justify-center align-center `}
          >
            <div
              className={`min-w-[56px] min-h-[32px] self-stretch flex items-start justify-center flex-col `}
            >
              <div
                onClick={() => navigate(-1)}
                className="min-w-[36px] min-h-[36px] rounded-full flex flex-col cursor-pointer items-center justify-center -ml-2 dark:fill-white dark:hover:bg-[#191919] hover:bg-[#E6E7E7]"
              >
                <Back className="w-[20px]" />
              </div>
            </div>
            <div className="flex h-full justify-center items-stretch flex-col ">
              <div className="flex flex-grow h-full justify-center items-stretch flex-col">
                <div className="flex flex-col items-start shrink-0 ">
                  <h2
                    className={`py-0.5 leading-6 font-cMed font-bold dark:text-[#fff]
                 text-[20px]
            }`}
                  >
                    <span>{text}</span>
                  </h2>
                  {numberOfPosts && (
                    <div className="text-[13px] font-cR text-[#536471]">
                      <span>{numberOfPosts}</span>&nbsp;posts
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-grow h-full justify-center items-stretch flex-col basis-3/6"></div>
          </div>
        </div>
        {children && children}
      </div>
    </>
  );
};

MainSectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  numberOfPosts: PropTypes.number,
};
