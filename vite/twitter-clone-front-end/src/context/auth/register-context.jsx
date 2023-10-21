import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import default_profile_picture from "@assets/images/profile-pics/dialog_profile_picture.png";
import { useSelector } from "react-redux";

const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
  const [step, setStep] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState({
    year: "",
    month: "",
    day: "",
  });

  const [autoFocusField, setAutoFocusField] = useState("");

  const [password, setPassword] = useState("");
  const [stepOneCompleted, setStepOneCompleted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [validPasswordEntered, setValidPasswordEntered] = useState(false);

  const [profilePicture, setProfilePicture] = useState(default_profile_picture);

  const username = useSelector((state) => state.userSlice.username);
  const [updatedUsername, setUpdatedUsername] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);

  const steps = [0, 1, 2, 3];

  useEffect(() => {
    if (username !== "") {
      setUpdatedUsername(username);
    }
  }, [username]);

  const value = {
    name,
    setName,
    email,
    setEmail,
    setDob,
    dob,
    step,
    setStep,
    stepOneCompleted,
    setStepOneCompleted,
    steps,
    autoFocusField,
    setAutoFocusField,
    setPassword,
    password,
    setShowPassword,
    showPassword,
    setValidPasswordEntered,
    validPasswordEntered,
    isLoading,
    setIsLoading,
    setProfilePicture,
    profilePicture,
    updatedUsername,
    setUpdatedUsername,
    isUsernameValid,
    setIsUsernameValid,
  };

  return (
    <RegisterContext.Provider value={value}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterProvider, RegisterContext };

RegisterProvider.propTypes = {
  children: PropTypes.node,
};
