import { combineReducers } from "redux";
import layout from "./layout";
import user from "./user";

export const rootReducer = combineReducers({
  layout,
  user
});

export default rootReducer;