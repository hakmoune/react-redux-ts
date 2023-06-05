import { ActionType } from "./actionTypes";
import { Action } from "./types";

type State = {
  bankTotal: number;
};

const initialState: State = {
  bankTotal: 1000
};

export const bankReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.BANK_DEPOSIT:
      return {
        bankTotal: state.bankTotal + action.payload.deposit
      };
    case ActionType.BANK_WITHDRAW:
      return {
        bankTotal: state.bankTotal - action.payload.withdraw
      };
    case ActionType.BANK_RUPT:
      return {
        bankTotal: 0
      };
    default:
      return state;
  }
};
