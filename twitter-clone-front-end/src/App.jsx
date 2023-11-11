import { useSelector } from "react-redux";
import AppProvider from "./providers/app";
import AppRoutes from "./routes/index";
import { AppProgess } from "./components/AppLoader";

const App = () => {
  const appLoading = useSelector((state) => state.appSlice.appLoading);

  return (
    <AppProvider>{appLoading ? <AppProgess /> : <AppRoutes />}</AppProvider>
  );
};

export default App;
