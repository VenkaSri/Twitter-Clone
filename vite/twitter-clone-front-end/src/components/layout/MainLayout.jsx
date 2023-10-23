import { useState, useEffect } from "react";

const MainLayout = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowElement(true);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  if (!showElement) {
    return null;
  }

  return (
    <div className="h-screen w-screen flex flex-col overflow-x-hidden dark:bg-black br">
      Main
    </div>
  );
};

export default MainLayout;
