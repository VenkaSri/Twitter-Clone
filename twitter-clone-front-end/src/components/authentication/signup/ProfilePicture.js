import React from 'react'

import DEFAULT_PROFILE_PICTURE from "../../images/sign-up/twitter-avi-gender-balanced-figure.png";

const ProfilePicture = () => {
  
  return (
    <div className="h-full min-h-[440px] px-[5rem] ">
      <h1 className="font-cBold text-[2rem]">Pick a profile picture</h1>
      <p className="text-[13px] font-cLight text-[#536471] leading-none">Have a favorite selfie? Upload it now.</p>
      <div>
        <div className='w-[184px] h-[184px]'>
          <img  src={DEFAULT_PROFILE_PICTURE} className="rounded-full "/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;
