import { useSelector } from "react-redux";

export const useCurrentStep = () => {
  return useSelector((state) => state.rootReducer.signUp.steps.currentStep);
};
