import { CHARACTER_LIMIT } from "@/constants/app";
import { usePostEditorContext } from "@/context/home/post-editor-context";
import { useTheme } from "@/hooks/useTheme";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";
import clsx from "clsx";

export const CharactersProgress = () => {
  const { numOfChars } = usePostEditorContext();
  const { darkMode, currentColor } = useTheme();

  const StyledContainer = styled("div")({
    position: "relative",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const CenteredDivText = styled("div")({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "13px",
    color: numOfChars >= CHARACTER_LIMIT ? "#f4212e" : "black",
  });

  const BackgroundCircle = styled(CircularProgress)({
    color: darkMode ? "#2f3336" : "#eff3f4", // Unfilled portion color
    position: "absolute",
    display: CHARACTER_LIMIT - numOfChars <= -9 ? "none" : "block",
  });

  const FilledCircle = styled(CircularProgress)((props) => ({
    color:
      numOfChars >= 280
        ? "#f4212e"
        : numOfChars >= 260
        ? "#FFD700"
        : currentColor,
    display: CHARACTER_LIMIT - numOfChars <= -9 ? "none" : "block",
  }));

  const convertToPercent = (value, max) => {
    let percentage = (value / max) * 100;
    return Math.min(percentage, 100);
  };
  const isApproachingLimit = numOfChars >= 260;

  return (
    <StyledContainer>
      <BackgroundCircle size={25} variant="determinate" value={100} />
      <FilledCircle
        size={25}
        variant="determinate"
        value={convertToPercent(numOfChars, CHARACTER_LIMIT)}
      />
      <CenteredDivText className="font-cR">
        {isApproachingLimit && CHARACTER_LIMIT - numOfChars}
      </CenteredDivText>
    </StyledContainer>
  );
};

/** Used @Mui/Joy to come up with the same solution, but decided not to install while switching to Vite.   */

// <div className="min-h-[30px] min-w-[30px] flex flex-col items-center justify-center">
// {!isPastLimit ? (
//   <CircularProgress
//     variant="determinate"
//     value={convertToPercent(numOfChars, CHARACTER_LIMIT)}
//     color="primary"
//     sx={{
//       "--CircularProgress-progressThickness": "2px",
//       "--CircularProgress-size": "25px",
//       "--CircularProgress-trackThickness": "2px",
//       "--CircularProgress-trackColor": "#eff3f4",
//       "--CircularProgress-progressColor": progressColor,
//     }}
//   >
//     {isApproachingLimit && (
//       <span
//         className={clsx(
//           "text-[13px] leading-[10.4px] font-cR dark:text-white",
//           {
//             "text-[#f4212e] dark:text-[#f4212f]": numberColor,
//           }
//         )}
//       >
//         {CHARACTER_LIMIT - numOfChars}
//       </span>
//     )}
//   </CircularProgress>
// ) : (
//   isApproachingLimit && (
//     <span className="text-[13px] leading-[10.4px] font-cR text-[#f4212e] dark:text-[red] tracking-widest">
//       {(CHARACTER_LIMIT - numOfChars).toLocaleString()}
//     </span>
//   )
// )}
// </div>
