import React from "react";

export const DialogHeaderHeading = ({ heading }) => {
  console.log(heading);
  return (
    <>
      <div className="flex flex-grow h-full justify-center items-stretch flex-col">
        <div className="flex flex-col items-start shrink-0 ">
          <h2
            className={`py-0.5 leading-6 font-cMed font-bold dark:text-[#fff]
                 "text-[20px]"
            }`}
          >
            <span>{heading}</span>
          </h2>
        </div>
      </div>
    </>
  );
};
