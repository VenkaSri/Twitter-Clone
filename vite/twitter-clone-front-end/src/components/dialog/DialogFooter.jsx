import { RegisterContext } from "@/context/auth/register-context";
import CenteredText from "@components/CenteredText";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { useSignupConfig } from "../auth/signup/signupConfig";
import RoundedTextButton from "../RoundedTextButton";

const DialogFooter = ({ step, onClick }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { btnText, btnStyle } = useSignupConfig();
  const { stepOneCompleted, validPasswordEntered, isUsernameValid } =
    useContext(RegisterContext);

  console.log(isUsernameValid);

  useEffect(() => {
    if (step === 0) {
      if (stepOneCompleted) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }

    if (step === 2) {
      if (validPasswordEntered) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }

    if (step === 3) {
      setIsDisabled(false);
    }

    if (step === 4) {
      if (isUsernameValid) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  }, [step, stepOneCompleted, validPasswordEntered, isUsernameValid]);

  return (
    <div
      role="button"
      className={clsx(
        "flex flex-col dark:bg-[#000] justify-center items-center z-20 px-20",
        { "pointer-events-none opacity-50": isDisabled }
      )}
      onClick={onClick}
    >
      <div className="flex flex-col grow  w-full">
        <RoundedTextButton
          text={btnText}
          className={`footer--button ${btnStyle}`}
        />
      </div>
    </div>
  );
};

export default DialogFooter;

DialogFooter.propTypes = {
  step: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
