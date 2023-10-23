import { useSelector } from "react-redux";

export const useTheme = () => {
  const currentColor = useSelector((state) => state.themeSlice.currentColor);
  const darkMode = true;

  return { darkMode, currentColor };
};
