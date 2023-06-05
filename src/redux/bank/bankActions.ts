import { ActionType } from "./actionTypes";

export const bankDeposit = (deposit: number) => ({
  type: ActionType.BANK_DEPOSIT,
  payload: { deposit: deposit }
});

export const bankWithdraw = (withdraw: number) => ({
  type: ActionType.BANK_WITHDRAW,
  payload: { withdraw: withdraw }
});

export const bankRupt = () => ({
  type: ActionType.BANK_RUPT
});
