import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";

export const CropProfilePicture = () => {
  const [scale, setScale] = useState(1);
  const currentProfilePicture = useSelector(
    (state) => state.rootReducer.userInfo.currentProfilePicture
  );
  const handleScaleChange = (newScale) => {
    setScale(newScale);
  };
  const [isDraggable, setIsDraggable] = useState(false);
  console.log(currentProfilePicture);

  return (
    <div className="flex-col-container grow w-full">
      <div className="flex-col-container relative border border-[red]">
        <Draggable>
          <img
            alt="profile "
            draggable="false"
            src={currentProfilePicture}
            className="w-full absolute"
            style={{
              transform: `scale(${scale})`,
              cursor: isDraggable ? "grab" : "pointer",
            }}
          />
        </Draggable>
        <div className="w-[499px] h-[499px] border-4 border-[#1D9BF0] absolute self-center pointer-events-none"></div>
      </div>
    </div>
  );
};
