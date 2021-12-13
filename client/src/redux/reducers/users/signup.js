import { ERROR, SIGN_UP } from "../../actions/type";

const initialState = {
  data: null,
  error: null,
};
const createAccount = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};

export default createAccount;
