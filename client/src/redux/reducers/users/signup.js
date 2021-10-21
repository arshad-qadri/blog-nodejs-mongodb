const initState = {
  data: null,
  error: null,
};
const success = (state, action) => {
  return {
    ...state,
    data: action.data,
  };
};
const failed = (state, action) => {
  console.log(action);
  return {
    ...state,
    error: action.error,
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
