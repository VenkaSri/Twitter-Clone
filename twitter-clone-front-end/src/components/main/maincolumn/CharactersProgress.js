import { useState } from "react";
import { Stack } from "@mui/system";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { CircularProgress } from "@mui/joy";
import { useCountUp } from "use-count-up";
import { useTweetSectionContext } from "../../../context/TweetSectionCtx";

export default function CharactersProgress() {
  const { numOfChars } = useTweetSectionContext();

  return (
    <div className="min-h-[30px] min-w-[30px] centered-column-container ">
      <CircularProgress
        determinate
        value={numOfChars}
        color="primary"
        sx={{
          "--CircularProgress-progressThickness": "2px",
          "--CircularProgress-size": "25px",
          "--CircularProgress-trackThickness": "2px",
          "--CircularProgress-trackColor": "#eff3f4",
          "--CircularProgress-progressColor": "#1e9bf0",
        }}
      ></CircularProgress>
    </div>
  );
}
