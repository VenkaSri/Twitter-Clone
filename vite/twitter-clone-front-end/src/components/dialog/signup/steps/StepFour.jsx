import DialogBodyHeading from "@components/dialog/body/DialogBodyHeading";
import default_profile_picture from "@assets/images/profile-pics/dialog_profile_picture.png";
import AddPhoto from "@components/dialog/AddPhoto";
import { useContext, useEffect, useState } from "react";
import RemovePhoto from "../../RemovePhoto";
import { RegisterContext } from "@/context/auth/register-context";

const StepFour = () => {
  const { profilePicture } = useContext(RegisterContext);
  const [blobSrc, setBlobSrc] = useState(profilePicture);

  useEffect(() => {
    if (profilePicture !== default_profile_picture) {
      setBlobSrc(URL.createObjectURL(profilePicture));
    }
  }, [profilePicture]);

  return (
    <>
      <DialogBodyHeading
        text="Pick a profile picture"
        subtext="Have a favourite selfie? Upload it now."
      />
      <div className="flex flex-col grow justify-center items-center">
        <div className="w-[210px] h-[210px] rounded-full flex flex-col relative justify-center items-center bg-white dark:bg-black ">
          <div
            style={{
              backgroundImage: `url('${blobSrc}')`,
            }}
            className={`bg-cover bg-no-repeat bg-center rounded-full relative`}
          >
            <img
              src={default_profile_picture}
              draggable={false}
              className="opacity-0"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex grow">
              <AddPhoto />
              {profilePicture !== default_profile_picture && <RemovePhoto />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFour;
