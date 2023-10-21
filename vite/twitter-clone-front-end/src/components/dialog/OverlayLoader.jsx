import { useTheme } from "@/hooks/useTheme";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const OverlayLoader = () => {
  const { currentColor } = useTheme();

  return (
    <div className="flex flex-col grow dark:bg-black items-center justify-center">
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: currentColor,
            opacity: 0.3,
          }}
          size={25}
          thickness={5}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: currentColor,
            animationDuration: "500ms",
            position: "absolute",
            left: 0,
          }}
          size={25}
          thickness={5}
        />
      </Box>
    </div>
  );
};
