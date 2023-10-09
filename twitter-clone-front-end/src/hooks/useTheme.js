import { useSelector } from "react-redux";

export const useTheme = () => {
  const currentColor = useSelector(
    (state) => state.rootReducer.themeSlice.currentColor
  );

  const darkMode = useSelector(
    (state) => state.rootReducer.themeSlice.darkMode
  );

  return { darkMode, currentColor };
};
