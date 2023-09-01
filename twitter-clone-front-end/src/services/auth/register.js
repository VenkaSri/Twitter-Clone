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
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    await axios(config);
    await getUserName(enteredEmail, dispatch);
  } catch (error) {
    console.log(error);
  }
};

const getUserName = async (enteredEmail, dispatch) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_GET_USERNAME_URL + `${enteredEmail}`
    );
    dispatch(userInfoActions.setUsername(response.data.data.username));
    dispatch(usernameActions.setUsername(response.data.data.username));
    dispatch(userInfoActions.setName(response.data.data.name));
  } catch (error) {
    console.log(error);
  }
};
