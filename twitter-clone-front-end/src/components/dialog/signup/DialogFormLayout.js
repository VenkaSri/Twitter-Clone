import React, { useEffect, useState, useRef } from "react";

import { ContentHeading } from "../../signup/dialog/ContentHeading";
import { ContentBody } from "../../signup/dialog/ContentBody";
import { ContentFooter } from "../../signup/dialog/ContentFooter";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import { useMediaQuery } from "@mui/material";
import { useCurrentStep } from "../../../hooks/signup/ useCurrentStep";
import { useDispatch } from "react-redux";
import { globalInfoActions } from "../../../state/app/global-reducer";

const DialogFormLayout = ({}) => {
  const width = useWindowWidth();
  const fullScreen = useMediaQuery("(max-width:702px)");
  const currentStep = useCurrentStep();
  const dispatch = useDispatch();

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
        className={`${
          currentStep === 4.5 ? "overflow-hidden" : "overflow-auto"
        } flex flex-col items-stretch basis-full flex-grow dark:bg-[#000]`}
      >
        {currentStep === 4.5 ? (
          <div className="flex flex-col">
            <ContentBody currentStep={currentStep} />
          </div>
        ) : (
          <div className="flex flex-col">
            <div
              className={`${
                fullScreen ? " px-8" : " px-20"
              } shrink-0 flex flex-col`}
            >
              <ContentHeading currentStep={currentStep} />
              <ContentBody currentStep={currentStep} />
            </div>
          </div>
        )}
      </div>
      {currentStep === 4.5 ? (
        <div className="flex-col-container min-h-[20px] overflow-none"></div>
      ) : (
        <>
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
      )}
    </>
  );
};

export default DialogFormLayout;
