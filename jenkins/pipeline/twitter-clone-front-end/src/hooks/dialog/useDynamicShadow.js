import { RegisterContext } from "@/context/auth/register-context";
import { useContext, useEffect } from "react";

export const useDynamicShadow = (elementRef) => {
  const { isContentOverflowing, setIsContentOverflowing } =
    useContext(RegisterContext);

  // s/o chat-gpt, dynamically adding box shadow
  useEffect(() => {
    const checkOverflow = () => {
      const element = elementRef.current;

      if (element) {
        const isOver = element.scrollHeight > element.clientHeight;
        setIsContentOverflowing(isOver);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [elementRef, setIsContentOverflowing]);

  return {
    isContentOverflowing,
  };
};
