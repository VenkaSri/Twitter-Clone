import React from "react";

import ImageUploading from "react-images-uploading";
import getIcon from "../../../../UI/icons/iconsutil";
import { AddPhoto } from "../../../../AddPhoto";

export const UploadPicture = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div className="w-[210px] h-[210px] rounded-full flex-col-container relative justify-center items-center bg-white dark:bg-black">
      <div
        className=" w-[184px] h-[184px] relative rounded-full"
        style={{ clipPath: "circle(50% at 50% 50%)" }}
      >
        <div className="w-[184px] h-[184px] rounded-full bg-[#8F969B] relative flex-col-container justify-center items-center">
          <div className="flex-col-container w-[160px] absolute top-2 ">
            {getIcon("Default_Avi_Head", { fill: "#47535E" })}
          </div>
          <div className="flex-col-container absolute top-[100px] ">
            {getIcon("Default_Avi_Body", { fill: "#47535E", width: "100px" })}
          </div>
          <div className="flex ">
            <AddPhoto onClick={handleClick} />
            {/* <div className="w-12 h-12 border border-[red] z-10 rounded-full"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// <ImageUploading
// multiple
// // value={images}
// // onChange={onChange}
// maxNumber={69}
// dataURLKey="data_url"
// acceptType={["jpg", "png"]}
// cd
// >
// {({
//   imageList,
//   onImageUpload,
//   onImageRemoveAll,
//   onImageUpdate,
//   onImageRemove,
//   isDragging,
//   dragProps,
// }) => (
//   // write your building UI

// )}
// </ImageUploading>
