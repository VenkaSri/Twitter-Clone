import { useSelector } from "react-redux";

export const useTheme = () => {
  const currentColor = useSelector((state) => state.themeSlice.currentColor);
  const darkMode = useSelector((state) => state.themeSlice.darkMode);

  return { darkMode, currentColor };
};
