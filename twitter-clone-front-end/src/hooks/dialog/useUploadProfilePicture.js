import { RegisterContext } from "@context/auth/register-context";
import { DialogContext } from "@context/dialog/dialog-context";
import { useUploadProfilePictureMutation } from "@/services/userApi";
import { useContext, useEffect } from "react";

export const useUploadProfilePicture = () => {
  const { setHasError } = useContext(DialogContext);
  const [uploadProfilePicture, { isSuccess, isLoading }] =
    useUploadProfilePictureMutation();
  const { profilePicture, setIsLoading } = useContext(RegisterContext);

  const handleProfilePictureUpload = async () => {
    const formData = new FormData();
    formData.append("file", profilePicture);
    try {
      const response = await uploadProfilePicture(formData);
      console.log(response);
      setHasError(true);
      return response;
    } catch (error) {
      console.log("An error occurred", error);
    }
  };

  useEffect(() => {
    if (isLoading) {
      setIsLoading(true);
    } else if (isSuccess) {
      setIsLoading(false);
    }
  }, [isLoading, isSuccess, setIsLoading]);

  return {
    handleProfilePictureUpload,
  };
};
