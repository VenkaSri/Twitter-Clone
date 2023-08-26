import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { globalInfoActions } from "../state/app/global-reducer";

const DarkModeWatcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    dispatch(globalInfoActions.setIsDarkMode(isDarkMode));

    // Watch for changes
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleChange = (event) => {
      dispatch(globalInfoActions.setIsDarkMode(event.matches));
    };

    darkModeMediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, [dispatch]);

  return null;
};

export default DarkModeWatcher;
