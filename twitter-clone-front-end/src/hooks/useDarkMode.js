import { useSelector } from "react-redux";

export const useDarkMode = () => {
  const darkMode = useSelector(
    (state) => state.rootReducer.globalState.isDarkMode
  );
  return darkMode;
};
