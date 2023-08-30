import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DOBInput from "../inputs/DOBInput";
import NameInputField from "../inputs/NameInputField";
import EmailTextField from "../inputs/EmailTextField";
import { stepsActions } from "../../../state/auth/form/steps-reducer";
import { ContentHeading } from "../dialog/ContentHeading";
import { ContentBody } from "../dialog/ContentBody";
import { ContentFooter } from "../dialog/ContentFooter";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import { useMediaQuery } from "@mui/material";

const StepOne = () => {
  const width = useWindowWidth();
  const fullScreen = useMediaQuery("(max-width:702px)");

  return (
    <>
      <div className="overflow-auto flex flex-col items-stretch basis-full flex-grow ">
        <div className="flex flex-col h-full">
          <div
            className={`${
              fullScreen ? " px-8" : " px-20"
            } shrink-0 flex flex-col`}
          >
            <ContentHeading />
            <ContentBody />
          </div>
        </div>
      </div>

      {width < 702 && (
        <div className="flex-col-container  fixed bottom-0 left-0 right-0">
          <ContentFooter />
        </div>
      )}
      <div className="flex-col-container">
        <ContentFooter />
      </div>
    </>
  );
};

export default StepOne;
