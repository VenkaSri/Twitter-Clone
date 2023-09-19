import { useSelector } from "react-redux";

export const useCurrentStep = () => {
  return useSelector((state) => state.rootReducer.signUpState.signUpStep);
};
