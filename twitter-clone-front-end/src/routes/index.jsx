import { useRoutes } from "react-router-dom";

import { protectedRoutes } from "@routes/protected";
import { useSession } from "@hooks/useSession";
import { publicRoutes } from "@routes/public";
import { AppProgess } from "@components/AppLoader";

const AppRoutes = () => {
  const { isAuthenticated, isAuthenticating } = useSession();

  const routes = isAuthenticated ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  if (isAuthenticating) {
    return <AppProgess />;
  }

  return <>{element}</>;
};

export default AppRoutes;
