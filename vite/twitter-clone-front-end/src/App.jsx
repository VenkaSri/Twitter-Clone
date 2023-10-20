import MuiDialog from "@components/Dialog";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./store";
import { RegisterProvider } from "@context/auth/register-context";
import { OverlayLoader } from "./components/dialog/OverlayLoader";

const LandingPage = lazy(() => import("@components/public/LandingPage"));

function App() {
  return (
    <>
      <HelmetProvider>
        <Provider store={store}>
          <Suspense fallback={<OverlayLoader />}>
            <LandingPage />
          </Suspense>
          <RegisterProvider>
            <MuiDialog />
          </RegisterProvider>
        </Provider>
      </HelmetProvider>
    </>
  );
}

export default App;
