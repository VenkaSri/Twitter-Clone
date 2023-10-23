import { Suspense } from "react";
import AppProvider from "./providers/app";
import AppRoutes from "./routes/routes";
import AppProgess from "./components/AppLoader";

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
