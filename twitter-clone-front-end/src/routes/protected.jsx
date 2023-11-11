import MainLayout from "@/components/layout/MainLayout";
import { PathConstants } from "./pathConstants";
import { MainColumn } from "@/components/home/main/mainColumn/MainColumn";
import { ViewPost } from "@/components/post/ViewPost";
import { PostEngagements } from "@/pages/PostEngagements";
import { Logout } from "@/pages/Logout";
import { Navigate } from "react-router-dom";

export const protectedRoutes = [
  {
    path: PathConstants.ROOT,
    element: <Navigate to={PathConstants.HOME} replace />,
  },
  {
    path: PathConstants.ROOT,
    element: <MainLayout />,
    children: [
      { path: PathConstants.HOME, element: <MainColumn /> },
      { path: PathConstants.EXPLORE, element: <MainColumn /> },
      { path: PathConstants.STATUS, element: <ViewPost /> },
      { path: PathConstants.QUOTES, element: <PostEngagements /> },
    ],
  },
  {
    path: PathConstants.LOGOUT,
    element: <Logout />,
  },
  {
    path: "*",
    element: <Navigate to={PathConstants.HOME} replace />,
  },
];
