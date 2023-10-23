// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RoundedTextAndIconButton from "@components/RoundedTextAndIconButton";
import RoundedTextButton from "../RoundedTextButton";
import { Apple } from "@components/icons/Icons";
import PropTypes from "prop-types";

const SignUpOptions = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate("/i/flow/signup");
  };

  return (
    <div className="flex flex-col w-[300px] sm:self-start self-center">
      <div className="flex flex-col gap-3">
        <RoundedTextAndIconButton
          text="Sign up with Google"
          className="h-[40px] bg-white text-black"
          onClick={handleCreateAccount}
          icon={<GoogleIcon className="w-[18px]  mr-1" />}
          iconPosition="start"
          disabled
        />
        <RoundedTextAndIconButton
          text="Sign up with Google"
          className="h-[40px] bg-white text-black"
          onClick={handleCreateAccount}
          icon={<Apple className="w-[20px] mr-1" />}
          iconPosition="start"
          disabled
        />
      </div>
      <div className="flex items-center justify-center my-1">
        <div
          className={`flex-grow  dark:border-b dark:border-[#3c3e42] border-b border-[#e2e9ec]`}
        ></div>
        <div className={`px-2 font-cThin text-[15px] dark:text-[#fff]`}>or</div>
        <div
          className={`flex-grow dark:border-b dark:border-[#3c3e42] border-b border-[#e2e9ec]`}
        ></div>
      </div>
      <div className="flex flex-col gap-3 mb-2">
        <RoundedTextButton
          text="Create account"
          className="h-[40px]  rounded-full btn--primary"
          onClick={handleCreateAccount}
        />
        <RoundedTextButton
          text="Create demo account"
          className="h-[40px]  rounded-full btn--primary"
          onClick={handleCreateAccount}
        />
      </div>
      <SigningUpTerms />
    </div>
  );
};

export default SignUpOptions;

// has more than 1 path for svg

const GoogleIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 48 48" width="20">
        <g>
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          ></path>
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          ></path>
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          ></path>
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          ></path>
          <path fill="none" d="M0 0h48v48H0z"></path>
        </g>
      </svg>
    </div>
  );
};

const SigningUpTerms = () => {
  return (
    <div>
      <p className="text-[11px] font-cReg text-[#71767B]">
        By signing up, you agree to the{" "}
        <a href="#" className="text-[#1D9BF0]">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-[#1D9BF0]">
          Privacy Policy
        </a>
        , including{" "}
        <a href="#" className="text-[#1D9BF0]">
          Cookie Use.
        </a>
      </p>
    </div>
  );
};

GoogleIcon.propTypes = {
  className: PropTypes.string,
};
