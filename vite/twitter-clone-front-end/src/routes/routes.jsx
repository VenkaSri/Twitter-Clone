import { lazy } from "react";
import { PathConstants } from "./pathConstants";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

const LandingPage = lazy(() => import("@/components/public/LandingPage"));
const Landing = lazy(() => import("@/components/layout/public/Landing"));
const MainLayout = lazy(() => import("@/components/layout/MainLayout"));

const AppRoutes = () => {
  const isAuthenticated = useSelector(
    (state) => state.authSlice.isAuthenticated
  );
  const routes = [
    {
      path: PathConstants.HOME,
      element: isAuthenticated ? <MainLayout /> : <LandingPage />,
    },
    { path: PathConstants.SIGN_UP, element: <Landing /> },
  ];

  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
