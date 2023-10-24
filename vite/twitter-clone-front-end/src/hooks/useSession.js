import { useSelector } from "react-redux";

export const useSession = () => {
  const { username, name } = useSelector((state) => state.userSlice);

  return { username, name };
};
