import React from "react";
import { CustomSlider } from "./CustomSlider";

export const ScaleImage = () => {
  return (
    <>
      <div className="min-h-[20px] py-1 w-full flex-col-container items-center justify-center">
        <div className="max-w-[400px] h-[40px] px-5 flex-col-container justify-center grow w-full ">
          <CustomSlider />
        </div>
      </div>
    </>
  );
};
