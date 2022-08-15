import { deposit, withdraw } from "./store/balance/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance } from "./store/balance/selectors";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          dispatch(withdraw(7));
        }}
      >
        Withdraw 7$
      </button>
    </div>
  );
}

export default App;
