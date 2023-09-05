import React, { useState } from "react";

import { Slider } from "@mui/material";
import { Stack } from "@mui/system";
//https://codesandbox.io/s/942p9w?file=/Demo.tsx
export const CustomSlider = ({ onScaleChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update the state with new value
    onScaleChange(newValue);
  };
  return (
    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
      <Slider
        aria-label="Scale"
        value={value}
        onChange={handleChange}
        step={0.1}
        min={0.5}
        max={3}
      />
    </Stack>
  );
};
