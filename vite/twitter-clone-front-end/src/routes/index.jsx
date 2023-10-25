import { useRoutes } from "react-router-dom";

import LandingPage from "@/components/public/LandingPage";
import { protectedRoutes } from "./protected";

const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <LandingPage /> }];

  const routes = protectedRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};

export default AppRoutes;
