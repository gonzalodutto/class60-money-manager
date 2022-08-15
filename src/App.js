import { deposit, withdraw, reset } from "./store/balance/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance } from "./store/balance/selectors";
import { useState } from "react";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  // const balance = useSelector(selectBalance);
  const balance = useSelector((reduxState) => reduxState.balance.amount);
  const [customAmount, setCustomAmount] = useState(0);

  return (
    <div className="App">
      <h1>Balance: {balance}$</h1>

      <div>
        <button
          onClick={() => {
            dispatch(deposit(10));
          }}
        >
          Deposit 10$
        </button>
        <p>
          <button
            onClick={() => {
              dispatch(withdraw(7));
            }}
          >
            Withdraw 7$
          </button>
        </p>
        <button
          onClick={() => {
            dispatch(reset(7));
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <p>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(parseInt(e.target.value));
            }}
          />
        </p>
        <button
          onClick={() => {
            dispatch(deposit(customAmount));
            setCustomAmount(0);
          }}
        >
          Deposit custom amount
        </button>
      </div>
    </div>
  );
}

export default App;
