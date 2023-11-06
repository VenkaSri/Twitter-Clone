import { useContext } from "react";
import { Close } from "@components/icons/Icons";
import default_profile_picture from "@assets/images/profile-pics/dialog_profile_picture.png";
import { RegisterContext } from "@/context/auth/register-context";

const RemovePhoto = () => {
  const { setProfilePicture } = useContext(RegisterContext);
  const handleRemoveCurrentImage = () => {
    setProfilePicture(default_profile_picture);
  };

  return (
    <div
      className={`w-[44px] h-[44px] z-10 rounded-full bg-[#0f1419] bg-opacity-75  hover:bg-[#272c30] hover:bg-opacity-75 cursor-pointer flex justify-center items-center`}
      onClick={handleRemoveCurrentImage}
    >
      <div className="w-[20px]">
        <Close className="fill-white " />
      </div>
    </div>
  );
};

export default RemovePhoto;
