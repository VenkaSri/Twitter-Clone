import SignInButton from "./SignInButton";
import { google, apple, email } from "../../../../utils/SignInButtonObjects";

import { createBrowserRouter, RouterProvider, useRoutes,} from "react-router-dom";
import TweetsFeed from "../../../main/tweets/TweetsFeed";


const SignInButtonList = () => {
  return (
    <ul className="flex flex-col justify-between ml-4 mt-3 gap-3">
      <SignInButton svg={google}/>
      <SignInButton svg={apple}/>
      <SignInButton svg={email}/>
    </ul>
    
  );
};

export default SignInButtonList;