import { useSelector } from "react-redux";

export function useUserData() {
  const userEmail = useSelector(
    (state) => state.rootReducer.signUp.email.enteredEmail
  );
  const username = useSelector((state) => state.rootReducer.signUp.username);
  const hasOneFollowing = useSelector(
    (state) => state.rootReducer.userInfo.hasOneFollowing
  );
  const { isNameEntered, isEmailEntered, isDOBEntered } = useSelector(
    (state) => state.rootReducer.signUp.stepOne
  );
  const password = useSelector((state) => state.rootReducer.signUp.password);
  const { name, email, dob } = useSelector((state) => state.rootReducer.signUp);
  const isUsernameSet = useSelector(
    (state) => state.rootReducer.userInfo.isUsernameSet
  );

  return {
    userEmail,
    hasOneFollowing,
    isNameEntered,
    isEmailEntered,
    isDOBEntered,
    password,
    name,
    email,
    dob,
    isUsernameSet,
    username
  };
}
