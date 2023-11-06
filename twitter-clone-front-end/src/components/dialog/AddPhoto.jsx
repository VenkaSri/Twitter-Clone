import { RegisterContext } from "@/context/auth/register-context";
import { Camera } from "@components/icons/Icons";
import { useContext, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const AddPhoto = () => {
  const { getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
  });
  const { setProfilePicture } = useContext(RegisterContext);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setProfilePicture(acceptedFiles[0]);
    }
  }, [acceptedFiles, setProfilePicture]);

  return (
    <div
      className={`w-[44px] h-[44px] z-10 rounded-full bg-[#0f1419] bg-opacity-75  hover:bg-[#272c30] hover:bg-opacity-75 cursor-pointer flex justify-center items-center`}
      onClick={open}
    >
      <input {...getInputProps()} />
      <div className="w-[20px]">
        <Camera className="fill-white " />
      </div>
    </div>
  );
};

export default AddPhoto;
