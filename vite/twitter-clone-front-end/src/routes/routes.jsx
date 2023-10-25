// import { Suspense, lazy, useEffect } from "react";
// import { PathConstants } from "./pathConstants";
// import { useNavigate, useRoutes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// // import MainLayout from "@/components/layout/MainLayout";
// import LandingPage from "@/components/public/LandingPage";
// import Landing from "@/components/layout/public/Landing";
// import { useSession } from "@/hooks/useSession";
// import AppProgess from "@/components/AppLoader";
// import { authApi } from "@/services/authApi";
// import { userApi } from "@/services/userApi";
// import { userSliceActions } from "@/state/userSlice";

// // const LandingPage = lazy(() => import("@/components/public/LandingPage"));
// // const Landing = lazy(() => import("@/components/layout/public/Landing"));
// const MainLayout = lazy(() => import("@/components/layout/MainLayout"));

// const AppRoutes = () => {
//   const { isAuthenticated, isAuthenticating } = useSession();

//   const routes = [
//     {
//       path: PathConstants.HOME,
//       element: isAuthenticated ? (
//         <Suspense fallback={<AppProgess />}>
//           <MainLayout />
//         </Suspense>
//       ) : (
//         <LandingPage />
//       ),
//     },
//     { path: PathConstants.SIGN_UP, element: <Landing /> },
//   ];

//   const element = useRoutes(routes);

//   if (isAuthenticating) {
//     return <AppProgess />;
//   }

//   return element;
// };

// export default AppRoutes;
