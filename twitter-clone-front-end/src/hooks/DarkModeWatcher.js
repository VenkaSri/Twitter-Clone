import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalInfoActions } from "../state/app/global-reducer";

const useDarkModeWatcher = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(
    (state) => state.rootReducer.globalState.isDarkMode
  );
  const rootElement = document.documentElement;

  useEffect(() => {
    const isDarkMode = rootElement.classList.contains("dark");
    console.log(isDarkMode);
    // if (isDarkMode !== darkMode) {
    //   dispatch(globalInfoActions.setIsDarkMode(isDarkMode));
    // }
  }, [dispatch, darkMode, rootElement]);

  return darkMode;
};

export default useDarkModeWatcher;
