import React, { useState } from "react";

import ImageUploading from "react-images-uploading";
import getIcon from "../../../../UI/icons/iconsutil";
import { AddPhoto } from "../../../../AddPhoto";
import { useDispatch } from "react-redux";
import { signupSliceActions } from "../../../../../state/app/home/signupSlice";
import { userSliceActions } from "../../../../../state/user/userSlice";
import { Dialog } from "../../../../Dialog";
import { DialogLayout } from "../../../../DialogLayout";
import DialogHeader from "../../../DialogHeader";
import { DialogBody } from "../../../DialogBody";
import { DialogFooter } from "../../../DialogFooter";
import { HeaderIcon } from "../../../HeaderIcon";
import { DialogLoading } from "../../../DialogLoading";

export const UploadPicture = () => {
  const [images, setImages] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);
  const dispatch = useDispatch();
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    setProfilePicture(imageList[0].data_url);
    dispatch(userSliceActions.setProfilePicture(imageList[0].data_url));
  };
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div className="w-[210px] h-[210px] rounded-full flex-col-container relative justify-center items-center bg-white dark:bg-black">
      <div
        className=" w-[184px] h-[184px] relative rounded-full"
        style={{ clipPath: "circle(50% at 50% 50%)" }}
      >
        {!profilePicture ? (
          <div className="w-[184px] h-[184px] rounded-full bg-[#8F969B] relative flex-col-container justify-center items-center">
            <div className="flex-col-container w-[160px] absolute top-2 ">
              {getIcon("Default_Avi_Head", { fill: "#47535E" })}
            </div>
            <div className="flex-col-container absolute top-[100px] ">
              {getIcon("Default_Avi_Body", { fill: "#47535E", width: "100px" })}
            </div>
            <div className="flex ">
              <ImageUploading
                multiple
                // value={images}
                onChange={onChange}
                maxNumber={69}
                dataURLKey="data_url"
                acceptType={["jpg", "png"]}
                cd
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <>
                    <AddPhoto onClick={onImageUpload} />
                  </>
                )}
              </ImageUploading>
            </div>
          </div>
        ) : (
          <div className="w-[184px] h-[184px] rounded-full bg-[#8F969B] relative flex-col-container justify-center items-center">
            <img
              src={profilePicture}
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};
