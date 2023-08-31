import axios from "axios";
import { loginReducerInfoActions } from "../../state/app/home/loginReducer";

export const login = (usernameOrEmailOrPhonenumber, password, dispatch) => {
  axios
    .post(
      process.env.REACT_APP_LOGIN,
      {
        usernameOrEmailOrPhonenumber,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response);
      dispatch(loginReducerInfoActions.setLoggedIn(true));
    })
    .catch(function (error) {
      console.log(error);
    });
};
