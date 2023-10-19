import { useContext, useEffect, useState } from "react";
import { RegisterContext } from "@/context/auth/register-context";
import { Back, Close } from "@/components/icons/Icons";
import { useRegisterUserMutation } from "../authApi";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { json } from "react-router-dom";

dayjs.extend(customParseFormat);

export const useSignupConfig = () => {
  const { step, setStep, steps, name, password, email, dob } =
    useContext(RegisterContext);
  const [body, setBody] = useState(null);
  const [headerAction, setHeaderAction] = useState(null);
  const [btnText, setBtnText] = useState("");
  const [btnStyle, setBtnStyle] = useState("");
  const [registerUser, { isSuccess }] = useRegisterUserMutation();

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

  const handleRegistration = async () => {
    const formattedDob = dayjs(`${dob.month} ${dob.day}, ${dob.year}`).format(
      "YYYY-MM-DD"
    );

    const form = JSON.stringify({
      name: name,
      dob: formattedDob,
      email: email,
      password: password,
    });

    console.log(form);
    await registerUser(form);
  };

  const goToNextStep = async () => {
    if (step === 2) {
      await handleRegistration();

      // Now, check for success after awaiting the registration
      if (isSuccess) {
        console.log("su");
      }
    } else {
      setStep(step + 1);
    }
  };

  const goBackAStep = () => {
    if (step !== 0) setStep(step - 1);
  };

  // if (step === 0) {
  //   setFooterAction(goToNextStep);
  // }

  return { goToNextStep, headerAction, goBackAStep, body, btnText, btnStyle };
};
