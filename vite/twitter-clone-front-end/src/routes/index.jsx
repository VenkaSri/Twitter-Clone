import { useRoutes } from "react-router-dom";

import LandingPage from "@/components/public/LandingPage";

const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <LandingPage /> }];

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};

export default AppRoutes;
