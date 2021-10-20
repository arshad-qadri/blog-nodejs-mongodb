import axios from "axios";
const accountCreatedSuccess = data => {
  return {
    type: "Account_Success",
    payload: data,
  };
};
const accountCreatedFailed = err => {
  return {
    type: "Account_Failed",
    payload: err,
  };
};

export const account_create = data => {
  // console.log(data);
  const { fullname, email, password } = data;
  return async disptch => {
    await axios
      .post("http://localhost:5000/api/create-account", {
        fullname: fullname,
        email: email,
        password: password,
        isAdmin: false,
      })
      .then(res => {
        disptch(accountCreatedSuccess(res));
      })
      .catch(err => {
        disptch(accountCreatedFailed(err.response));
      });
  };
};
