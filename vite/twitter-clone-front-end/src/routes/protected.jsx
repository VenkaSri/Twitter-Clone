import MainLayout from "@/components/layout/MainLayout";
import { Outlet } from "react-router-dom";
import { PathConstants } from "./pathConstants";
import { MainColumn } from "@/components/app/main/mainColumn/MainColumn";

export const protectedRoutes = [
  {
    path: PathConstants.HOME,
    element: <MainLayout />,
    children: [
      { path: PathConstants.HOME, element: <MainColumn /> },
      { path: PathConstants.EXPLORE, element: <MainColumn /> },
    ],
  },
];
