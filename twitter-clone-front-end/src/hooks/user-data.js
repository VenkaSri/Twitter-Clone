import { useSelector } from 'react-redux';

export function useUserData() {
  const userEmail = useSelector((state) => state.rootReducer.signUp.email.enteredEmail);
  const hasOneFollowing = useSelector((state) => state.rootReducer.userInfo.hasOneFollowing);

  return { userEmail, hasOneFollowing };
}
