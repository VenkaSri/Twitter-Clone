import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";
import steps from "@components/dialog/signup/steps/index";
import { useDynamicShadow } from "@/hooks/dialog/useDynamicShadow";

const DialogBody = ({ step }) => {
  const fullScreen = useMediaQuery("(max-width:702px)");
  const containerRef = useRef(null);
  const [body, setBody] = useState(null);
  useDynamicShadow(containerRef);

  useEffect(() => {
    const StepComponent = steps[step];
    if (StepComponent) {
      setBody(<StepComponent />);
    }
  }, [step]);

  return (
    <div
      id="scrollableDiv"
      ref={containerRef}
      className={`overflow-auto
flex flex-col items-stretch basis-full flex-grow bg-[#fff] dark:bg-[#000]`}
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
