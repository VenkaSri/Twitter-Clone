import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";

export const EditMedia = () => {
  const [scale, setScale] = useState(1);
  const selectedProfilePic = useSelector(
    (state) => state.rootReducer.userSession.profilePicture
  );

  return (
    <div className="flex-col-container grow  relative overflow-hidden ">
      <div
        className="flex-col-container grow  my-[25px]   h-full w-full justify-center items-center"
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        <div
          style={{ backgroundImage: `url(${selectedProfilePic})` }}
          className="bg-cover h-full w-full absolute bottom-0 top-0 left-0 right-0 -z-1 bg-center"
        >
          <img
            src={selectedProfilePic}
            alt="profile"
            className="h-full w-full -z-1 absolute opacity-0"
          />
        </div>
        <div className="shadow-edit-media-shadow flex-col-container min-w-[499px] min-h-[499px] border-4 border-[#1D9BF0] self-center pointer-events-none z-10"></div>
      </div>
    </div>
  );
};
