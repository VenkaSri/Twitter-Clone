import React from 'react'

import { useSelector } from 'react-redux';

const UserProfileInfo = ({ name, username }) => {
  const user = useSelector((state) => state.rootReducer.userInfo);
  return (
    <div className="flex flex-col ml-4 grow-0 leading-[20px]">
          <span className="inline-block font-cBold">{name}</span>
          <span className="text-[#536471] font-cReg text-[15px]">
            @{username}
          </span>
        </div>
  )
}

export default UserProfileInfo;
