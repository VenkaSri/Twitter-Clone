import SignInButton from "./SignInButton";
import { google, apple, email } from "../../../../utils/SignInButtonObjects";

import { createBrowserRouter, RouterProvider, useRoutes,} from "react-router-dom";
import TweetsFeed from "../../../main/body/TweetsFeed";


const SignInButtonList = () => {
  return (
    <>
      <SignInButton svg={google}/>
      <SignInButton svg={apple}/>
      <SignInButton svg={email}/>
    </>
    
  );
};

export default SignInButtonList;