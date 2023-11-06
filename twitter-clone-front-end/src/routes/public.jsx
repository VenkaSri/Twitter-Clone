import LandingPage from "@/components/public/LandingPage";
import { PathConstants } from "./pathConstants";
import Dialog from "@/components/Dialog";

export const publicRoutes = [
  {
    path: PathConstants.HOME,
    element: <LandingPage />,
    children: [{ path: "/i/flow/signup", element: <Dialog /> }],
  },
];
