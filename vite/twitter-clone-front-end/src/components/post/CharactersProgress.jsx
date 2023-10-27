import { CHARACTER_LIMIT } from "@/constants/app";
import { usePostEditorContext } from "@/context/home/post-editor-context";
import CircularProgress from "@mui/material/CircularProgress";
import clsx from "clsx";

export const CharactersProgress = () => {
  const { numOfChars } = usePostEditorContext();

  const convertToPercent = (value, max) => {
    let percentage = (value / max) * 100;
    return Math.min(percentage, 100);
  };
  const isApproachingLimit = numOfChars >= 260;
  const progressColor =
    numOfChars >= 280 ? "#f4212e" : isApproachingLimit ? "#FFD700" : "#1d9bf0";
  const isPastLimit = numOfChars >= 290;
  const numberColor = numOfChars > 279;

  return (
    <div className="min-h-[30px] min-w-[30px] flex flex-col items-center justify-center">
      {!isPastLimit ? (
        <CircularProgress
          variant="determinate"
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
                "text-[13px] leading-[10.4px] font-cR dark:text-white",
                {
                  "text-[#f4212e] dark:text-[#f4212f]": numberColor,
                }
              )}
            >
              {CHARACTER_LIMIT - numOfChars}
            </span>
          )}
        </CircularProgress>
      ) : (
        isApproachingLimit && (
          <span className="text-[13px] leading-[10.4px] font-cR text-[#f4212e] dark:text-[red] tracking-widest">
            {(CHARACTER_LIMIT - numOfChars).toLocaleString()}
          </span>
        )
      )}
    </div>
  );
};
