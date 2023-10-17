import { LandingPage } from "@components/public/LandingPage";
import MuiDialog from "@components/Dialog";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./store";
import { RegisterProvider } from "@context/auth/register-context";

function App() {
  return (
    <>
      <HelmetProvider>
        <Provider store={store}>
          <LandingPage />
          <RegisterProvider>
            <MuiDialog />
          </RegisterProvider>
        </Provider>
      </HelmetProvider>
    </>
  );
}

export default App;
