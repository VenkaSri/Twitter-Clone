import { useDispatch, useSelector } from "react-redux";
import { signupSliceActions } from "../../state/app/home/signupSlice";

export function useDOBInputState() {
  const dispatch = useDispatch();
  const userDOB = useSelector(
    (state) => state.rootReducer.signUpState.stepOneInfo.dob
  );
  const autoFocus = useSelector(
    (state) => state.rootReducer.signUpState.shouldAutoFocus
  );
  const monthHandler = (e) => {
    dispatch(signupSliceActions.setMonth(e.target.value));
  };

  const dayHandler = (e) => {
    dispatch(signupSliceActions.setDay(e.target.value));
  };

  const yearHandler = (e) => {
    dispatch(signupSliceActions.setYear(e.target.value));
  };

  return {
    monthHandler,
    dayHandler,
    yearHandler,
    userDOB,
    autoFocus,
  };
}
