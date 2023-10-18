import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import StepOne from "@components/dialog/steps/StepOne";
import StepTwo from "@components/dialog/steps/StepTwo";
import StepThree from "@components/dialog/steps/StepThree";

const DialogBody = ({ step }) => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  const containerRef = useRef(null);
  const [body, setBody] = useState(null);

  useEffect(() => {
    if (step === 0) {
      setBody(<StepOne />);
    }
    if (step === 1) {
      setBody(<StepTwo />);
    }
    if (step === 2) {
      setBody(<StepThree />);
    }
  }, [step]);

  return (
    <div
      id="scrollableDiv"
      ref={containerRef}
      className={`overflow-auto
flex flex-col items-stretch basis-full flex-grow bg-[#fff] dark:bg-[#000] `}
    >
      <div
        className={`${
          fullScreen ? " px-8" : " px-20"
        } shrink-0 flex flex-col mb-2 grow`}
      >
        {body}
      </div>
    </div>
  );
};

export default DialogBody;

DialogBody.propTypes = {
  step: PropTypes.number.isRequired,
};
