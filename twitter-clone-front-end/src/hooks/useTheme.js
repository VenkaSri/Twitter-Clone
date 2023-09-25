import { useSelector } from "react-redux";

export const useTheme = () => {
  const darkMode = useSelector(
    (state) => state.rootReducer.themeSlice.darkMode
  );
  return darkMode;
};
