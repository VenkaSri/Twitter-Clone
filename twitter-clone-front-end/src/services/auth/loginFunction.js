import axios from "axios";
import { loginSliceActions } from "../../state/app/home/loginSlice";

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
      dispatch(loginSliceActions.setLoggedIn(true));
    })
    .catch(function (error) {
      console.log(error);
    });
};
