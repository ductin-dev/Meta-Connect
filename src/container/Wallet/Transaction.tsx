import img404 from "../../static/image/404.png";
import styles from "./style.module.scss";

const Transaction = () => {
  return (
    <div className={`w-full max-w-xs ${styles.container}`}>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Metamask Addresss
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Amount in ETH
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="****************"
          />
          <p className="text-red-500 text-xs italic">
            Please type valid amount.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
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
