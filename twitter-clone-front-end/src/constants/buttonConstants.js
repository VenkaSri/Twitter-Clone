// landing page

const baseOAuthButton = {
  height: "40px",
  width: "300px",
  txtColor: "#000",
  icon: true,
  margin: "0 0 0 4px",
  iconPosition: "start",
  brdColor: "#dcdee1",
  gap: "10px",
  fontSize: "15px",
};

const baseAuthButton = {
  height: "40px",
  width: "300px",
  margin: "0 0 0 4px",
  gap: "10px",
  fontSize: "15px",
  className:
    "hover:bg-[#1A8CD8] dark:bg-[#1d9bf0] dark:hover:bg-[#1A8CD8] bg-[#1d9bf0] text-white",
};

export const googleOAuthButton = {
  ...baseOAuthButton,
  margin: "0",
  type: "Google",
  text: "Sign up with Google",
  className: "hover:bg-[#E6E6E6] dark:bg-white dark:hover:bg-[#E6E6E6]",
};

export const appleOAuthButton = {
  ...baseOAuthButton,
  margin: "0",
  type: "Apple",
  text: "Sign up with Apple",
  fill: "#000",
  className: "hover:bg-[#E6E6E6] dark:bg-white dark:hover:bg-[#E6E6E6]",
};

// bgColor: "#1d9bf0",

export const createAccountButton = {
  ...baseAuthButton,
  text: "Create Account",
};

export const createDemoAccountButton = {
  ...baseAuthButton,
  text: "Create a Demo Account",
};

export const signInButton = {
  ...baseOAuthButton,
  text: "Sign in",
  txtColor: "#1D9BF0",
  icon: false,
  className:
    "border border-[#cfd9de] dark:border dark:border-[#293238] bg-transparent  hover:bg-[#E8F5FE] dark:hover:bg-[#030f18]",
};

delete signInButton.brdColor;
delete signInButton.bgColor;
