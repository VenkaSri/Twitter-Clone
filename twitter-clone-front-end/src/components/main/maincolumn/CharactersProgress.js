import { CircularProgress } from "@mui/joy";
import { CHARACTER_LIMIT } from "../../../constants";
import { useTweetSectionContext } from "../../../context/TweetSectionCtx";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function CharactersProgress() {
  const { numOfChars } = useTweetSectionContext();

  const convertToPercent = (value, max) => {
    let percentage = (value / max) * 100;
    return Math.min(percentage, 100);
  };
  const isApproachingLimit = numOfChars >= 260;
  const progressColor =
    numOfChars >= 280 ? "#f4212e" : isApproachingLimit ? "#FFD700" : "#1d9bf0";
  const isPastLimit = numOfChars >= 290;
  const numberColor = numOfChars > 279;

  console.log(numberColor);

  return (
    <div className="min-h-[30px] min-w-[30px] centered-column-container ">
      {!isPastLimit ? (
        <CircularProgress
          determinate
          value={convertToPercent(numOfChars, CHARACTER_LIMIT)}
          color="primary"
          sx={{
            "--CircularProgress-progressThickness": "2px",
            "--CircularProgress-size": "25px",
            "--CircularProgress-trackThickness": "2px",
            "--CircularProgress-trackColor": "#eff3f4",
            "--CircularProgress-progressColor": progressColor,
          }}
        >
          {isApproachingLimit && (
            <span
              className={clsx(
                "text-[13px] leading-[10.4px] font-cReg dark:text-white",
                {
                  "text-[#f4212e]": numberColor,
                }
              )}
            >
              {CHARACTER_LIMIT - numOfChars}
            </span>
          )}
        </CircularProgress>
      ) : (
        isApproachingLimit && (
          <span className="text-[13px] leading-[10.4px] font-cReg text-[#f4212e]">
            {(CHARACTER_LIMIT - numOfChars).toLocaleString()}
          </span>
        )
      )}
    </div>
  );
}
