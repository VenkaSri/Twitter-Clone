// landing page

const baseOAuthButton = {
  height: "40px",
  width: "300px",
  txtColor: "#000",
  bgColor: "#fff",
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
  txtColor: "#fff",
  bgColor: "#1d9bf0",
  margin: "0 0 0 4px",
  gap: "10px",
  fontSize: "15px",
};

export const googleOAuthButton = {
  ...baseOAuthButton,
  margin: "0",
  type: "Google",
  text: "Sign up with Google",
};

export const appleOAuthButton = {
  ...baseOAuthButton,
  margin: "0",
  type: "Apple",
  text: "Sign up with Apple",
  fill: "#000",
};

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
  bgColor: "transparent",
  txtColor: "#1D9BF0",
};
