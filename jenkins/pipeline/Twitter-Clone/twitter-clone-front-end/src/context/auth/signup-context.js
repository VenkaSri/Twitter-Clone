import React from "react";

const SignUpContext = React.createContext({
  name: "",
  email: "",
  phoneNumber: "",
  dob: ""
});

export default SignUpContext;