const initState = {
  data: null,
  error: null,
};
const success = (state, action) => {
  return {
    data: action.payload,
  };
};
const failed = (state, action) => {
  return {
    data: action.payload,
  };
};

const createAccount = (state = initState, action) => {
  switch (action.type) {
    case "Account_Success":
      return success(state, action);

    case "Account_Failed":
      return failed(state, action);

    default:
      return state;
  }
};

export default createAccount;
