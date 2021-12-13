import axios from "axios";
import { ERROR, SIGN_UP } from "../type";
export const Act_signup = data => {
  const { fullname, email, password } = data;
  return async dispatch => {
    axios
      .post("http://localhost:5000/api/create-account", {
        fullname: fullname,
        email: email,
        password: password,
        isAdmin: false,
      })
      .then(res => {
        console.log("res", res);
        dispatch({ type: SIGN_UP, payload: res.data });
      })
      .catch(err => {
        console.log("err", err);
        dispatch({ type: ERROR, payload: err.response });
      });
  };
};
