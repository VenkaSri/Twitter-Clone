import { RegisterContext } from "@/context/auth/register-context";
import CenteredText from "@components/CenteredText";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";

const DialogFooter = ({ step }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { stepOneCompleted } = useContext(RegisterContext);

  useEffect(() => {
    if (step === 0) {
      if (stepOneCompleted) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  }, [step, stepOneCompleted]);

  return (
    <div
      role="button"
      className={clsx(
        "flex flex-col dark:bg-[#000] justify-center items-center z-20 px-20",
        { "pointer-events-none opacity-50": isDisabled }
      )}
    >
      <div className="flex flex-col grow  w-full br">
        <div className="footer--button btn--dialog-footer ">
          <CenteredText text="Next" />
        </div>
      </div>
    </div>
  );
};

export default DialogFooter;

DialogFooter.propTypes = {
  step: PropTypes.number.isRequired,
};
