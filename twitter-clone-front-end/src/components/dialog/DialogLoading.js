import React from "react";
import { Oval } from "react-loader-spinner";

export const DialogLoading = () => {
  return (
    <div className="flex-col-container grow">
      <div className="grow flex-col-container items-center justify-center">
        <Oval
          height={30}
          width={30}
          color="#1d9bf0"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#1d9bf0"
          strokeWidth={5}
          strokeWidthSecondary={2}
        />
      </div>
    </div>
  );
};
