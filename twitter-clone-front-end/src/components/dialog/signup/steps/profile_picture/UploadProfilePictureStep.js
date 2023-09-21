import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import getIcon from "../../../../UI/icons/iconsutil";
import { useDispatch, useSelector } from "react-redux";
import { stepsActions } from "../../../../../state/auth/form/steps-reducer";
import { userInfoActions } from "../../../../../state/user/userInfo-reducer";
import { DialogContentHeading } from "../../../../DialogContentHeading";
import { UploadPicture } from "./UploadPicture";
import { DialogBodyContainer } from "../../../DialogBodyContainer";
export const UploadProfilePictureStep = () => {
  const [images, setImages] = React.useState([]);
  const [avaURL, setAvaURL] = useState(null);
  const currentStep = useSelector(
    (state) => state.rootReducer.signUp.steps.currentStep
  );

  const username = useSelector(
    (state) => state.rootReducer.userSession.username
  );

  console.log(username);

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
    <DialogBodyContainer>
      <DialogContentHeading
        text="Pick a profile picture"
        subtext="Have a favourite selfie? Upload it now."
      />
      <div className="flex-col-container grow justify-center items-center">
        <UploadPicture />
      </div>
    </DialogBodyContainer>
  );
};
