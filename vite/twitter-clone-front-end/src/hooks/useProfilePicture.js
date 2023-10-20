import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useProfilePicture = () => {
  const [cachedImage, setCachedImage] = useState(null);
  const principalUserPicture = useSelector(
    (state) => state.userSlice.profilePicture
  );

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(principalUserPicture, {
          headers: {},
        });
        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob);
          setCachedImage(imageUrl);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchImage();
  }, [principalUserPicture]);

  return cachedImage;
};
