import React, { useEffect, useState } from "react";

import ImageUploading from "react-images-uploading";
import getIcon from "../../../../UI/icons/iconsutil";
import { AddPhoto } from "../../../../AddPhoto";
import { useDispatch, useSelector } from "react-redux";
import { userSliceActions } from "../../../../../state/user/userSlice";
import { dialogSliceActions } from "../../../../../state/dialog/dialogSlice";
import { profileSliceActions } from "../../../../../state/profile/profileSlice";
import { RemovePhoto } from "../../../../RemovePhoto";
import { signupSliceActions } from "../../../../../state/app/home/signupSlice";

export const UploadPicture = ({ source }) => {
  const [images, setImages] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);
  const dispatch = useDispatch();
  const selectedProfilePic = useSelector(
    (state) => state.rootReducer.userSession.profilePicture
  );
  const isProfilePictureSet = useSelector(
    (state) => state.rootReducer.profileSlice.didUserAddProfilePicture
  );
  const postSignUpStep = useSelector(
    (state) => state.rootReducer.signUpState.postRegisterSteps
  );
  console.log(postSignUpStep);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
    setProfilePicture(imageList[0].data_url);
    dispatch(userSliceActions.setProfilePicture(imageList[0].data_url));
    dispatch(signupSliceActions.setPostRegisterSteps(postSignUpStep + 1));
    dispatch(dialogSliceActions.setDialogContent("edit_media"));
    dispatch(profileSliceActions.setDidUserAddProfilePicture(true));
  };
  const handleRemovePhoto = () => {
    dispatch(profileSliceActions.setDidUserAddProfilePicture(false));
  };

  console.log(selectedProfilePic);

  return (
    <div className="w-[210px] h-[210px] rounded-full flex-col-container relative justify-center items-center bg-white dark:bg-black ">
      <div
        className=" w-[184px] h-[184px] relative rounded-full "
        style={{ clipPath: "circle(50% at 50% 50%)" }}
      >
        {!isProfilePictureSet ? (
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
              src={selectedProfilePic}
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute flex">
              <AddPhoto />
              <RemovePhoto onClick={handleRemovePhoto} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
