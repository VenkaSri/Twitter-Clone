import LandingPage from "@/components/public/LandingPage";
import { PathConstants } from "./pathConstants";
import Dialog from "@/components/Dialog";
import { Navigate } from "react-router-dom";

export const publicRoutes = [
  {
    path: PathConstants.HOME,
    element: <LandingPage />,
    children: [
      { path: PathConstants.SIGN_UP, element: <Dialog /> },
      { path: PathConstants.LOGIN, element: <Dialog /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to={PathConstants.HOME} replace />,
  },
];
