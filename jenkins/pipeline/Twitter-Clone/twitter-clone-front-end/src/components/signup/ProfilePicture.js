import React, { useState } from 'react'

import DEFAULT_PROFILE_PICTURE from "../../assets/images/avatars/default_avi.png";
import SVG from '../UI/app/SVG';
import ImageUploading from 'react-images-uploading';

const ProfilePicture = () => {
  const [images, setImages] = React.useState([]);
  const [avaURL, setAvaURL] = useState(null);
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setAvaURL(imageList[0].data_url);
    setImages(imageList);
  };

  
  return (
    <div className="h-full min-h-[440px] px-[5rem] ">
      <h1 className="font-cBold text-[2rem]">Pick a profile picture</h1>
      <p className="text-[13px] font-cLight text-[#536471] leading-none">Have a favorite selfie? Upload it now.</p>
      <div className='w-full h-[330px] flex justify-center items-center'>
        
        <div className='w-[184px] h-[184px] absolute'>
          {/* <img  src={DEFAULT_PROFILE_PICTURE} className="rounded-full "/> */}
        </div>
        <div className='w-[25px] h-[25px] z-20'>
        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={69}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div onClick={onImageUpload}><img  src={DEFAULT_PROFILE_PICTURE} className="rounded-full "/></div>
        )}
      </ImageUploading></div>
      <img src={avaURL} />
      </div>
    </div>
  );
}

export default ProfilePicture;
