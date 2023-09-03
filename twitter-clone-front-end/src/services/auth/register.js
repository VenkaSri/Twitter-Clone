// register.js
import moment from "moment";
import axios from "axios";
import { useDispatch } from "react-redux";
import { usernameActions } from "../../state/auth/sign-up/username-reducer";
import { userInfoActions } from "../../state/user/userInfo-reducer";
import { reducerInfoActions } from "../../state/app/loading/dialog/signup/reducer";

export const register = async (
  name,
  enteredPassword,
  enteredEmail,
  dob,
  dispatch,
  reg
) => {
  const userDob = `${dob.year}-${dob.month}-${dob.day}`;

  let data = JSON.stringify({
    name: name.name,
    dob: moment(userDob, "YYYY-MMMM-DD").format("YYYY-MM-DD"),
    password: enteredPassword,
    email: enteredEmail,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: process.env.REACT_APP_BASE_URL,
    data: data,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json", // Make sure this is set correctly
    },
  };

  try {
    await axios(config);
    dispatch(userInfoActions.setAuthentication(true));
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 409) {
        console.log("Conflict: ", error.response.data);
      }
    }
    console.log(error);
  }
};
