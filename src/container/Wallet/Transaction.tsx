import { transaction } from "business/transaction";
import TextInput from "components/form/TextInput";
import { useState } from "react";
import styles from "./style.module.scss";

const Transaction = () => {
  const [state, setState] = useState({
    address: "",
    amount: "",
  });

  const [error, setError] = useState("");
  const [txs, setTxs] = useState({});

  const onChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`w-full max-w-xs ${styles.container}`}>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <TextInput
            name="address"
            title="MetaMask Address"
            value={state.address}
            placeholder="Address here"
            onChange={(e: any) => onChange(e)}
            error={error.length > 0}
          />
        </div>
        <div className="mb-6">
          <TextInput
            name="amount"
            value={state.amount}
            title=" Amount in ETH"
            placeholder="0.00"
            onChange={(e: any) => onChange(e)}
            error={error.length > 0}
            errorMess={error}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() =>
              transaction(state.address, state.amount, setError, setTxs)
            }
          >
            SEND
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;All transaction are secure
      </p>
    </div>
  );
};

export default Transaction;
