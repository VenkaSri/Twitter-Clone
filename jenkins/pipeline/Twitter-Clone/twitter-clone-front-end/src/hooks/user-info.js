import { useSelector } from "react-redux";

export function useUserInfo() {
  const currentUsername = useSelector(
    (state) => state.rootReducer.userInfo.username
  );

  return { currentUsername };
}
