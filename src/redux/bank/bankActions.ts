import * as actions from "./actionTypes";

export const bankDeposit = (deposit: number) => ({
  type: actions.BANK_DEPOSIT,
  payload: { deposit: deposit }
});

export const bankWithdraw = (withdraw: number) => ({
  type: actions.BANK_WITHDRAW,
  payload: { withdraw: withdraw }
});

export const bankRupt = () => ({
  type: actions.BANK_RUPT
});
