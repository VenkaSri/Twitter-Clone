import React from "react";

const ExplorePageButton = (props) => {
  return (
    <div className={`h-[3.313rem] flex flex-col`} style={{width:props.buttonObject.width}}>
      <a
        href="/"
        role="tab"
        className={`px-4 h-full flex flex-col  justify-center items-center hover:bg-[#E7E7E8]`} style={{width:props.buttonObject.width}}
      >
        <div className="relative h-full flex ">
          <span className="inline pt-4 pb-4">{props.buttonObject.text}</span>
          {/* <div className="h-[0.25rem] rounded-full bg-[#1D9BF0] inline absolute bottom-0 w-full"></div> */}
        </div>
      </a>
    </div>
  );
};

export default ExplorePageButton;
