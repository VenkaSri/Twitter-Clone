import React, { useEffect, useState, useRef } from "react";

import { ContentHeading } from "../dialog/ContentHeading";
import { ContentBody } from "../dialog/ContentBody";
import { ContentFooter } from "../dialog/ContentFooter";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import { useMediaQuery } from "@mui/material";
import { useCurrentStep } from "../../../hooks/signup/ useCurrentStep";

const DialogLayout = () => {
  const width = useWindowWidth();
  const fullScreen = useMediaQuery("(max-width:702px)");
  const currentStep = useCurrentStep();

  const containerRef = useRef(null);

  // s/o chat-gpt, dynamically adding box shadow
  const [isOverflowing, setIsOverflowing] = useState(false);
  useEffect(() => {
    const checkOverflow = () => {
      const element = containerRef.current;
      if (element) {
        const isOver = element.scrollHeight > element.clientHeight;
        setIsOverflowing(isOver);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="overflow-auto flex flex-col items-stretch basis-full flex-grow "
      >
        <div className="flex flex-col">
          <div
            className={`${
              fullScreen ? " px-8" : " px-20"
            } shrink-0 flex flex-col`}
          >
            <ContentHeading />
            <ContentBody currentStep={currentStep} is />
          </div>
        </div>
      </div>

      {width < 702 && (
        <div className="flex-col-container  fixed bottom-0 left-0 right-0">
          <ContentFooter
            currentStep={currentStep}
            isOverflowing={isOverflowing}
          />
        </div>
      )}
      <div className="flex-col-container">
        <ContentFooter
          currentStep={currentStep}
          isOverflowing={isOverflowing}
        />
      </div>
    </>
  );
};

export default DialogLayout;
