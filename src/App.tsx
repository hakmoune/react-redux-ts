import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import * as bankActions from "./redux/bank/bankActions";
import { RootStateType } from "./redux/rootReducer";

function App() {
  const state = useSelector((state: RootStateType) => state.bank.bankTotal);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => dispatch(bankActions.bankDeposit(1000))}>
        Deposit
      </button>
      <button onClick={() => dispatch(bankActions.bankWithdraw(100))}>
        Withdraw
      </button>
      <button onClick={() => dispatch(bankActions.bankRupt())}>Bankrupt</button>
    </div>
  );
}

export default App;
