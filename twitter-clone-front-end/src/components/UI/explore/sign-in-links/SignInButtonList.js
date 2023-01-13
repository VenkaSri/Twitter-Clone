import SignInButton from "./SignInButton";
import { google, apple, email } from "../../../../utils/SignInButtonObjects";

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