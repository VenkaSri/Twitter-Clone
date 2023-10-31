import MainLayout from "@/components/layout/MainLayout";
import { PathConstants } from "./pathConstants";
import { MainColumn } from "@/components/home/main/mainColumn/MainColumn";

export const protectedRoutes = [
  {
    path: PathConstants.HOME,
    element: <MainLayout />,
    children: [
      { path: PathConstants.HOME, element: <MainColumn /> },
      { path: PathConstants.EXPLORE, element: <MainColumn /> },
      { path: PathConstants.STATUS, element: <MainColumn /> },
    ],
  },
];
