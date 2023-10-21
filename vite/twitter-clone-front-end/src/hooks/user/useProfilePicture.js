import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import default_profile_picture from "@assets/images/profile-pics/default_light.png";

export const useProfilePicture = (src) => {
  const [cachedImage, setCachedImage] = useState(null);
  const principalUserPicture = useSelector(
    (state) => state.userSlice.profilePicture
  );

  useEffect(() => {
    if (src === null) {
      setCachedImage(default_profile_picture);
      return;
    }

    const fetchImage = async () => {
      try {
        const response = await fetch(src, {
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
  }, [principalUserPicture, src]);

  return cachedImage;
};
