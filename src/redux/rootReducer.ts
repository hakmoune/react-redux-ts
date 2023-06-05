import { combineReducers } from "redux";
import { bankReducer } from "./bank/bankReducer";

export const rootReducer = combineReducers({
  bank: bankReducer
});
