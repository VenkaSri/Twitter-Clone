import React from "react";

import ImageUploading from "react-images-uploading";
import getIcon from "../../../../UI/icons/iconsutil";

export const UploadPicture = () => {
  return (
    <div
      className=" w-[184px] h-[184px] rounded-full bg-[#8F969B] 
    border border-[red] relative flex-col-container justify-center items-center outline outline-[15px] "
    >
      <div className="flex-col-container w-[160px] absolute top-2">
        {getIcon("Default_Avi_Head", { fill: "#47535E" })}
      </div>
      <div className="flex-col-container absolute top-[96px]  ">
        {getIcon("Default_Avi_Body", { fill: "#47535E", width: "100px" })}
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
