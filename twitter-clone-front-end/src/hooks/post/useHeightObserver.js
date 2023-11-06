import { useEffect } from "react";

export const useHeightObserver = (ref, onHeightChange) => {
  useEffect(() => {
    if (ref.current) {
      const handleResize = (entries) => {
        for (let entry of entries) {
          onHeightChange(entry.target.clientHeight);
        }
      };

      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(ref.current.editor);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [ref, onHeightChange]);
};
