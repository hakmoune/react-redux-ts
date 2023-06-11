import { ActionType } from "./actionTypes";
import { Dispatch } from "redux";
import { Action } from "./types";

export const bankDeposit = (deposit: number): Action => ({
  type: ActionType.BANK_DEPOSIT,
  payload: { deposit: deposit }
});

export const bankWithdraw = (withdraw: number): Action => ({
  type: ActionType.BANK_WITHDRAW,
  payload: { withdraw: withdraw }
});

/*export const bankWithdraw = (withdraw: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANK_WITHDRAW,
      payload: { withdraw: withdraw }
    });
  };
};*/

export const bankRupt = (): Action => ({
  type: ActionType.BANK_RUPT
});
