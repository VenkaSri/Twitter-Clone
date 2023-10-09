import React from "react";
import getIcon from "../../utils/icons/iconsutil";

export const MainColumnHeader = ({ onClick }) => {
  return (
    <>
      <div className="h-[53px] flex px-[16px] ">
        <div
          className={`flex items-center  w-full justify-center align-center `}
        >
          <div
            className={`min-w-[56px] min-h-[32px] self-stretch flex items-start justify-center flex-col `}
          >
            <div
              onClick={onClick}
              className="min-w-[36px] min-h-[36px] rounded-full flex flex-col cursor-pointer items-center justify-center -ml-2 dark:fill-white dark:hover:bg-[#191919] hover:bg-[#E6E7E7]"
            >
              {getIcon("Back", { width: 20 })}
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
                  <span>Post</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-grow h-full justify-center items-stretch flex-col basis-3/6"></div>
        </div>
      </div>
    </>
  );
};
