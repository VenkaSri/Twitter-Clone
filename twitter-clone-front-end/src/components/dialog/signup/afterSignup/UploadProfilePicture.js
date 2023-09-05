import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import getIcon from "../../../UI/icons/iconsutil";
import { useDispatch, useSelector } from "react-redux";
import { stepsActions } from "../../../../state/auth/form/steps-reducer";
import { userInfoActions } from "../../../../state/user/userInfo-reducer";
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
  const onChange = async (imageList, addUpdateIndex) => {
    const file = imageList[0].file;
    const blobURL = URL.createObjectURL(file);
    const formData = new FormData();

    formData.append("file", file);
    formData.append("email", "test22@gmail.com");
    const response = await fetch(
      "http://localhost:8080/api/user/profile-picture",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      // Handle successful upload
      console.log("ok");
    } else {
      // Handle error
    }

    console.log(file);
    setAvaURL(blobURL);
    console.log(blobURL);
    setImages(imageList);
    dispatch(userInfoActions.setCurrentProfilePicture(imageList[0].data_url));
    // if (imageList.length > 0) {
    //   dispatch(stepsActions.setCurrentStep(currentStep + 0.5));
    // }
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
