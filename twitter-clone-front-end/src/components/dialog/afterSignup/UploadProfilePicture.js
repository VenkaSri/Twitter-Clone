import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import DEFAULT_PROFILE_PICTURE from "../../../assets/images/avatars/default_avi.png";
import getIcon from "../../UI/icons/iconsutil";
import { useDispatch, useSelector } from "react-redux";
import { stepsActions } from "../../../state/auth/form/steps-reducer";
import { userInfoActions } from "../../../state/user/userInfo-reducer";
export const UploadProfilePicture = () => {
  const [images, setImages] = React.useState([]);
  const [avaURL, setAvaURL] = useState(null);
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );

  const currentProfilePicture = useSelector(
    (state) => state.rootReducer.userInfo.currentProfilePicture
  );
  const dispatch = useDispatch();
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit

    setAvaURL(imageList[0].data_url);
    setImages(imageList);
    dispatch(userInfoActions.setCurrentProfilePicture(imageList[0].data_url));
    if (imageList.length > 0) {
      dispatch(stepsActions.setCurrentStep(currentStep + 0.5));
    }
  };
  return (
    <div className="flex-col-container ">
      <div className="flex-col-container justify-center">
        <div className=" w-[184px] h-[184px] rounded-full bg-[#8F969B]">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={69}
            dataURLKey="data_url"
            acceptType={["jpg", "png"]}
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
              <div>
                <div onClick={onImageUpload}>
                  {getIcon("Default_Avi_Head", { fill: "#47535E" })}
                </div>
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
    </div>
  );
};
