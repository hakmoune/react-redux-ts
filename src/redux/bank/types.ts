import { ActionType } from "./actionTypes";

interface bankDepositAction {
  type: ActionType.BANK_DEPOSIT;
  payload: { deposit: number };
}

interface bankWithdrawAction {
  type: ActionType.BANK_WITHDRAW;
  payload: { withdraw: number };
}

interface bankRuptAction {
  type: ActionType.BANK_RUPT;
}

export type Action = bankDepositAction | bankWithdrawAction | bankRuptAction;
