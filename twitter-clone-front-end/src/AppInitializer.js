import Routes from "./ROUTES";
import { TwitterClone } from "./TwitterClone";
import { Snackbar } from "./components/modal/Snackbar";
import { TweetSectionProvider } from "./context/TweetSectionCtx";

import { useSelector } from "react-redux";
import { AppProgess } from "./components/AppProgess";

export const AppInitializer = () => {
  const { isError, errorMessage } = useSelector(
    (state) => state.rootReducer.modalSlice.snackbarSlice
  );

  return (
    <>
      <TweetSectionProvider>
        {isError && <Snackbar message={errorMessage} />}
        <TwitterClone />
        <Routes />
      </TweetSectionProvider>
    </>
  );
};
