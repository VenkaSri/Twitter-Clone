import AppProvider from "./providers/app";
import AppRoutes from "./routes/index";

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
