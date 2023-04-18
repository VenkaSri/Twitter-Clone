import { useSelector } from 'react-redux';

export function useUserData() {
  const userEmail = useSelector((state) => state.rootReducer.signUp.email.enteredEmail);
  const hasOneFollowing = useSelector((state) => state.rootReducer.userInfo.hasOneFollowing);
  const {isNameEntered, isEmailEntered, isDOBEntered, isPasswordEntered} = useSelector((state) => state.rootReducer.signUp.stepOne);

  return { userEmail, hasOneFollowing,isNameEntered, isEmailEntered, isDOBEntered, isPasswordEntered };
}
