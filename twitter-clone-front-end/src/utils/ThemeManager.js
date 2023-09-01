import React, { useEffect, useState } from "react";

const ThemeManager = () => {
  const [theme, setTheme] = useState("light"); // Default to light theme

  useEffect(() => {
    const handleThemeChange = () => {
      console.log("Theme change detected:", localStorage.theme);
      // Apply your theme changes here
    };

    window.addEventListener("storage", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ThemeManager;
