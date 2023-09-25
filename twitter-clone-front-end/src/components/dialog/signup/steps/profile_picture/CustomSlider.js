import React, { useState } from "react";

import { Slider } from "@mui/material";
import { Stack } from "@mui/system";
import getIcon from "../../../../../utils/icons/iconsutil";
//https://codesandbox.io/s/942p9w?file=/Demo.tsx
export const CustomSlider = ({ onScaleChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update the state with new value
    onScaleChange(newValue);
  };
  return (
    <div className="grow  flex justify-center items-center w-full">
      <div className="mr-3">
        {getIcon("Zoom Out", { fill: "#47535E", width: "18px" })}
      </div>

      <Slider
        disabled
        aria-label="Scale"
        value={value}
        onChange={handleChange}
        step={0.1}
        min={0.5}
        max={3}
        sx={{
          "& .MuiSlider-thumb": {
            width: "16px",
            height: "16px",
          },
          "& .MuiSlider-rail": {
            height: "4px",
          },
          "& .MuiSlider-track": {
            height: "0px",
          },

          height: "20px",
          padding: 0,
          color: "#1e9bf0",
        }}
      />
      <div className="ml-3">
        {getIcon("Zoom In", { fill: "#47535E", width: "18px" })}
      </div>
    </div>
  );
};
