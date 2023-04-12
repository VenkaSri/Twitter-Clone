import { useSelector } from 'react-redux';

export function useUserData() {
  const enteredEmail = useSelector((state) => state.rootReducer.signUp.email.enteredEmail);
  return enteredEmail;
}
