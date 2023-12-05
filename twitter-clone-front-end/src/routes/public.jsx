// import LandingPage from "@/components/public/LandingPage";
import { OverlayLoader } from "@/components/dialog/OverlayLoader";
import { PathConstants } from "./pathConstants";
import Dialog from "@/components/Dialog";
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from "@/components/layout/public/Home";
// import { LoginDialog } from "@/components/dialog/auth/login/Login";

const LandingPage = lazy(() => import("@/components/public/LandingPage"));
const LoginDialog = lazy(() => import("@/components/dialog/auth/login/Login"));

export const publicRoutes = [
  {
    path: PathConstants.ROOT,
    element: <Home />,
    children: [
      { path: PathConstants.SIGN_UP, element: <Dialog type="SIGNUP" /> },
      {
        path: PathConstants.LOGIN,
        element: (
          <Suspense fallback={<OverlayLoader />}>
            <LoginDialog />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={PathConstants.ROOT} replace />,
  },
];
