import { useContext, useEffect, useState } from "react";
import { RegisterContext } from "@/context/auth/register-context";
import { Back, Close } from "@/components/icons/Icons";

export const useSignupConfig = () => {
  const { step, setStep, steps } = useContext(RegisterContext);
  const [body, setBody] = useState(null);
  const [headerAction, setHeaderAction] = useState(null);
  const [btnText, setBtnText] = useState("");
  const [btnStyle, setBtnStyle] = useState("");

  useEffect(() => {
    if (step === 0) {
      setBtnText("Next");
      setBtnStyle("btn--next");
      setHeaderAction("close");
      setBody("Step one");
    } else {
      setHeaderAction("back");
    }

    if (step === 1) {
      setBtnText("Sign up");
      setBtnStyle("btn--primary");
    }
    if (step === 2) {
      setBtnText("Next");
      setBtnStyle("btn--next");
    }
  }, [step]);

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const goBackAStep = () => {
    if (step !== 0) setStep(step - 1);
  };

  // if (step === 0) {
  //   setFooterAction(goToNextStep);
  // }

  return { goToNextStep, headerAction, goBackAStep, body, btnText, btnStyle };
};
