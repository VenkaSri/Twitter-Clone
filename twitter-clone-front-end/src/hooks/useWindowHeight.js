import { useState, useEffect } from "react";

function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Function to update the window height in the state
    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    // Add an event listener to the window resize event
    window.addEventListener("resize", updateWindowHeight);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowHeight);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return windowHeight;
}

export default useWindowHeight;
