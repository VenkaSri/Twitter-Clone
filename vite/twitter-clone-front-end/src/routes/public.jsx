import LandingPage from "@/components/public/LandingPage";
import { PathConstants } from "./pathConstants";

export const publicRoutes = [
  {
    path: PathConstants.HOME,
    element: <LandingPage />,
  },
];
