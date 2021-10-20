import { combineReducers } from "redux";
import createAccount from "./users/signup";

const rootReducer = combineReducers({ createAccount });

export default rootReducer;
