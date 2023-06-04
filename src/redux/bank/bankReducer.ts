import * as actions from "./actionTypes";

type State = {
  bankTotal: number;
};

const initialState: State = {
  bankTotal: 1000
};

interface bankDepositAction {
  type: "BANK_DEPOSIT";
  payload: { deposit: number };
}

interface bankWithdrawAction {
  type: "BANK_WITHDRAW";
  payload: { withdraw: number };
}

interface bankRuptAction {
  type: "BANK_RUPT";
}

type Action = bankDepositAction | bankWithdrawAction | bankRuptAction;

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actions.BANK_DEPOSIT:
      return {
        bankTotal: state.bankTotal + action.payload.deposit
      };
    case actions.BANK_WITHDRAW:
      return {
        bankTotal: state.bankTotal - action.payload.withdraw
      };
    case actions.BANK_RUPT:
      return {
        bankTotal: 0
      };
    default:
      return state;
  }
};
